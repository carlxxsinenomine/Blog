// Navbar background change on scroll
window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('mainNav');
<<<<<<< HEAD
    const navbarHeight = navbar.offsetHeight;
=======
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    const headerHeight = header.offsetHeight;
    const scrollThreshold = 100;
    const isMobile = window.matchMedia("(max-width: 991px)").matches;
>>>>>>> 27978456a68cfc9a301e02d5bf7bbd3ec713b0c2

    window.addEventListener('scroll', () => {
        if (window.scrollY > navbarHeight) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Initialize state on page load
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar-scrolled');
    }
});

// Optional: Navbar hide on scroll down, show on scroll up
let lastScrollTop = 0;
window.addEventListener('scroll', function () {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.getElementById('mainNav');

    if (st > lastScrollTop) {
        // Scroll down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scroll up
        navbar.style.transform = 'translateY(0)';
    }

    // At top of page
    if (st <= 0) {
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = st <= 0 ? 0 : st;
});