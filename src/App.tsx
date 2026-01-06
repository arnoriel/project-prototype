import { useState, useRef, useEffect } from 'react';

import Navbar from './components/Navbar';
import HeroVideo from './components/HeroVideo';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import NewsletterModal from './components/NewsletterModal';
import BottomNav from './components/BottomNav';
import QRScanModal from './components/QRScanModal';

const SECTIONS = [
  { id: 'hero', title: 'HOME OF WONDERS' },
  { id: 'linen', title: 'LINEN COLLECTION' },
  { id: 'modern', title: 'MODERN LIVING' },
  { id: 'kitchen', title: 'KITCHEN & DINING' },
  { id: 'decor', title: 'DECORATION' },
  { id: 'footer', title: 'CUSTOMER CARE' },
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolledToFooter, setIsScrolledToFooter] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); 
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (container) {
        const scrollY = container.scrollTop;
        const clientHeight = container.clientHeight;
        const scrollHeight = container.scrollHeight;

        let currentActiveIndex = Math.round(scrollY / clientHeight);
        
        if (currentActiveIndex >= SECTIONS.length) {
            currentActiveIndex = SECTIONS.length - 1;
        }
        
        setActiveIndex(currentActiveIndex);

        const scrollBottom = scrollY + clientHeight;
        const threshold = scrollHeight - (clientHeight * 0.9); 

        setIsScrolledToFooter(scrollBottom > threshold);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleSidebarToggle = (isOpen: boolean) => {
    setIsSidebarOpen(isOpen);
  };
  
  if (isSidebarOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  const scrollToSection = (index: number) => {
    const container = scrollContainerRef.current;
    if (container) {
        const targetScroll = index * container.clientHeight;
        container.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative p-0 m-0">
      
      <NewsletterModal />

      <QRScanModal />
      
      <Navbar 
          onSidebarToggle={handleSidebarToggle} 
          isScrolledToFooter={isScrolledToFooter}
      />

      <div 
        ref={scrollContainerRef}
        className={`h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth transition-transform duration-500`}
      >

        <HeroVideo /> 

        {/* 1. LINEN COLLECTION (Index 1) - Gambar Linen Baru */}
        <ProductSection 
          title={SECTIONS[1].title} 
          subtitle="Pure comfort for your bedroom"
          imageLeft="/assets/img/1.jpeg" 
          imageRight="/assets/img/2.jpeg"
        />

        {/* 2. MODERN LIVING - Menggunakan gambar 3 & 4 */}
        <ProductSection 
          title={SECTIONS[2].title} 
          subtitle="Timeless furniture pieces"
          imageLeft="/assets/img/3.jpeg" 
          imageRight="/assets/img/4.jpeg"
        />

        {/* 3. KITCHEN & DINING - Menggunakan gambar 5 & 6 */}
        <ProductSection 
          title={SECTIONS[3].title} 
          subtitle="Handcrafted tableware"
          imageLeft="/assets/img/5.jpeg" 
          imageRight="/assets/img/6.jpeg"
        />
        
        {/* 4. DECORATION - Kamu bisa mengulang gambar atau menambah gambar baru jika tersedia */}
        <ProductSection 
          title={SECTIONS[4].title} 
          subtitle="Unique artifacts and scents"
          imageLeft="/assets/img/1.jpeg" 
          imageRight="/assets/img/3.jpeg"
        />

        <Footer /> 
        
      </div>

      {!isScrolledToFooter && (
        <BottomNav 
            sections={SECTIONS} 
            activeIndex={activeIndex} 
            onNavigate={scrollToSection} 
        />
      )}
    </div>
  );
}

export default App;