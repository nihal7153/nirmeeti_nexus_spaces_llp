
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.footerBrand}>
          <div className={styles.footerLogoLockup}>
            <Image src="/assets/logo.png" alt="Nirmeeti Nexus Spaces Logo" width={60} height={60} style={{ objectFit: 'contain' }} />
            <h2 className={styles.footerLogoText} style={{ textAlign: 'center' }}>NIRMEETI NEXUS<br />SPACES</h2>
          </div>
          <p className="text-body">Thoughtful Designs. Effortless Spaces.</p>
          <div className={styles.contactInfo}>
            <p>📍 Office No. 216, The Business Hub, Kothrud, Pune – 411038</p>
            <p>📞 +91 98811 98808</p>
            <p>📧 info@nirmeetinexusspaces.com</p>
          </div>
        </div>
        
        <div className={styles.footerLinks}>
          <h3 className={styles.columnTitle}>Services</h3>
          <a href="/commercial#corporate">Corporate Interiors</a>
          <a href="/commercial#spaces">Commercial Spaces</a>
          <a href="/residential#top">Residential Interiors</a>
        </div>

        <div className={styles.footerLinks}>
          <h3 className={styles.columnTitle}>Company</h3>
          <a href="/about#about">About Us</a>
          <a href="/about#vision">Vision & Mission</a>
          <a href="/about#about">Leadership</a>
          <a href="/about#contact">Contact</a>
        </div>
      </div>
      <div className={`container ${styles.footerBottom}`}>
        <p>© {new Date().getFullYear()} Nirmeeti Nexus Spaces LLP. All rights reserved.</p>
      </div>
    </footer>
  );
}
