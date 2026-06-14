"use client";
import Link from 'next/link';
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
        <Link href="/" className={styles.logoLockup} onClick={() => setMenuOpen(false)}>
          <Image src="/assets/logo.png" alt="Nirmeeti Nexus Logo" width={40} height={40} style={{ objectFit: 'contain' }} className={styles.logoImage} />
          <span className={styles.logoText}>NIRMEETI NEXUS</span>
        </Link>

        <nav className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/commercial" onClick={() => setMenuOpen(false)}>Commercial</Link>
          <Link href="/residential" onClick={() => setMenuOpen(false)}>Residential</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About & Contact</Link>
          <Link href="/about#contact" className={styles.navCta} onClick={() => setMenuOpen(false)}>
            Book Consultation
          </Link>
        </nav>

        <button className={`${styles.mobileMenuBtn} ${menuOpen ? styles.mobileMenuBtnOpen : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
