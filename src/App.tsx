// src/App.tsx (REVISI FINAL - URL Gambar Sesuai Tema)

import { useState, useRef, useEffect } from 'react';

// Import semua komponen yang dibutuhkan
import Navbar from './components/Navbar';
import HeroVideo from './components/HeroVideo';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import NewsletterModal from './components/NewsletterModal';
import BottomNav from './components/BottomNav';
import QRScanModal from './components/QRScanModal';

// Definisikan semua Sektion dengan judul yang diinginkan
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

  // LOGIKA SCROLL DETECTION (Tidak ada perubahan di sini)
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
          imageLeft="https://img.freepik.com/free-photo/cream-linen-fabric_23-2151932234.jpg?semt=ais_hybrid&w=740&q=80" // Tempat tidur & linen
          imageRight="https://livpure.com/cdn/shop/articles/family-spending-time-together-outside_23-2148659464_77e2da7d-9d11-4cff-bd82-7f51fca535be.jpg?v=1698985581" // Tumpukan handuk
        />

        {/* 2. MODERN LIVING (Index 2) - Gambar Living Room Modern Baru */}
        <ProductSection 
          title={SECTIONS[2].title} 
          subtitle="Timeless furniture pieces"
          imageLeft="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1770&auto=format&fit=crop" // Ruang tamu minimalis
          imageRight="https://images-cdn.ubuy.com.sa/633fef24e2cf6b668f0349b2-black-friday-deals-2-pieces-living-room.jpg" // Detail sofa
        />

        {/* 3. KITCHEN & DINING (Index 3) - Gambar Peralatan Makan Baru */}
        <ProductSection 
          title={SECTIONS[3].title} 
          subtitle="Handcrafted tableware"
          imageLeft="https://www.bhg.com/thmb/2XuAkn6VRvPAGgATf_KvakZBJmo=/3760x0/filters:no_upscale():strip_icc()/U-shaped-kitchen-102839705-8sGG9ilMqQuB-IE_w3lqXo-5d851f6d42c645f690c66d0a32126c86.jpg" // Meja makan set keramik
          imageRight="https://images.squarespace-cdn.com/content/v1/5f2ff4e5f0bfea6754825eb2/0fae17b3-d92f-4bad-b5dd-50f49223f428/green+kitchen+open+plan+kitchen+living+dining+room" // Mangkuk dan peralatan makan
        />
        
        {/* 4. DECORATION (Index 4) - Gambar Dekorasi Baru */}
        <ProductSection 
          title={SECTIONS[4].title} 
          subtitle="Unique artifacts and scents"
          imageLeft="https://images.unsplash.com/photo-1645111088823-a5fa3d930d25?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8" // Lilin dan vas
          imageRight="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1965&auto=format&fit=crop" // Detail dekorasi dinding/frame
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