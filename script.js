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
