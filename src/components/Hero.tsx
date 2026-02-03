import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div className="container">
        <div className={styles.heroContent}>
          {/* Main heading */}
          <h1 id="hero-heading" className={styles.heroTitle}>
            <span className={styles.titleLine1}>Fitness900</span>
            <span className={styles.titleLine2}>Coming Soon</span>
          </h1>
          
          {/* Subtitle */}
          <p className={styles.heroSubtitle}>
            Your fitness journey starts here. We're building something amazing 
            to help you reach your health and wellness goals.
          </p>
          
          {/* Description */}
          <div className={styles.heroDescription}>
            <p>
              Stay tuned for exciting updates, exclusive content, and early access 
              to our revolutionary fitness platform.
            </p>
          </div>
          
          {/* Call to action buttons */}
          <div className={styles.heroActions}>
            <button 
              className={`btn btn-primary ${styles.primaryButton}`}
              aria-label="Get notified when we launch"
            >
              Notify Me
            </button>
            <button 
              className={`btn btn-secondary ${styles.secondaryButton}`}
              aria-label="Learn more about Fitness900"
            >
              Learn More
            </button>
          </div>
          
          {/* Coming soon indicator */}
          <div className={styles.comingSoonIndicator}>
            <div className={styles.pulseContainer}>
              <div className={styles.pulseRing}></div>
              <div className={styles.pulseDot}></div>
            </div>
            <span className={styles.comingSoonText}>
              Launching Soon
            </span>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className={styles.heroDecorations} aria-hidden="true">
          <div className={styles.decoration1}></div>
          <div className={styles.decoration2}></div>
          <div className={styles.decoration3}></div>
        </div>
      </div>
    </section>
  );
}