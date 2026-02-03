'use client';

import { useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navigation} aria-label="Main navigation">
      <div className="container">
        <div className={styles.navContent}>
          {/* Logo/Brand */}
          <div className={styles.brand}>
            <a href="/" className={styles.brandLink} aria-label="Fitness900 Home">
              <span className={styles.brandText}>Fitness900</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className={styles.navLinks}>
            {/* Future navigation items can be added here */}
            <a href="#about" className={styles.navLink}>
              About
            </a>
            <a href="#services" className={styles.navLink}>
              Services
            </a>
            <a href="#contact" className={styles.navLink}>
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
          aria-hidden={!isMenuOpen}
        >
          <div className={styles.mobileNavLinks}>
            <a
              href="#about"
              className={styles.mobileNavLink}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className={styles.mobileNavLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className={styles.mobileNavLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}