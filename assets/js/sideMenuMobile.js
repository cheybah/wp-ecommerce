document.getElementById("mobileMenuToggle").addEventListener("click", function () {
    document.getElementById("mobileSideMenu").style.left = "0";
});

document.getElementById("closeMobileMenu").addEventListener("click", function () {
    document.getElementById("mobileSideMenu").style.left = "-100%";
});

//dropdown menu for shop
const shopDropdown = document.getElementById('shopDropdown');
const shopSubmenu = document.getElementById('shopSubmenu');
const shopArrow = document.getElementById('shopArrow');

shopDropdown.addEventListener('click', () => {
    if (shopSubmenu.classList.contains('hidden')) {
        shopSubmenu.classList.remove('hidden');
        shopArrow.style.transform = 'rotate(180deg)';
    } else {
        shopSubmenu.classList.add('hidden');
        shopArrow.style.transform = 'rotate(0deg)';
    }
});

//dropdown menu for products

const productsDropdown = document.getElementById('productsDropdown');
const productsSubmenu = document.getElementById('productsSubmenu');
const productsArrow = document.getElementById('productsArrow');

productsDropdown.addEventListener('click', () => {
    if (productsSubmenu.classList.contains('hidden')) {
        productsSubmenu.classList.remove('hidden');
        productsArrow.style.transform = 'rotate(180deg)';
    } else {
        productsSubmenu.classList.add('hidden');
        productsArrow.style.transform = 'rotate(0deg)';
    }
});

//dropdown menu for accessories

const accessoriesDropdown = document.getElementById('accessoriesDropdown');
const accessoriesSubmenu = document.getElementById('accessoriesSubmenu');
const accessoriesArrow = document.getElementById('accessoriesArrow');

accessoriesDropdown.addEventListener('click', () => {
    if (accessoriesSubmenu.classList.contains('hidden')) {
        accessoriesSubmenu.classList.remove('hidden');
        accessoriesArrow.style.transform = 'rotate(180deg)';
    } else {
        accessoriesSubmenu.classList.add('hidden');
        accessoriesArrow.style.transform = 'rotate(0deg)';
    }
});