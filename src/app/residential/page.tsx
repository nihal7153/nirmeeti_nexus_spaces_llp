import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Residential Design',
  description: 'Bespoke residential interior design. Transform your house into a sanctuary of elegance and comfort with our turnkey solutions.',
};
import Link from 'next/link';
import styles from '../page.module.css';

export default function Residential() {
  return (
    <div className={styles.homeContainer} id="top">
      <section className={styles.hero}>
        <div className={styles.heroImageContainer}>
          <Image
            src="/assets/residential_hero.png"
            alt="Residential Interiors"
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="heading-xl">Spaces Designed<br/>Around Your Lifestyle.</h1>
          <p className="subheading" style={{ color: 'var(--color-bg-primary)', letterSpacing: '0.15em' }}>
            Luxury Apartments | Villas | Bungalows
          </p>
        </div>
      </section>

      <section className={`section-padding`}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {[
              { title: "Luxury Apartments", image: "/assets/luxury_apartment_1781444482496.png" },
              { title: "Villas & Bungalows", image: "/assets/villa_bungalow_1781444493927.png" },
              { title: "Living Spaces", image: "/assets/living_space_1781444508473.png" },
              { title: "Modular Kitchens", image: "/assets/modular_kitchen_1781444522596.png" },
              { title: "Bedrooms & Wardrobes", image: "/assets/bedroom_wardrobe_1781444536179.png" },
              { title: "Premium Bathrooms", image: "/assets/premium_bathroom_1781444548092.png" }
            ].map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceImageContainer}>
                  <Image src={service.image} alt={service.title} fill className={styles.serviceImage} />
                </div>
                <div className={styles.serviceContent}>
                  <h3 className="heading-md" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{service.title}</h3>
                  <p className="text-body" style={{ fontSize: '1rem' }}>Crafted for comfort, elegance, and lifestyle enhancement.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section-padding ${styles.finalCta}`}>
        <div className="container text-center">
          <h2 className="heading-lg">Design Your Dream Home</h2>
          <div className={styles.heroCtas} style={{ justifyContent: 'center', marginTop: '2rem' }}>
            <Link href="/about#contact" className="btn-primary">Book Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
