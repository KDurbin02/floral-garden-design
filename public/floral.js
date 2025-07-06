
// Foundation-based Floral Business Website JavaScript

$(document).ready(function() {
    // Initialize Foundation
    $(document).foundation();
    
    // Smooth scrolling for navigation links
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        
        if (target.length) {
            // Close off-canvas menu on mobile
            $('#offCanvas').foundation('close');
            
            // Smooth scroll to target
            $('html, body').animate({
                scrollTop: target.offset().top - 20
            }, 800, 'swing');
        }
    });
    
    // Active navigation highlighting
    function updateActiveNavigation() {
        const scrollPosition = $(window).scrollTop();
        const windowHeight = $(window).height();
        
        $('.nav-link').removeClass('active');
        
        $('section').each(function() {
            const section = $(this);
            const sectionTop = section.offset().top - 100;
            const sectionBottom = sectionTop + section.outerHeight();
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const sectionId = section.attr('id');
                $(`.nav-link[href="#${sectionId}"]`).addClass('active');
            }
        });
    }
    
    // Update active navigation on scroll
    $(window).on('scroll', function() {
        updateActiveNavigation();
    });
    
    // Fade in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('visible');
            }
        });
    }, observerOptions);
    
    // Add fade-in class to elements and observe them
    $('.service-card, .gallery-item, .about-content, .team-member').each(function() {
        $(this).addClass('fade-in');
        observer.observe(this);
    });
    
    // Contact form submission
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
        const form = $(this);
        const name = form.find('input[type="text"]').val();
        const email = form.find('input[type="email"]').val();
        const phone = form.find('input[type="tel"]').val();
        const message = form.find('textarea').val();
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Bitte füllen Sie alle Pflichtfelder aus.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
            return;
        }
        
        // Simulate form submission
        const submitButton = form.find('button[type="submit"]');
        const originalText = submitButton.text();
        
        submitButton.text('Wird gesendet...').prop('disabled', true);
        
        setTimeout(function() {
            alert('Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.');
            form[0].reset();
            submitButton.text(originalText).prop('disabled', false);
        }, 1500);
    });
    
    // Gallery lightbox effect
    $('.gallery-item').on('click', function() {
        const img = $(this).find('img');
        const imgSrc = img.attr('src');
        const imgAlt = img.attr('alt');
        
        // Create lightbox overlay
        const lightbox = $(`
            <div class="lightbox-overlay">
                <img src="${imgSrc}" alt="${imgAlt}" class="lightbox-image">
            </div>
        `);
        
        $('body').append(lightbox);
        
        // Fade in lightbox
        lightbox.hide().fadeIn(300);
        
        // Close lightbox on click
        lightbox.on('click', function() {
            $(this).fadeOut(300, function() {
                $(this).remove();
            });
        });
    });
    
    // Service card hover effects
    $('.service-card').hover(
        function() {
            $(this).css('transform', 'translateY(-10px) scale(1.02)');
        },
        function() {
            $(this).css('transform', 'translateY(0) scale(1)');
        }
    );
    
    // Hero CTA button smooth scroll
    $('.hero-section .button').on('click', function(e) {
        e.preventDefault();
        const target = $('#contact');
        
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 20
            }, 800, 'swing');
        }
    });
    
    // Parallax effect for hero section (subtle)
    $(window).on('scroll', function() {
        const scrolled = $(window).scrollTop();
        const heroImage = $('.hero-image');
        
        if (heroImage.length && scrolled < $(window).height()) {
            heroImage.css('transform', `translateY(${scrolled * 0.5}px)`);
        }
    });
    
    // Mobile menu auto-close on scroll
    let lastScrollTop = 0;
    $(window).on('scroll', function() {
        const currentScroll = $(window).scrollTop();
        
        if (currentScroll > lastScrollTop && currentScroll > 100) {
            // Scrolling down - close mobile menu if open
            if ($('#offCanvas').hasClass('is-open')) {
                $('#offCanvas').foundation('close');
            }
        }
        
        lastScrollTop = currentScroll;
    });
    
    // Form field animations
    $('.contact-form input, .contact-form textarea').on('focus', function() {
        $(this).parent().addClass('focused');
    }).on('blur', function() {
        if (!$(this).val()) {
            $(this).parent().removeClass('focused');
        }
    });
    
    // Initialize active navigation on page load
    updateActiveNavigation();
    
    console.log('Bloom & Bliss website initialized with Foundation framework');
});

// Utility functions
function showNotification(message, type = 'success') {
    const notification = $(`
        <div class="callout ${type}" data-closable style="position: fixed; top: 20px; right: 20px; z-index: 9999; max-width: 300px;">
            ${message}
            <button class="close-button" aria-label="Dismiss alert" type="button" data-close>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `);
    
    $('body').append(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(function() {
        notification.fadeOut(300, function() {
            $(this).remove();
        });
    }, 5000);
}

// Preload images for better performance
function preloadImages() {
    const images = [
        'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    ];
    
    images.forEach(function(src) {
        const img = new Image();
        img.src = src;
    });
}

// Initialize image preloading
preloadImages();
