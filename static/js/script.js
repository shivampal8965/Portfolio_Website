// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add animation to elements when they come into view
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.highlight-card, .service-card, .portfolio-item, .blog-post, section');
    
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, options);

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease-out';
        observer.observe(element);
    });
};

// Initialize animations
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Responsive navigation menu
const createResponsiveMenu = function() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    const ul = nav.querySelector('ul');
    if (!ul) return;
    
    // Create hamburger menu button
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-toggle';
    menuButton.innerHTML = '☰';
    menuButton.style.display = 'none';
    
    // Add button before the ul
    nav.insertBefore(menuButton, ul);
    
    // Toggle menu on click
    menuButton.addEventListener('click', () => {
        ul.classList.toggle('show');
    });
    
    // Show/hide menu button based on screen size
    const checkScreenSize = () => {
        if (window.innerWidth <= 768) {
            menuButton.style.display = 'block';
            ul.classList.remove('show');
        } else {
            menuButton.style.display = 'none';
            ul.classList.remove('show');
        }
    };
    
    // Check on load and resize
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
};

// Initialize responsive menu
document.addEventListener('DOMContentLoaded', createResponsiveMenu);
