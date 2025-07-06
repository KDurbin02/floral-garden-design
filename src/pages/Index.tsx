
import { useEffect } from 'react';
import '../styles/floral.css';

const Index = () => {
  useEffect(() => {
    // Load the JavaScript functionality
    const script = document.createElement('script');
    script.src = '/src/scripts/floral.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="floral-website">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Bloom & Bliss</h2>
          </div>
          <ul className="nav-menu" id="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Creating Beautiful Moments</h1>
          <p>Premium floral arrangements for your special occasions</p>
          <button className="cta-button">Book Consultation</button>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Beautiful orange flowers" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Bloom & Bliss</h2>
              <p>With over 15 years of experience in floral design, we specialize in creating breathtaking arrangements that capture the essence of your special moments. Our passion for flowers and attention to detail ensures every arrangement tells your unique story.</p>
              <p>From intimate gatherings to grand celebrations, we bring artistry and elegance to every occasion.</p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Elegant floral workspace" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Wedding Florals</h3>
              <p>Complete wedding floral packages including bridal bouquets, centerpieces, and ceremony decorations.</p>
              <span className="price">From $800</span>
            </div>
            <div className="service-card">
              <h3>Event Design</h3>
              <p>Corporate events, parties, and celebrations with custom floral arrangements and styling.</p>
              <span className="price">From $400</span>
            </div>
            <div className="service-card">
              <h3>Daily Arrangements</h3>
              <p>Fresh flower deliveries for homes, offices, and special occasions throughout the week.</p>
              <span className="price">From $75</span>
            </div>
            <div className="service-card">
              <h3>Consultation</h3>
              <p>Personal consultation to discuss your vision and create the perfect floral design plan.</p>
              <span className="price">Complimentary</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2>Our Work</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Orange roses arrangement" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Natural outdoor setting" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Elegant lighting and flowers" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Beautiful floral centerpiece" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <div className="contact-item">
                <h4>Address</h4>
                <p>123 Flower Street<br />Garden City, GC 12345</p>
              </div>
              <div className="contact-item">
                <h4>Phone</h4>
                <p>(555) 123-4567</p>
              </div>
              <div className="contact-item">
                <h4>Email</h4>
                <p>hello@bloomandbliss.com</p>
              </div>
              <div className="contact-item">
                <h4>Hours</h4>
                <p>Monday - Saturday: 9AM - 6PM<br />Sunday: 10AM - 4PM</p>
              </div>
            </div>
            <div className="contact-form">
              <form id="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="tel" placeholder="Your Phone" />
                <textarea placeholder="Tell us about your event..." rows={5} required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>Bloom & Bliss</h3>
              <p>Creating beautiful moments since 2008</p>
            </div>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Bloom & Bliss. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
