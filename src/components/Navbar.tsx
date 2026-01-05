// src/components/Navbar.tsx

import React, { useState } from 'react';

const categories = [
  "New In", "Bedroom", "Living Room", "Kitchen", "Dining", "Bathroom", "Fragrances", 
  "Kids", "Recipes", "Textiles", "Furniture", "Lighting", "Decor", "Storage",
  "Rugs", "Pillows", "Curtains" 
];

const corporateLinks = [
    "Contact", "Stores", "Work With Us", "My Account", "Help", "Shipping & Returns",
    "Gift Card", "Sustainability", "DECOHOME Business", "Terms & Conditions"
];

// REVISI: Sidebar width dihapus dari konstanta statis JS dan dipindah ke class Tailwind

interface NavbarProps {
  onSidebarToggle: (isOpen: boolean) => void;
  isScrolledToFooter: boolean; 
}

const Navbar: React.FC<NavbarProps> = ({ onSidebarToggle, isScrolledToFooter }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => {
    // Sedikit delay agar animasi smooth
    setTimeout(() => {
        setIsSidebarOpen(false);
        onSidebarToggle(false);
    }, 50); 
  };
  
  const openSidebar = () => {
    setIsSidebarOpen(true);
    onSidebarToggle(true);
  };
  
  const isDarkText = isSidebarOpen || isScrolledToFooter;
  const textColorClass = isDarkText ? 'text-black' : 'text-white';
  const burgerColorClass = isDarkText ? 'bg-black' : 'bg-white';
  const rightTextColorClass = isScrolledToFooter ? 'text-black' : 'text-white';

  return (
    <>
      {/* 1. SIDEBAR PANEL */}
      <div 
        // REVISI: w-full di mobile (max-w-[320px]) agar tidak overflow, md:w-80
        className={`fixed top-0 left-0 h-full w-[85vw] max-w-[320px] md:w-80 bg-white z-50 transform transition-transform duration-500 ease-in-out p-6 md:p-10 flex flex-col overflow-y-auto`}
        // Hapus onMouseLeave agar di mobile tidak auto-close saat scroll
        style={{ transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)' }} 
      >
        <div className="flex justify-between items-center mb-8 mt-1">
            <div className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-black">
            DECOHOME
            </div>
            {/* Tombol Close Mobile (Opsional tapi berguna utk UX) */}
            <button onClick={closeSidebar} className="md:hidden text-black p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <div className="flex flex-col gap-4 border-b border-gray-100 pb-6 mb-6">
          {categories.map((cat) => (
            <a 
              key={cat} 
              href="#" 
              className="text-sm uppercase tracking-wide text-gray-800 font-semibold hover:pl-2 transition-all duration-300 py-1"
            >
              {cat}
            </a>
          ))}
        </div>
        
        <div className="flex flex-col gap-3 pb-10">
          {corporateLinks.map((link) => (
             <a key={link} href="#" className="text-xs text-gray-500 hover:text-black block py-1">{link}</a>
          ))}
        </div>
      </div>
      
      {/* 2. NAVBAR UTAMA */}
      <nav 
        // REVISI: px-5 untuk mobile, px-8 untuk desktop
        className={`fixed top-0 left-0 w-full z-40 flex justify-between items-center px-5 md:px-8 py-5 md:py-6 transition-all duration-500`}
      >
        
        {/* GROUP KIRI: Burger Icon + Logo */}
        <div 
          className="flex items-center gap-4 md:gap-6 cursor-pointer group transition-transform duration-500"
          onClick={isSidebarOpen ? closeSidebar : openSidebar} // Toggle logic
          // REVISI: Transform logic disesuaikan agar logo tidak hilang di layar kecil
          style={{ transform: isSidebarOpen ? 'translateX(0)' : 'translateX(0)' }} 
        >
            {/* Burger Icon: Jika sidebar open, sembunyikan burger di mobile agar bersih, atau biarkan. Disini kita biarkan berubah jadi X logic (opsional), tapi codingan asli hanya geser. 
               Kita pertahankan logic asli: Burger hilang jika sidebar open.
            */}
          {!isSidebarOpen && (
              <div className="flex flex-col gap-1.5 w-5 md:w-6" onClick={openSidebar}>
                <span className={`block w-full h-[2px] ${burgerColorClass} transition`}></span>
                <span className={`block w-full h-[2px] ${burgerColorClass} transition`}></span>
                <span className={`block w-2/3 h-[2px] ${burgerColorClass} transition-all duration-300`}></span>
              </div>
          )}

          {/* Logo - Sembunyikan saat sidebar buka di desktop, tapi logic 'transform' di atas menangani posisinya */}
          {!isSidebarOpen && (
            <div className={`text-xl md:text-2xl font-serif font-bold tracking-wider transition-colors duration-500 ${textColorClass}`}>
                DECOHOME
            </div>
          )}
        </div>

        {/* GROUP KANAN */}
        <div className={`flex items-center gap-4 md:gap-6 text-xs font-sans uppercase tracking-widest cursor-pointer transition-colors duration-500 ${rightTextColorClass}`}>
          <span className="hidden md:inline hover:underline underline-offset-4">Search</span>
          <span className="hidden md:inline hover:underline underline-offset-4">Login</span>
          {/* Ikon Tas Belanja untuk Mobile (Ganti Teks Cart) */}
          <span className="md:hidden">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
             </svg>
          </span>
          <span className="hidden md:inline hover:underline underline-offset-4">Cart (0)</span>
        </div>
      </nav>
      
      {/* Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30" 
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;