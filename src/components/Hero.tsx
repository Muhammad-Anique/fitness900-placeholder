'use client';

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate time until launch (example: 30 days from now)
  useEffect(() => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30); // 30 days from now

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNotifyClick = () => {
    // Smooth scroll to newsletter section
    const newsletterSection = document.querySelector('#newsletter-heading');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className="container mx-auto px-4">
        <div className={styles.heroContent}>
          {/* Status Badge */}
          <div className={styles.statusBadge} role="status" aria-live="polite">
            <span className={styles.statusDot} aria-hidden="true"></span>
            <span className={styles.statusText}>Coming Soon</span>
          </div>

          {/* Main Heading */}
          <h1 id="hero-heading" className={styles.heroTitle}>
            Transform Your
            <span className={styles.heroTitleAccent}> Fitness Journey</span>
            <br />
            with Fitness900
          </h1>

          {/* Subtitle */}
          <p className={styles.heroSubtitle}>
            The ultimate fitness platform combining professional training, 
            personalized nutrition plans, and community support. 
            <strong> Launching soon</strong> with exclusive early access for our community.
          </p>

          {/* Countdown Timer */}
          <div className={styles.countdown} aria-labelledby="countdown-heading">
            <h2 id="countdown-heading" className={styles.countdownTitle}>
              Launch Countdown
            </h2>
            <div className={styles.countdownGrid} role="timer" aria-live="polite">
              <div className={styles.countdownItem}>
                <span className={styles.countdownNumber} aria-label={`${timeLeft.days} days`}>
                  {timeLeft.days.toString().padStart(2, '0')}
                </span>
                <span className={styles.countdownLabel}>Days</span>
              </div>
              <div className={styles.countdownItem}>
                <span className={styles.countdownNumber} aria-label={`${timeLeft.hours} hours`}>
                  {timeLeft.hours.toString().padStart(2, '0')}
                </span>
                <span className={styles.countdownLabel}>Hours</span>
              </div>
              <div className={styles.countdownItem}>
                <span className={styles.countdownNumber} aria-label={`${timeLeft.minutes} minutes`}>
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </span>
                <span className={styles.countdownLabel}>Minutes</span>
              </div>
              <div className={styles.countdownItem}>
                <span className={styles.countdownNumber} aria-label={`${timeLeft.seconds} seconds`}>
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </span>
                <span className={styles.countdownLabel}>Seconds</span>
              </div>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className={styles.ctaGroup}>
            <button
              onClick={handleNotifyClick}
              className={`${styles.ctaButton} ${styles.ctaPrimary}`}
              aria-describedby="primary-cta-description"
            >
              <span className={styles.ctaText}>Get Notified</span>
              <svg 
                className={styles.ctaIcon} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 17h5l-5 5-5-5h5v-5h5v5-5z"
                />
              </svg>
            </button>

            <a
              href="#features"
              className={`${styles.ctaButton} ${styles.ctaSecondary}`}
              aria-describedby="secondary-cta-description"
            >
              <span className={styles.ctaText}>Learn More</span>
              <svg 
                className={styles.ctaIcon} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5-5 5M6 12h12"
                />
              </svg>
            </a>
          </div>

          {/* CTA Descriptions for screen readers */}
          <div className="sr-only">
            <p id="primary-cta-description">
              Click to scroll to the newsletter signup section
            </p>
            <p id="secondary-cta-description">
              Click to learn more about Fitness900 features
            </p>
          </div>

          {/* Key Benefits */}
          <div className={styles.benefits} aria-labelledby="benefits-heading">
            <h2 id="benefits-heading" className="sr-only">Key Benefits</h2>
            <div className={styles.benefitsList}>
              <div className={styles.benefit}>
                <svg 
                  className={styles.benefitIcon} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className={styles.benefitText}>Personalized Training Plans</span>
              </div>
              <div className={styles.benefit}>
                <svg 
                  className={styles.benefitIcon} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className={styles.benefitText}>Expert Nutrition Guidance</span>
              </div>
              <div className={styles.benefit}>
                <svg 
                  className={styles.benefitIcon} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className={styles.benefitText}>Supportive Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.heroBackground} aria-hidden="true">
        <div className={styles.heroShape1}></div>
        <div className={styles.heroShape2}></div>
        <div className={styles.heroShape3}></div>
      </div>
    </section>
  );
}