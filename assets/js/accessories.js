document.addEventListener('DOMContentLoaded', function() {
    // Initialize Owl Carousel
    function initCarousel() {
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: true,
            responsiveRefreshRate: 100
        });
    }

    // Modal Functions
    window.openModal = function(product) {
        document.getElementById('productModal').classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        
        // Populate modal data
        document.getElementById('modalProductName').textContent = product.name;
        document.getElementById('modalProductPrice').textContent = product.price;
        document.getElementById('modalProductDescription').textContent = product.description;
        
        initCarousel();
    }

    window.closeModal = function() {
        document.getElementById('productModal').classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        $('.owl-carousel').trigger('destroy.owl.carousel');
    }

    // Product Data
    const products = {
        'product1': {
            name: 'Vintage Pearl Crown',
            price: '299.00',
            description: 'Handcrafted silver crown with freshwater pearls and crystal details.'
        },
        'product2': {
            name: 'Royal Bridal Bouquet',
            price: '199.00',
            description: 'Premium silk bouquet with seasonal flowers and lace wrapping.'
        }
    };

    // Event Listeners
    document.querySelectorAll('.featured-item').forEach(item => {
        item.addEventListener('click', () => {
            openModal(products.product1); // Replace with dynamic data
        });
    });

    // Quantity Selector
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const input = e.currentTarget.parentElement.querySelector('input');
            let value = parseInt(input.value);
            
            if(e.currentTarget.classList.contains('minus')) {
                value = value > 1 ? value - 1 : 1;
            } else {
                value = value + 1;
            }
            
            input.value = value;
        });
    });

    // Size Selection
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('bg-black', 'text-white'));
            e.currentTarget.classList.add('bg-black', 'text-white');
        });
    });

    // Close modal on outside click
    document.getElementById('productModal').addEventListener('click', (e) => {
        if(e.target === document.getElementById('productModal')) {
            closeModal();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Parallax effect for hero image
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-image');
        if(parallax) {
            parallax.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;
        }
    });

    // Intersection Observer for fade-in effects
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.category-card').forEach(card => {
        observer.observe(card);
    });
});

// Open Modal
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        document.getElementById('productModal').classList.remove('hidden');
        $('.owl-carousel').owlCarousel({
            items: 3,
            loop: true,
            nav: true,
            dots: false
        });
    });
});

// Close Modal
function closeModal() {
    document.getElementById('productModal').classList.add('hidden');
    $('.owl-carousel').trigger('destroy.owl.carousel');
}

// Change Main Image on Carousel Click
document.querySelectorAll('.owl-carousel .item img').forEach(img => {
    img.addEventListener('click', () => {
        document.getElementById('modalMainImage').src = img.src;
    });
});

