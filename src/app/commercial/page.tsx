import Image from 'next/image';
import Link from 'next/link';
import styles from '../page.module.css';

export default function Commercial() {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.hero}>
        <div className={styles.heroImageContainer}>
          <Image
            src="/assets/commercial_hero.png"
            alt="Commercial Interiors"
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="heading-xl">Spaces Designed<br/>For Performance.</h1>
          <p className="subheading" style={{ color: 'var(--color-bg-primary)', letterSpacing: '0.15em' }}>
            Corporate Offices | Retail | Hospitality
          </p>
        </div>
      </section>

      <section className={`section-padding`}>
        <div className="container">
          <div className={styles.servicesGrid}>
            {[
              { title: "Corporate Offices", image: "/assets/corporate_office_1781444390859.png" },
              { title: "Executive Cabins", image: "/assets/executive_cabin_1781444404812.png" },
              { title: "Boardrooms", image: "/assets/boardroom_1781444417980.png" },
              { title: "Reception Areas", image: "/assets/reception_area_1781444434044.png" },
              { title: "Retail Spaces", image: "/assets/retail_space_1781444448196.png" },
              { title: "Hospitality Spaces", image: "/assets/hospitality_space_1781444461600.png" }
            ].map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceImageContainer}>
                  <Image src={service.image} alt={service.title} fill className={styles.serviceImage} />
                </div>
                <div className={styles.serviceContent}>
                  <h3 className="heading-md" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{service.title}</h3>
                  <p className="text-body" style={{ fontSize: '1rem' }}>Designed for productivity, professionalism, and brand identity.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className={`section-padding ${styles.finalCta}`}>
        <div className="container text-center">
          <h2 className="heading-lg">Elevate Your Business Space</h2>
          <div className={styles.heroCtas} style={{ justifyContent: 'center', marginTop: '2rem' }}>
            <Link href="/about#contact" className="btn-primary">Book Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
