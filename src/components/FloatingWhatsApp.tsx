import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import styles from './FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
  return (
    <Link href="https://wa.me/919881198808" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
      <MessageCircle size={24} color="#FFFFFF" />
    </Link>
  );
}
