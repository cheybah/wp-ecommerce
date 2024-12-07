document.addEventListener("DOMContentLoaded", function () {
    const toggleUser = document.getElementById("menuDropdownToggleUser");
    const menuUser = document.getElementById("menuDropdownUser");

    const toggleBars = document.getElementById("menuDropdownToggleBars");
    const menuBars = document.getElementById("menuDropdownBars");

    const searchIcon = document.getElementById("searchIcon");
    const searchDropdown = document.getElementById("searchDropdown");

    // Toggle visibility of the "fa-user" dropdown
    toggleUser.addEventListener("click", function () {
        if (menuUser.classList.contains("hidden")) {
            menuUser.classList.remove("hidden");
        } else {
            menuUser.classList.add("hidden");
        }
    });

    // Toggle visibility of the "fa-bars" dropdown

    toggleBars.addEventListener("click", function () {
        if (menuBars.classList.contains("hidden")) {
            menuBars.classList.remove("hidden");
        } else {
            menuBars.classList.add("hidden");
        }
    });

    searchIcon.addEventListener("click", function () {
        console.log("Search icon clicked"); // Debugging line

        if (searchDropdown.classList.contains("hidden")) {
            searchDropdown.classList.remove("hidden");
        } else {
            searchDropdown.classList.add("hidden");
        }
    });


    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        console.log("Search icon clicked"); // Debugging line

        // Check if the click was outside of the toggles and the dropdowns
        if (!toggleUser.contains(event.target) && !menuUser.contains(event.target)) {
            menuUser.classList.add("hidden");
        }
        if (!toggleBars.contains(event.target) && !menuBars.contains(event.target)) {
            menuBars.classList.add("hidden");
        }
        if (!searchIcon.contains(event.target) && !searchDropdown.contains(event.target)) {
            searchDropdown.classList.add("hidden");
        }
    });


});
