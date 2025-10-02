// DOM Elements
const profileCard = document.querySelector('.profile-card');
const contactBtn = document.querySelector('.contact-btn');
const socialLinks = document.querySelectorAll('.social-link');
const skillTags = document.querySelectorAll('.skill-tag');
const statNumbers = document.querySelectorAll('.stat-number');
const profileImage = document.querySelector('.profile-image');

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    setupEventListeners();
    animateStats();
    setupParallaxEffect();
});

// Initialize all animations
function initializeAnimations() {
    // Add staggered animation to skill tags
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${0.1 * index}s`;
        tag.style.animation = 'fadeInUp 0.6s ease-out forwards';
    });
    
    // Add hover effect to profile image
    profileImage.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(5deg)';
    });
    
    profileImage.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
}

// Setup event listeners for interactive elements
function setupEventListeners() {
    // Contact button interaction
    contactBtn.addEventListener('click', function(e) {
        e.preventDefault();
        createRippleEffect(e);
        showContactModal();
    });
    
    // Social links interaction
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            createClickAnimation(this);
        });
    });
    
    // Skill tags hover effect
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Card tilt effect
    setupCardTiltEffect();
}

// Create ripple effect for buttons
function createRippleEffect(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    // Add ripple styles
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.pointerEvents = 'none';
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Create click animation for social links
function createClickAnimation(element) {
    element.style.transform = 'scale(0.9)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 150);
}

// Animate statistics numbers
function animateStats() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = parseInt(target.getAttribute('data-target'));
                animateNumber(target, targetValue);
                observer.unobserve(target);
            }
        });
    });
    
    statNumbers.forEach(number => {
        observer.observe(number);
    });
}

// Animate number counting
function animateNumber(element, target) {
    const duration = 2000;
    const start = performance.now();
    const startValue = 0;
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(startValue + (target - startValue) * easeOutQuart);
        
        element.textContent = currentValue;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(updateNumber);
}

// Setup card tilt effect
function setupCardTiltEffect() {
    let isTilted = false;
    
    profileCard.addEventListener('mousemove', function(e) {
        if (isTilted) return;
        
        const rect = this.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        const rotateX = (mouseY / rect.height) * -10;
        const rotateY = (mouseX / rect.width) * 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    profileCard.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        isTilted = false;
    });
}

// Setup parallax effect for background elements
function setupParallaxEffect() {
    const bgElements = document.querySelectorAll('.bg-circle');
    
    window.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        bgElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            
            element.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

// Show contact modal (placeholder function)
function showContactModal() {
    // Create a simple alert for now - can be replaced with actual modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease-out;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 40px;
        border-radius: 20px;
        text-align: center;
        max-width: 400px;
        margin: 20px;
        animation: slideUp 0.3s ease-out;
    `;
    
    modalContent.innerHTML = `
        <h3 style="margin-bottom: 20px; color: #1f2937;">Get in Touch!</h3>
        <p style="margin-bottom: 30px; color: #6b7280;">Thanks for your interest! You can reach me through the social links above.</p>
        <button onclick="this.parentElement.parentElement.remove()" style="
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
        ">Close</button>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .profile-card {
        transition: transform 0.3s ease;
    }
    
    .skill-tag {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add scroll animations
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

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.profile-name, .profile-title, .profile-description, .skills-container, .stats-container, .social-links, .contact-btn');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });
});
