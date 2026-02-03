import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container mx-auto px-4">
        <div className={styles.footerContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <Link 
              href="/" 
              className={styles.footerLogo}
              aria-label="Fitness900 - Home"
            >
              <span className={styles.logoText}>
                Fitness<span className={styles.logoAccent}>900</span>
              </span>
            </Link>
            <p className={styles.brandDescription}>
              Transform your fitness journey with personalized training, 
              expert nutrition guidance, and a supportive community. 
              Coming soon to revolutionize your wellness experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.linkSection}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <nav className={styles.linkList} aria-label="Footer navigation">
              <Link href="/" className={styles.footerLink}>
                Home
              </Link>
              <Link href="#features" className={styles.footerLink}>
                Features
              </Link>
              <Link href="#about" className={styles.footerLink}>
                About
              </Link>
              <Link href="#contact" className={styles.footerLink}>
                Contact
              </Link>
            </nav>
          </div>

          {/* Company Links */}
          <div className={styles.linkSection}>
            <h3 className={styles.sectionTitle}>Company</h3>
            <nav className={styles.linkList} aria-label="Company links">
              <Link href="#" className={styles.footerLink}>
                Privacy Policy
              </Link>
              <Link href="#" className={styles.footerLink}>
                Terms of Service
              </Link>
              <Link href="#" className={styles.footerLink}>
                Support
              </Link>
              <Link href="#" className={styles.footerLink}>
                FAQ
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h3 className={styles.sectionTitle}>Get in Touch</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <svg 
                  className={styles.contactIcon} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
                <a 
                  href="mailto:hello@fitness900.com" 
                  className={styles.contactLink}
                  aria-label="Email us at hello@fitness900.com"
                >
                  hello@fitness900.com
                </a>
              </div>
              
              <div className={styles.contactItem}>
                <svg 
                  className={styles.contactIcon} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                  />
                </svg>
                <a 
                  href="tel:+1-800-FITNESS" 
                  className={styles.contactLink}
                  aria-label="Call us at 1-800-FITNESS"
                >
                  1-800-FITNESS
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>Follow Us</h4>
              <div className={styles.socialLinks} role="list">
                <a
                  href="https://facebook.com/fitness900"
                  className={styles.socialLink}
                  aria-label="Follow us on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                >
                  <svg 
                    className={styles.socialIcon} 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a
                  href="https://instagram.com/fitness900"
                  className={styles.socialLink}
                  aria-label="Follow us on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                >
                  <svg 
                    className={styles.socialIcon} 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.316-1.296C4.343 14.928 3.9 13.574 3.9 12.017c0-1.297.49-2.448 1.296-3.316.864-.768 2.018-1.233 3.316-1.233 1.297 0 2.448.49 3.316 1.296.864.768 1.233 2.018 1.233 3.316 0 1.297-.49 2.448-1.296 3.316-.768.864-2.018 1.233-3.316 1.233zm7.072 0c-1.297 0-2.448-.49-3.316-1.296-.864-.768-1.233-2.018-1.233-3.316 0-1.297.49-2.448 1.296-3.316.768-.864 2.018-1.233 3.316-1.233 1.297 0 2.448.49 3.316 1.296.864.768 1.233 2.018 1.233 3.316 0 1.297-.49 2.448-1.296 3.316-.768.864-2.018 1.233-3.316 1.233z"/>
                  </svg>
                </a>

                <a
                  href="https://twitter.com/fitness900"
                  className={styles.socialLink}
                  aria-label="Follow us on Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                >
                  <svg 
                    className={styles.socialIcon} 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>

                <a
                  href="https://youtube.com/@fitness900"
                  className={styles.socialLink}
                  aria-label="Follow us on YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                >
                  <svg 
                    className={styles.socialIcon} 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>
              © {currentYear} Fitness900. All rights reserved. 
              <span className={styles.builtBy}>
                Built with ❤️ by{' '}
                <a 
                  href="https://muhammadanique.com" 
                  className={styles.authorLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Muhammad Anique's website"
                >
                  Muhammad Anique
                </a>
              </span>
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            className={styles.backToTop}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll back to top"
          >
            <svg 
              className={styles.backToTopIcon} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}