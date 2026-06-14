import styles from '../page.module.css';

export default function About() {
  return (
    <div className={styles.homeContainer} style={{ paddingTop: '15vh' }}>
      <section className={`section-padding`}>
        <div className="container">
          <h1 className="heading-lg" style={{ marginBottom: '2rem' }}>About Us</h1>
          <p className="text-body" style={{ maxWidth: '800px', fontSize: '1.25rem', marginBottom: '4rem' }}>
            NIRMEETI NEXUS SPACES LLP is a comprehensive design and execution firm specializing in interior design, space planning, and turnkey project solutions across residential, commercial, and mixed-use developments.
          </p>
          
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3 className="heading-md">Our Vision</h3>
              <p className="text-body">To become a trusted and respected name in innovative interior and turnkey design solutions by delivering functional, timeless, and high-quality spaces.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className="heading-md">Our Mission</h3>
              <p className="text-body">Deliver quality-driven execution with attention to detail. Maintain transparency. Create efficient environments. Build long-term client relationships.</p>
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
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <input type="text" placeholder="Name" style={{ padding: '1rem', border: '1px solid var(--color-border)', fontFamily: 'var(--font-body)' }} required />
                <input type="email" placeholder="Email" style={{ padding: '1rem', border: '1px solid var(--color-border)', fontFamily: 'var(--font-body)' }} required />
                <input type="tel" placeholder="Phone" style={{ padding: '1rem', border: '1px solid var(--color-border)', fontFamily: 'var(--font-body)' }} required />
                <select style={{ padding: '1rem', border: '1px solid var(--color-border)', fontFamily: 'var(--font-body)', backgroundColor: '#fff' }} required defaultValue="">
                  <option value="" disabled>Project Type</option>
                  <option value="commercial">Commercial</option>
                  <option value="residential">Residential</option>
                </select>
                <textarea placeholder="Message" rows={5} style={{ padding: '1rem', border: '1px solid var(--color-border)', fontFamily: 'var(--font-body)', resize: 'vertical' }} required></textarea>
                <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
