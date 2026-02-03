import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.footerContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <div className={styles.brandLogo}>
              <span className={styles.brandText}>Fitness900</span>
            </div>
            <p className={styles.brandDescription}>
              Your fitness journey starts here. Building the future of health and wellness.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <nav className={styles.footerNav} aria-label="Footer navigation">
              <a href="#about" className={styles.footerLink}>
                About Us
              </a>
              <a href="#services" className={styles.footerLink}>
                Services
              </a>
              <a href="#contact" className={styles.footerLink}>
                Contact
              </a>
              <a href="#privacy" className={styles.footerLink}>
                Privacy Policy
              </a>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>Get In Touch</h3>
            <div className={styles.contactInfo}>
              <p className={styles.contactItem}>
                <span className={styles.contactLabel}>Email:</span>
                <a 
                  href="mailto:hello@fitness900.com" 
                  className={styles.contactLink}
                  aria-label="Send email to hello@fitness900.com"
                >
                  hello@fitness900.com
                </a>
              </p>
              <p className={styles.contactItem}>
                <span className={styles.contactLabel}>Phone:</span>
                <a 
                  href="tel:+1234567890" 
                  className={styles.contactLink}
                  aria-label="Call +1 (234) 567-890"
                >
                  +1 (234) 567-890
                </a>
              </p>
            </div>
          </div>
          
          {/* Social Media */}
          <div className={styles.socialSection}>
            <h3 className={styles.sectionTitle}>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a 
                href="#" 
                className={styles.socialLink}
                aria-label="Follow us on Facebook (Coming Soon)"
                title="Facebook - Coming Soon"
              >
                <span className={styles.socialIcon}>📘</span>
                Facebook
              </a>
              <a 
                href="#" 
                className={styles.socialLink}
                aria-label="Follow us on Instagram (Coming Soon)"
                title="Instagram - Coming Soon"
              >
                <span className={styles.socialIcon}>📷</span>
                Instagram
              </a>
              <a 
                href="#" 
                className={styles.socialLink}
                aria-label="Follow us on Twitter (Coming Soon)"
                title="Twitter - Coming Soon"
              >
                <span className={styles.socialIcon}>🐦</span>
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className={styles.footerBottom}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} Fitness900. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <a href="#terms" className={styles.bottomLink}>
                Terms of Service
              </a>
              <span className={styles.separator} aria-hidden="true">|</span>
              <a href="#privacy" className={styles.bottomLink}>
                Privacy Policy
              </a>
              <span className={styles.separator} aria-hidden="true">|</span>
              <a href="#cookies" className={styles.bottomLink}>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}