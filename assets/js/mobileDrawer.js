document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.getElementById("mobileCartIcon");
    const cartDrawer = document.getElementById("mobileCartDrawer");
    const closeCartDrawer = document.getElementById("closeMobileCartDrawer");
    const overlay = document.getElementById("cartOverlay");

    // Function to open the mobile cart drawer
    cartIcon.addEventListener("click", () => {
        cartDrawer.classList.add("active"); // Show drawer
        overlay.classList.add("active");    // Show overlay
    });

    // Close cart drawer when clicking the close button
    closeCartDrawer.addEventListener("click", () => {
        cartDrawer.classList.remove("active"); // Hide drawer
        overlay.classList.remove("active");    // Hide overlay
    });

    // Close cart drawer when clicking on the overlay
    overlay.addEventListener("click", () => {
        cartDrawer.classList.remove("active"); // Hide drawer
        overlay.classList.remove("active");    // Hide overlay
    });
});
