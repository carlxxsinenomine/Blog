document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('mainNav');
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    const headerHeight = header.offsetHeight;
    const scrollThreshold = 100;
    const isMobile = window.matchMedia("(max-width: 991px)").matches;

    window.addEventListener('scroll', function() {
        if (isMobile) return; // Skip scroll effects on mobile
        
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // 1. Handle background change
        if (currentScroll > headerHeight * 0.8) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }

        // 2. Handle hide/show behavior
        if (currentScroll > headerHeight) {
            if (currentScroll > lastScrollTop) {
                // Scrolling down - hide navbar
                if (currentScroll > headerHeight + scrollThreshold) {
                    navbar.style.transform = 'translateY(-100%)';
                    navbar.style.transition = 'transform 0.3s ease-in-out';
                }
            } else {
                // Scrolling up - only show if near top
                if (currentScroll < scrollThreshold) {
                    navbar.style.transform = 'translateY(0)';
                    navbar.style.transition = 'transform 0.2s ease-out';
                }
            }
        } else {
            // At top of page - always show
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    // Initialize state
    if (window.scrollY > headerHeight * 0.8 || isMobile) {
        navbar.classList.add('navbar-scrolled');
    }
});