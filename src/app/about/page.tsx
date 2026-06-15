import { Metadata } from 'next';
import Image from 'next/image';
import { Target, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our legacy in designing spaces of distinction. Nirmeeti Nexus Spaces LLP is a comprehensive design and execution firm in Pune.',
};
import ContactForm from '@/components/ContactForm';
import styles from '../page.module.css';

export default function About() {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.hero} style={{ height: '60vh' }}>
        <div className={styles.heroImageContainer}>
          <Image
            src="/assets/about_hero.png"
            alt="Nirmeeti Nexus Spaces Design Studio"
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay} style={{ background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8))' }} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="heading-xl">Our Legacy</h1>
          <p className="subheading" style={{ color: 'var(--color-bg-primary)', letterSpacing: '0.15em' }}>
            Designing Spaces of Distinction
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={`section-padding`}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
            <div>
              <span className="subheading">The Firm</span>
              <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>A Commitment to Excellence</h2>
              <p className="text-body" style={{ fontSize: '1.125rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                NIRMEETI NEXUS SPACES LLP is a comprehensive design and execution firm specializing in interior design, space planning, and turnkey project solutions across residential, commercial, and mixed-use developments.
              </p>
              <p className="text-body" style={{ fontSize: '1.125rem', color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
                We believe that every space has a story waiting to be told. Through meticulous attention to detail, premium material selection, and unparalleled craftsmanship, we transform empty volumes into living, breathing environments of luxury.
              </p>
            </div>
            <div style={{ position: 'relative', height: '400px' }}>
              <Image src="/assets/commercial_hero.png" alt="Interior Detail" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          
          <div className={styles.servicesGrid}>
            <div className={styles.homeServiceCard} style={{ backgroundColor: 'var(--color-accent)', color: '#fff', borderColor: 'var(--color-accent)' }}>
              <div className={styles.serviceHeader}>
                <span className={styles.serviceNumber} style={{ color: 'rgba(255,255,255,0.5)' }}>01</span>
                <Eye size={28} style={{ color: '#fff' }} />
              </div>
              <h3 className="heading-md" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Our Vision</h3>
              <p className="text-body" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>To become a trusted and respected name in innovative interior and turnkey design solutions by delivering functional, timeless, and high-quality spaces.</p>
            </div>
            <div className={styles.homeServiceCard} style={{ backgroundColor: 'var(--color-bg-primary)' }}>
              <div className={styles.serviceHeader}>
                <span className={styles.serviceNumber}>02</span>
                <Target size={28} className={styles.serviceIcon} />
              </div>
              <h3 className="heading-md" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Our Mission</h3>
              <p className="text-body" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>Deliver quality-driven execution with attention to detail. Maintain transparency. Create efficient environments. Build long-term client relationships.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={`section-padding`} style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <h2 className="heading-lg" style={{ textAlign: 'center', marginBottom: '4rem' }}>Get in Touch</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <div>
              <h3 className="heading-md">Contact Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
                <p className="text-body"><strong>Office:</strong><br/>Office No. 216, The Business Hub, Kothrud, Pune – 411038</p>
                <p className="text-body"><strong>Phone:</strong><br/>+91 98811 98808</p>
                <p className="text-body"><strong>Email:</strong><br/>info@nirmeetinexusspaces.com</p>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
