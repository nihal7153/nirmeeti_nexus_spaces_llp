"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="/" className={styles.logoLockup} onClick={() => setMenuOpen(false)}>
          <Image src="/assets/logo.png" alt="Nirmeeti Nexus Spaces Logo" width={40} height={40} style={{ objectFit: 'contain' }} className={styles.logoImage} />
          <span className={styles.logoText} style={{ textAlign: 'center' }}>NIRMEETI NEXUS<br />SPACES</span>
        </a>

        <nav className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/commercial" onClick={() => setMenuOpen(false)}>Commercial</a>
          <a href="/residential" onClick={() => setMenuOpen(false)}>Residential</a>
          <a href="/about" onClick={() => setMenuOpen(false)}>About & Contact</a>
          <a href="/about#contact" className={styles.navCta} onClick={() => setMenuOpen(false)}>
            Book Consultation
          </a>
        </nav>

        <button className={`${styles.mobileMenuBtn} ${menuOpen ? styles.mobileMenuBtnOpen : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
