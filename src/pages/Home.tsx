// src/pages/Home.tsx
import React, { useRef, useEffect, useState } from 'react';
import HeroVideo from '../components/HeroVideo'; // Pastikan path import benar
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer';
import BottomNav from '../components/BottomNav';

// Interface props untuk passing state ke App (agar Navbar bisa berubah warna)
interface HomeProps {
  setScrolledToFooter: (isScrolled: boolean) => void;
  setSidebarToggleFn: (fn: (isOpen: boolean) => void) => void;
}

const SECTIONS = [
  { id: 'hero', title: 'HOME OF WONDERS' },
  { id: 'linen', title: 'LINEN COLLECTION' },
  { id: 'modern', title: 'MODERN LIVING' },
  { id: 'kitchen', title: 'KITCHEN & DINING' },
  { id: 'decor', title: 'DECORATION' },
  { id: 'footer', title: 'CUSTOMER CARE' },
];

const Home: React.FC<HomeProps> = ({ setScrolledToFooter }) => {
  const [activeIndex, setActiveIndex] = useState(0); 
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Logic Scroll Handler
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (container) {
        const scrollY = container.scrollTop;
        const clientHeight = container.clientHeight;
        const scrollHeight = container.scrollHeight;
        
        let currentActiveIndex = Math.round(scrollY / clientHeight);
        if (currentActiveIndex >= SECTIONS.length) currentActiveIndex = SECTIONS.length - 1;
        setActiveIndex(currentActiveIndex);

        const scrollBottom = scrollY + clientHeight;
        const threshold = scrollHeight - (clientHeight * 0.9); 
        setScrolledToFooter(scrollBottom > threshold);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
        container.addEventListener('scroll', handleScroll);
    }

    // PERBAIKAN DI SINI:
    // Gunakan 'if' block biasa atau optional chaining agar return type-nya valid (void/undefined)
    return () => {
        if (container) {
            container.removeEventListener('scroll', handleScroll);
        }
    };
  }, [setScrolledToFooter]);

  // Logic scroll nav
  const scrollToSection = (index: number) => {
    const container = scrollContainerRef.current;
    if (container) {
        const targetScroll = index * container.clientHeight;
        container.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full">
      <div 
        ref={scrollContainerRef}
        className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        <HeroVideo /> 
        <ProductSection title={SECTIONS[1].title} subtitle="Pure comfort for your bedroom" imageLeft="/assets/img/1.jpeg" imageRight="/assets/img/2.jpeg" />
        <ProductSection title={SECTIONS[2].title} subtitle="Timeless furniture pieces" imageLeft="/assets/img/3.jpeg" imageRight="/assets/img/4.jpeg" />
        <ProductSection title={SECTIONS[3].title} subtitle="Handcrafted tableware" imageLeft="/assets/img/5.jpeg" imageRight="/assets/img/6.jpeg" />
        <ProductSection title={SECTIONS[4].title} subtitle="Unique artifacts and scents" imageLeft="/assets/img/1.jpeg" imageRight="/assets/img/3.jpeg" />
        <Footer /> 
      </div>
      
      <BottomNav sections={SECTIONS} activeIndex={activeIndex} onNavigate={scrollToSection} />
    </div>
  );
};

export default Home;