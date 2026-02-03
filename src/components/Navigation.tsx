'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className={styles.navContainer}>
          {/* Logo */}
          <Link 
            href="/" 
            className={styles.logo}
            aria-label="Fitness900 - Home"
          >
            <span className={styles.logoText}>
              Fitness<span className={styles.logoAccent}>900</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav} aria-label="Main menu">
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="#features" className={styles.navLink}>
              Features
            </Link>
            <Link href="#about" className={styles.navLink}>
              About
            </Link>
            <Link href="#contact" className={styles.navLink}>
              Contact
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <div className={styles.ctaContainer}>
            <Link 
              href="#newsletter" 
              className={styles.ctaButton}
              aria-label="Get early access to Fitness900"
            >
              Get Early Access
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={styles.menuButtonInner}>
              <span className={`${styles.menuLine} ${isMenuOpen ? styles.menuLineActive : ''}`}></span>
              <span className={`${styles.menuLine} ${isMenuOpen ? styles.menuLineActive : ''}`}></span>
              <span className={`${styles.menuLine} ${isMenuOpen ? styles.menuLineActive : ''}`}></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          id="mobile-menu"
          className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
          aria-hidden={!isMenuOpen}
        >
          <div className={styles.mobileMenuContent}>
            <Link 
              href="/" 
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              href="#features" 
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              Features
            </Link>
            <Link 
              href="#about" 
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              href="#contact" 
              className={styles.mobileNavLink}
              onClick={closeMenu}
            >
              Contact
            </Link>
            <div className={styles.mobileCta}>
              <Link 
                href="#newsletter" 
                className={styles.mobileCtaButton}
                onClick={closeMenu}
                aria-label="Get early access to Fitness900"
              >
                Get Early Access
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className={styles.menuOverlay}
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </div>
    </nav>
  );
}