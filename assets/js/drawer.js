document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("cartIcon");
    const cartDrawer = document.getElementById("cartDrawer");
    const closeCartDrawer = document.getElementById("closeCartDrawer");
    const overlay = document.getElementById("overlay");

    // Open the cart drawer
    cartIcon.addEventListener("click", function () {
        cartDrawer.classList.add("open");
        overlay.classList.add("active");
    });

    // Close the cart drawer
    closeCartDrawer.addEventListener("click", function () {
        cartDrawer.classList.remove("open");
        overlay.classList.remove("active");
    });

    // Close the drawer and overlay when clicking outside
    overlay.addEventListener("click", function () {
        cartDrawer.classList.remove("open");
        overlay.classList.remove("active");
    });
});
