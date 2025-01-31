// Bridal Crown 

const products = {
    crown1: {
        id: 'crown1',
        name: "Matia Stone And Crystal Crown",
        price: "125",
        originalPrice: "148",
        description: "Matia Zircon Stone And Crystal Beads And Pearls Bridal Crown.",
        mainImage: "../assets/img/accessories/crown1.jpg",
        gallery: [
            "../assets/img/accessories/crown1.jpg",
            "../assets/img/accessories/crown1-1.jpg",
        ],
        discount: "20% OFF"
    },
    crown2: {
        id: 'crown2',
        name: "Vera Red Emerald Crown",
        price: "126",
        originalPrice: "150",
        description: "Vera Zircon Stone And Crystal Bead Henna Crown - Red",
        mainImage: "../assets/img/accessories/corwn2.jpg",
        gallery: [
            "../assets/img/accessories/corwn2.jpg",
            "../assets/img/accessories/crown2-2.jpg",
            "../assets/img/accessories/crown2-3.jpg"
        ],
        discount: "15% OFF"
    },
    crown3: {
        id: 'crown3',
        name: "Myron Zircon Crown",
        price: "165",
        originalPrice: "200",
        description: "Myron Zircon Stone Full Turtle Bridal Crown",
        mainImage: "../assets/img/accessories/crown4.jpg",
        gallery: [
            "../assets/img/accessories/crown4.jpg",
            "../assets/img/accessories/crown4-1.jpg",
            "../assets/img/accessories/crown4-2.jpg"
        ],
        discount: "15% OFF"
    }
};

// Generate Product Cards
function generateProductCards() {
    const container = document.getElementById('productsContainer');

    Object.values(products).forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]';
        card.innerHTML = `
            <div class="relative h-82 overflow-hidden">
                <img src="${product.mainImage}" alt="${product.name}" 
                     class="w-full h-full object-cover transition-opacity duration-300 hover:opacity-90">
                <span class="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                    ${product.discount}
                </span>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
                <div class="flex items-baseline gap-3">
                    <span class="text-2xl font-bold text-rose-600">€${product.price}</span>
                    <span class="text-lg text-gray-400 line-through">€${product.originalPrice}</span>
                </div>
            </div>
        `;

        card.addEventListener('click', () => showProductModal(product));
        container.appendChild(card);
    });
}

// Show Product Modal
function showProductModal(product) {
    const modal = document.getElementById('productModal');
    const carousel = document.querySelector('.owl-carousel');
    const owl = $(carousel);

    // Show modal immediately with loading state
    modal.classList.remove('hidden');
    carousel.innerHTML = `
        <div class="loading-indicator">
            <div class="spinner"></div>
        </div>
    `;

    // Update main content first
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalCurrentPrice').textContent = `€${product.price}`;
    document.getElementById('modalOriginalPrice').textContent = `€${product.originalPrice}`;
    document.getElementById('modalPriceButton').textContent = `€${product.price}`;
    document.getElementById('modalProductDescription').textContent = product.description;
    
    const mainImg = document.getElementById('modalMainImage');
    mainImg.src = product.mainImage;
    mainImg.alt = product.name;

    // Destroy existing carousel instance
    if (owl.data('owl.carousel')) {
        owl.trigger('destroy.owl.carousel');
        owl.removeClass('owl-loaded owl-hidden');
        owl.find('.owl-stage-outer').remove();
    }

    // Create gallery images
    carousel.innerHTML = product.gallery.map(img => `
        <div class="item">
            <img src="${img}" 
                 class="h-24 w-full object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-rose-400"
                 onclick="document.getElementById('modalMainImage').src = '${img}'">
        </div>
    `).join('');

    // Force DOM reflow before initialization
    void carousel.offsetHeight;

    // Initialize carousel with proper timing
    requestAnimationFrame(() => {
        owl.owlCarousel({
            items: 3,
            margin: 16,
            nav: true,
            dots: false,
            responsive: {
                0: { items: 2 },
                768: { items: 3 }
            },
            onInitialized: () => {
                // Remove loading state
                carousel.querySelector('.loading-indicator')?.remove();
            }
        });
    });
}

// function showProductModal(product) {


//     document.getElementById('modalProductName').textContent = product.name;
//     document.getElementById('modalCurrentPrice').textContent = `$${product.price}`;
//     document.getElementById('modalOriginalPrice').textContent = `$${product.originalPrice}`;
//     document.getElementById('modalPriceButton').textContent = `$${product.price}`;
//     document.getElementById('modalProductDescription').textContent = product.description;

//     const mainImg = document.getElementById('modalMainImage');
//     mainImg.src = product.mainImage;
//     mainImg.alt = product.name;

//     const carousel = document.querySelector('.owl-carousel');
//     carousel.innerHTML = product.gallery.map(img => `
//         <div class="item">
//             <img src="${img}" 
//                  class="h-24 w-full object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-rose-400"
//                  onclick="document.getElementById('modalMainImage').src = '${img}'">
//         </div>
//     `).join('');

//     $('.owl-carousel').owlCarousel({
//         items: 3,
//         margin: 16,
//         nav: true,
//         dots: false,
//         responsive: {
//             0: { items: 2 },
//             768: { items: 3 }
//         }
//     });

//     document.getElementById('productModal').classList.remove('hidden');
// }

// Close Modal
function closeModal() {
    document.getElementById('productModal').classList.add('hidden');
    $('.owl-carousel').trigger('destroy.owl.carousel');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    generateProductCards();

    // Close modal on backdrop click
    document.getElementById('productModal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('productModal')) closeModal();
    });
});
