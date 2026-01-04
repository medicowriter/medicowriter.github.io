/**
 * MedicoWriter - Professional Medical Writing Portfolio
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Toggle ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileNavToggle.classList.toggle('bi-x'); // Toggle close icon if using Bootstrap Icons
            mobileNavToggle.classList.toggle('bi-list');
        });
    }

    // --- Close Mobile Menu on Link Click ---
    const navLinks = document.querySelectorAll('.nav-link, .nav-menu .btn');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileNavToggle.classList.toggle('bi-x');
                mobileNavToggle.classList.toggle('bi-list');
            }
        });
    });

    // --- Header Scroll Effect ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.boxShadow = 'none';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();

    // --- Form Handling (Formspree) ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const formData = new FormData(this);
            const status = document.getElementById('form-status');
            const submitBtn = this.querySelector('button[type="submit"]');

            try {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';

                const response = await fetch(this.action, {
                    method: this.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    const formContainer = this.closest('.contact-form');
                    formContainer.innerHTML = `
                        <div class="success-message" style="text-align: center; padding: 2rem; animation: fadeInUp 0.5s ease-out;">
                            <i class="fas fa-check-circle" style="font-size: 4rem; color: #2ecc71; margin-bottom: 1.5rem;"></i>
                            <h3 style="color: #2ecc71; margin-bottom: 1rem;">Message Sent Successfully!</h3>
                            <p style="font-size: 1.1rem; color: #555; margin-bottom: 2rem;">Thank you for reaching out. We will get back to you within 24 hours.</p>
                            <button class="btn btn-primary" onclick="location.reload()">Send Another Message</button>
                        </div>
                    `;
                } else {
                    status.innerHTML = '<div class="alert alert-error">Oops! There was a problem sending your message. Please try again.</div>';
                }
            } catch (error) {
                status.innerHTML = '<div class="alert alert-error">Oops! There was a problem connecting to the server.</div>';
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            }
        });
    }
    // --- Dynamic Copyright Year ---
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Dynamic Counter Animation ---
    const counters = document.querySelectorAll('.counter');
    const animationDuration = 1500; // 1.5 seconds

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const frameDuration = 1000 / 60; // 60fps
        const totalFrames = animationDuration / frameDuration;
        const increment = target / totalFrames;

        let currentCount = 0;

        const updateCounter = () => {
            currentCount += increment;

            if (currentCount < target) {
                counter.innerText = Math.ceil(currentCount);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };

        // Start animation immediately since it's in the hero section
        updateCounter();
    });
});
