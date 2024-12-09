document.addEventListener("DOMContentLoaded", () => {
    // Generic function to toggle dropdowns
    const toggleDropdown = (iconId, dropdownId) => {
        const icon = document.getElementById(iconId);
        const dropdown = document.getElementById(dropdownId);

        if (!icon || !dropdown) {
            console.error(`Element with ID "${iconId}" or "${dropdownId}" not found.`);
            return;
        }

        icon.addEventListener("click", (e) => {
            console.log(`${iconId} clicked`);
            e.stopPropagation();
            document.querySelectorAll(".dropdown-content").forEach((el) => {
                if (el !== dropdown) el.classList.add("hidden");
            });
            dropdown.classList.toggle("hidden");
        });
    };

    // Mobile-specific dropdowns
    toggleDropdown("mobileDropdownToggleUser", "mobileDropdownUser");
    toggleDropdown("mobileDropdownToggleBars", "mobileDropdownBars");
    toggleDropdown("mobileDropdownToggleSearch", "mobileDropdownSearch");

    // Close dropdowns when clicking outside
    document.body.addEventListener("click", () => {
        document.querySelectorAll(".dropdown-content").forEach((el) => el.classList.add("hidden"));
    });
});
