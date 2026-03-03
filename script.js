// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;

    revealElements.forEach(el => {
        const elTop = el.getBoundingClientRect().top;

        if (elTop < triggerBottom) {
            el.classList.add('active');
        } else {
            // Optional: Remove class to re-animate when scrolling back up
            // el.classList.remove('active');
        }
    });
};

// Initial check on load
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Mock Cart Interaction
const buyButtons = document.querySelectorAll('.btn-primary');

buyButtons.forEach(button => {
    if (button.textContent === 'Add to Cart') {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const originalText = button.textContent;
            button.textContent = 'Added to Secured Cart';
            button.style.background = '#39ff14'; // Change to neon green
            button.style.color = '#000';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = ''; // Reset
                button.style.color = '';
            }, 2000);
        });
    }
});
