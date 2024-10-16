// Store breadcrumb links in an array for easy reference
const breadcrumbs = document.querySelectorAll('.breadcrumb-item a');
let currentIndex = 0; // Starting index for "All Shows"

function setActive(element) {
    // Remove 'active' class from all breadcrumb links
    breadcrumbs.forEach(link => link.classList.remove('active'));

    // Set the 'active' class on the clicked link
    element.classList.add('active');

    // Update the current index based on clicked link
    currentIndex = Array.from(breadcrumbs).indexOf(element);
}

function moveLeft() {
    // If at the beginning, wrap around to the last item
    if (currentIndex === 0) {
        currentIndex = breadcrumbs.length - 1;
    } else {
        currentIndex -= 1;
    }
    updateActiveBreadcrumb();
}

function moveRight() {
    // If at the end, wrap around to the first item
    if (currentIndex === breadcrumbs.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex += 1;
    }
    updateActiveBreadcrumb();
}

function updateActiveBreadcrumb() {
    // Remove 'active' class from all breadcrumb links
    breadcrumbs.forEach(link => link.classList.remove('active'));

    // Add 'active' class to the current index breadcrumb
    breadcrumbs[currentIndex].classList.add('active');
}

function toggleHeartColor(icon) {
    icon.classList.toggle("redcolor");

    // Toggle between outline (fa-regular) and filled (fa-solid) heart
    if (icon.classList.contains("fa-regular")) {
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
    } else {
        icon.classList.remove("fa-solid");
        icon.classList.add("fa-regular");
    }
}

// Array of images for each product
const productImages = {
    1: [
        './assets/images/shape (1).png',
        './assets/images/shape (2).png', // Add more images for the first product
    ],
    2: [
        './assets/images/shape (2).png',
        './assets/images/shape.png', // Add more images for the second product
    ],
    3: [
        './assets/images/shape.png',
        './assets/images/shape (2).png', // Add more images for the third product
    ],
};

const currentImageIndex = {
    1: 0,
    2: 0,
    3: 0,
};

// Function to change image based on direction and product number
function changeImage(direction, productNumber) {
    if (direction === 'left') {
        currentImageIndex[productNumber] = (currentImageIndex[productNumber] > 0) ? currentImageIndex[productNumber] - 1 : productImages[productNumber].length - 1;
    } else if (direction === 'right') {
        currentImageIndex[productNumber] = (currentImageIndex[productNumber] < productImages[productNumber].length - 1) ? currentImageIndex[productNumber] + 1 : 0;
    }

    // Update the image src based on the current index
    document.getElementById(`productImage${productNumber}`).src = productImages[productNumber][currentImageIndex[productNumber]];
}
