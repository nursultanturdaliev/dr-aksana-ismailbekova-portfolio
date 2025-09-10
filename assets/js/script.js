// Mobile navigation toggle with enhanced mobile support
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let isMenuToggling = false;

// Enhanced mobile menu functionality - fixed for mobile devices
function mobileMenu(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    // Prevent double-firing on mobile devices
    if (isMenuToggling) return;
    
    isMenuToggling = true;
    
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
    // Prevent body scrolling when mobile menu is open
    if (navMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
        document.body.style.top = `-${window.scrollY}px`;
    } else {
        const scrollY = document.body.style.top;
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.top = "";
        if (scrollY) {
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    }
    
    // Reset the toggle flag after a short delay
    setTimeout(() => {
        isMenuToggling = false;
    }, 300);
}

// Check if elements exist before adding listeners
if (hamburger && navMenu) {
    // Use both touch and click events for better mobile support
    hamburger.addEventListener("click", mobileMenu);
    hamburger.addEventListener("touchend", function(e) {
        e.preventDefault();
        mobileMenu(e);
    });
}

// Close mobile menu when clicking on a nav link
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => {
    n.addEventListener("click", closeMenu);
});

function closeMenu() {
    if (hamburger && navMenu) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        
        // Restore scrolling
        const scrollY = document.body.style.top;
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.top = "";
        if (scrollY) {
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
        
        isMenuToggling = false;
    }
}

// Close mobile menu when clicking outside - fixed to prevent immediate closing
document.addEventListener("click", (e) => {
    // Add a small delay to prevent immediate closing after opening
    setTimeout(() => {
        if (navMenu.classList.contains("active") && 
            !navMenu.contains(e.target) && 
            !hamburger.contains(e.target) &&
            !isMenuToggling) {
            closeMenu();
        }
    }, 100);
});

// Close mobile menu on escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
        closeMenu();
    }
});

// Close mobile menu on window resize (if user rotates device)
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        closeMenu();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll effect is now handled by the mobile-optimized version below

// Form submission handling
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formValues = Object.fromEntries(formData);
        
        // Simple form validation
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Create mailto link
        const subject = encodeURIComponent('Portfolio Contact Form Submission');
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        const mailtoLink = `mailto:aksana.ismailbekova@zmo.de?subject=${subject}&body=${body}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        alert('Thank you for your message! Your email client should open now.');
        
        // Reset form
        this.reset();
    });
}

// Add animation on scroll for research cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe research cards and publication items
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.research-card, .publication-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add typing effect to hero title (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on page load (optional - uncomment to enable)
// document.addEventListener('DOMContentLoaded', () => {
//     const heroTitle = document.querySelector('.hero h1');
//     if (heroTitle) {
//         const originalText = heroTitle.textContent;
//         typeWriter(heroTitle, originalText, 100);
//     }
// });

// Mobile touch gesture support
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

function handleSwipeGesture() {
    const horizontalDistance = touchEndX - touchStartX;
    const verticalDistance = Math.abs(touchEndY - touchStartY);
    const minSwipeDistance = 100;
    
    // Only trigger horizontal swipes if vertical movement is minimal and not currently toggling
    if (verticalDistance < 50 && !isMenuToggling) {
        // Swipe right - open mobile menu
        if (horizontalDistance > minSwipeDistance && !navMenu.classList.contains("active") && window.innerWidth <= 768) {
            isMenuToggling = true;
            hamburger.classList.add("active");
            navMenu.classList.add("active");
            document.body.style.overflow = "hidden";
            setTimeout(() => { isMenuToggling = false; }, 300);
        }
        
        // Swipe left - close mobile menu
        if (horizontalDistance < -minSwipeDistance && navMenu.classList.contains("active") && window.innerWidth <= 768) {
            closeMenu();
        }
    }
}

// Add touch event listeners for swipe gestures
document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipeGesture();
}, { passive: true });

// Enhanced mobile performance optimizations
let ticking = false;

function updateNavbarOnScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#fff';
        navbar.style.backdropFilter = 'none';
    }
    ticking = false;
}

// Throttled scroll handler for better performance
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateNavbarOnScroll);
        ticking = true;
    }
}, { passive: true });

// Mobile-friendly form enhancements
document.addEventListener('DOMContentLoaded', () => {
    // Add mobile-specific form improvements
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        // Prevent zoom on focus for iOS
        input.addEventListener('focus', () => {
            if (window.innerWidth <= 768) {
                document.querySelector('meta[name="viewport"]').content = 
                    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
            }
        });
        
        input.addEventListener('blur', () => {
            if (window.innerWidth <= 768) {
                document.querySelector('meta[name="viewport"]').content = 
                    'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover';
            }
        });
    });
    
    // Add haptic feedback for supported devices
    const addHapticFeedback = (element) => {
        element.addEventListener('touchstart', () => {
            if ('vibrate' in navigator) {
                navigator.vibrate(10); // Very light vibration
            }
        }, { passive: true });
    };
    
    // Add haptic feedback to interactive elements
    document.querySelectorAll('.btn, .research-card, .hamburger, .nav-link').forEach(addHapticFeedback);
    
    // Lazy loading for better mobile performance
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});

// Mobile orientation change handler
window.addEventListener('orientationchange', () => {
    // Close mobile menu on orientation change
    if (navMenu.classList.contains("active")) {
        closeMenu();
    }
    
    // Refresh viewport after orientation change
    setTimeout(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, 100);
});

// Set initial viewport height for mobile browsers
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Debug function to help identify mobile issues
function debugMobile() {
    console.log('Mobile Debug Info:');
    console.log('Window width:', window.innerWidth);
    console.log('Hamburger element:', hamburger);
    console.log('Nav menu element:', navMenu);
    console.log('Is mobile viewport:', window.innerWidth <= 768);
}

// Add a simple test function that can be called from the browser console
window.testMobileMenu = function() {
    debugMobile();
    if (hamburger && navMenu) {
        console.log('Testing mobile menu toggle...');
        mobileMenu();
    } else {
        console.error('Mobile menu elements not found!');
    }
};

// Ensure mobile functionality is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mobile menu initialized');
    debugMobile();
    
    // Force display hamburger on mobile if not showing
    if (window.innerWidth <= 768 && hamburger) {
        hamburger.style.display = 'flex';
    }
});
