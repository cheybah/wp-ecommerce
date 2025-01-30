// Bouquets

const productsBou = {
    bouquet1: {
        id: 'bouquet1',
        name: "Silk Flower Bouquet",
        price: "199",
        originalPrice: "249",
        description: "A timeless and elegant arrangement featuring luxurious silk flowers, carefully crafted to mimic the delicate beauty of real blossoms. This bouquet boasts large, soft petals that exude grace and charm, making it a perfect choice for sophisticated décor, weddings, or as a heartfelt gift that will never fade.",
        mainImage: "../assets/img/accessories/bouquet1.jpg",
        gallery: [
            "../assets/img/accessories/bouquet1.jpg",
            "../assets/img/accessories/bouquet1-1.jpg",
        ],
        discount: "20% OFF"
    },
    bouquet2: {
        id: 'bouquet2',
        name: "White Heaven Bouquet",
        price: "299",
        originalPrice: "349",
        description: "A stunning collection of pristine artificial white flowers, symbolizing purity, peace, and elegance. This bouquet radiates a heavenly aura, perfect for serene home décor, wedding arrangements, or as a graceful centerpiece that brings an air of tranquility to any space.",
        mainImage: "../assets/img/accessories/bouquet2.jpg",
        gallery: [
            "../assets/img/accessories/bouquet2.jpg",
            "../assets/img/accessories/bouquet2-1.jpg",
        ],
        discount: "15% OFF"
    },
    bouquet3: {
        id: 'bouquet3',
        name: "Red Royalty Bouquet",
        price: "299",
        originalPrice: "349",
        description: "A bold and majestic arrangement of deep red artificial flowers, exuding passion, strength, and regal charm. This luxurious bouquet makes a powerful statement, whether used for romantic gestures, grand celebrations, or elegant interior décor that demands attention.",
        mainImage: "../assets/img/accessories/bouquet3.jpg",
        gallery: [
            "../assets/img/accessories/bouquet3.jpg",
            "../assets/img/accessories/bouquet3-1.jpg",
        ],
        discount: "15% OFF"
    },
    bouquet4: {
        id: 'bouquet4',
        name: "Midnight Bloom Bouquet",
        price: "299",
        originalPrice: "349",
        description: "A mesmerizing bouquet featuring dark blue artificial flowers, evoking the mystery and allure of a midnight sky. Rich and captivating, this arrangement is perfect for adding a touch of sophistication and enchantment to any setting, making it a unique and stylish décor piece.",
        mainImage: "../assets/img/accessories/bouquet4.jpg",
        gallery: [
            "../assets/img/accessories/bouquet4.jpg",
            "../assets/img/accessories/bouquet4-1.jpg",
        ],
        discount: "15% OFF"
    },
    bouquet5: {
        id: 'bouquet5',
        name: "Ethereal Crystal Bouquet",
        price: "299",
        originalPrice: "349",
        description: "A breathtaking arrangement of shimmering crystal beads, designed to capture light and create a dazzling display of elegance. This radiant bouquet is perfect for modern décor, glamorous events, or as a unique, everlasting keepsake that sparkles with every movement.",
        mainImage: "../assets/img/accessories/bouquet5.jpg",
        gallery: [
            "../assets/img/accessories/bouquet5.jpg",
            "../assets/img/accessories/bouquet5-1.jpg",
            "../assets/img/accessories/bouquet5-2.jpg"
        ],
        discount: "15% OFF"
    }
};

// Generate Product Cards
function generateProductCards() {
    const container = document.getElementById('productsBouContainer');

    Object.values(productsBou).forEach(product => {
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
