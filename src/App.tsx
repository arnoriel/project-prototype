// src/App.tsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import NewsletterModal from './components/NewsletterModal';
import QRScanModal from './components/QRScanModal';

// Pages
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Certificate from './pages/Certificate';
import Contact from './pages/Contact';

function App() {
  const [isScrolledToFooter, setIsScrolledToFooter] = useState(false);
  const [sidebarToggleFn, setSidebarToggleFn] = useState<((isOpen: boolean) => void) | null>(null);

  // Fungsi wrapper agar Navbar bisa memanggil toggle sidebar di halaman Home
  const handleSidebarToggle = (isOpen: boolean) => {
    if (sidebarToggleFn) sidebarToggleFn(isOpen);
    
    // Logic CSS body overflow
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <Router>
      <div className="relative p-0 m-0 bg-white">
        
        <NewsletterModal />
        <QRScanModal />
        
        <Navbar 
            onSidebarToggle={handleSidebarToggle} 
            isScrolledToFooter={isScrolledToFooter}
        />

        <Routes>
            <Route path="/" element={
              <Home 
                setScrolledToFooter={setIsScrolledToFooter} 
                setSidebarToggleFn={(fn) => setSidebarToggleFn(() => fn)} 
              />
            } />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;