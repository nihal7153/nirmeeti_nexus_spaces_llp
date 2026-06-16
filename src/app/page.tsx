import Image from 'next/image';
import Link from 'next/link';
import { PenTool, Maximize, Key, Briefcase, Box, HardHat, ArrowRight } from 'lucide-react';
import styles from './page.module.css';

const services = [
  {
    title: "Interior Design",
    description: "Tailored aesthetic concepts that blend luxury, comfort, and purpose to perfectly reflect your lifestyle or brand identity.",
    icon: PenTool
  },
  {
    title: "Space Planning",
    description: "Strategic layout optimization focusing on flow, ergonomics, and maximizing spatial utility without compromising elegance.",
    icon: Maximize
  },
  {
    title: "Turnkey Execution",
    description: "Seamless end-to-end project delivery, managing everything from initial design concepts to final handover and styling.",
    icon: Key
  },
  {
    title: "Project Management",
    description: "Rigorous oversight of timelines, budgets, and contractors to ensure execution matches the design intent flawlessly.",
    icon: Briefcase
  },
  {
    title: "3D Visualization",
    description: "Photorealistic rendering and immersive walkthroughs that allow you to experience your space before execution begins.",
    icon: Box
  },
  {
    title: "Site Supervision",
    description: "On-site quality control and expert craftsmanship monitoring to guarantee the highest standards of finish and detail.",
    icon: HardHat
  }
];

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroImageContainer}>
          <Image
            src="/assets/home_hero.png"
            alt="Luxury Interior Design"
            fill
            className={styles.heroImage}
            priority
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="heading-xl">Thoughtful Designs.<br/>Effortless Spaces.</h1>
          <p className="subheading" style={{ color: 'var(--color-bg-primary)', letterSpacing: '0.15em', marginBottom: '2rem' }}>
            Commercial & Residential Interior Design | Turnkey Execution
          </p>
          <div className={styles.heroCtas}>
            <Link href="/about#contact" className="btn-primary" style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-primary)' }}>
              Book Consultation
            </Link>
            <Link href="#work" className="btn-secondary" style={{ borderColor: 'var(--color-bg-primary)', color: 'var(--color-bg-primary)' }}>
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className={`section-padding ${styles.brandStory}`}>
        <div className="container text-center">
          <h2 className="heading-lg" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
            We design environments that reflect purpose, personality, and performance.
          </h2>
          <p className="text-body" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Nirmeeti Nexus Spaces LLP is a comprehensive design and execution firm specializing in creating visually compelling, practical, and enduring spaces. From concept to handover, we deliver excellence in every detail.
          </p>
        </div>
      </section>

      {/* Split Experience */}
      <section className={styles.splitSection}>
        <Link href="/commercial" className={styles.splitHalf}>
          <Image src="/assets/commercial_hero.png" alt="Commercial" fill className={styles.splitImage} />
          <div className={styles.splitOverlay}></div>
          <div className={styles.splitContent}>
            <h3 className="heading-md">Commercial</h3>
            <span className={styles.splitBtn}>View Expertise</span>
          </div>
        </Link>
        <Link href="/residential" className={styles.splitHalf}>
          <Image src="/assets/residential_hero.png" alt="Residential" fill className={styles.splitImage} />
          <div className={styles.splitOverlay}></div>
          <div className={styles.splitContent}>
            <h3 className="heading-md">Residential</h3>
            <span className={styles.splitBtn}>View Expertise</span>
          </div>
        </Link>
      </section>

      {/* Signature Services */}
      <section className={`section-padding ${styles.services}`}>
        <div className="container">
          <div className={styles.servicesHeader}>
            <span className="subheading">Our Expertise</span>
            <h2 className="heading-lg">Signature Services</h2>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className={styles.homeServiceCard}>
                  <div className={styles.serviceHeader}>
                    <span className={styles.serviceNumber}>0{index + 1}</span>
                    <Icon size={24} className={styles.serviceIcon} />
                  </div>
                  <h3 className="heading-md" style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{service.title}</h3>
                  <p className="text-body" style={{ fontSize: '1rem', flex: 1, color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>{service.description}</p>
                  <div className={styles.serviceArrow}>
                    <ArrowRight size={20} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className={`section-padding ${styles.process}`}>
        <div className="container text-center">
          <span className="subheading">How We Work</span>
          <h2 className="heading-lg" style={{ marginBottom: '4rem' }}>The Execution Process</h2>
          
          <div className={styles.timeline}>
            {[
              "Requirement Understanding", "Site Study & Measurement", "Concept Development", 
              "Design Presentation & BOQ", "Execution & Site Management", "Finishing & Handover"
            ].map((step, index) => (
              <div key={index} className={styles.timelineStep}>
                <div className={styles.timelineDot}></div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginTop: '1.5rem' }}>{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`section-padding ${styles.finalCta}`}>
        <div className="container text-center">
          <h2 className="heading-lg">Ready to transform your space?</h2>
          <p className="text-body" style={{ marginBottom: '2rem' }}>Let's discuss your vision and how we can bring it to life.</p>
          <div className={styles.heroCtas} style={{ justifyContent: 'center' }}>
            <Link href="/about#contact" className="btn-primary">Book Consultation</Link>
            <a href="https://wa.me/919881198808" className="btn-secondary">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
