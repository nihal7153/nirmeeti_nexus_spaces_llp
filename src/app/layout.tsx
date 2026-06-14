import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Nirmeeti Nexus Spaces LLP | Luxury Interior Design',
  description: 'Premium commercial and residential interior design and turnkey execution firm based in Pune. Thoughtful Designs. Effortless Spaces.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
