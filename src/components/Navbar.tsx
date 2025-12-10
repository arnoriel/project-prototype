// src/components/Navbar.tsx (VERSI FINAL REVISI - FIX WARNA FOOTER AKTIF)

import React, { useState } from 'react';

// Perbanyak daftar kategori agar sidebar bisa di-scroll
const categories = [
  "New In", "Bedroom", "Living Room", "Kitchen", "Dining", "Bathroom", "Fragrances", 
  "Kids", "Recipes", "Textiles", "Furniture", "Lighting", "Decor", "Storage",
  "Rugs", "Pillows", "Curtains" 
];

// Tambahkan daftar link corporate/support
const corporateLinks = [
    "Contact", "Stores", "Work With Us", "My Account", "Help", "Shipping & Returns",
    "Gift Card", "Sustainability", "DECOHOME Business", "Terms & Conditions"
];


const SIDEBAR_WIDTH = 320; 

interface NavbarProps {
  onSidebarToggle: (isOpen: boolean) => void;
  isScrolledToFooter: boolean; 
}


// FIX: Destructure isScrolledToFooter dari props
const Navbar: React.FC<NavbarProps> = ({ onSidebarToggle, isScrolledToFooter }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setTimeout(() => {
        setIsSidebarOpen(false);
        onSidebarToggle(false);
    }, 50); 
  };
  
  const openSidebar = () => {
    setIsSidebarOpen(true);
    onSidebarToggle(true);
  };
  
  // LOGIKA WARNA BARU: Teks Navbar (Burger & Logo) dan Teks Kanan berubah menjadi hitam jika Sidebar terbuka ATAU sudah mencapai Footer
  const isDarkText = isSidebarOpen || isScrolledToFooter;
  const textColorClass = isDarkText ? 'text-black' : 'text-white';
  const burgerColorClass = isDarkText ? 'bg-black' : 'bg-white';
  
  // Untuk Group Kanan, kamu ingin tetap putih kecuali saat di Footer, jadi kita hanya gunakan isScrolledToFooter
  const rightTextColorClass = isScrolledToFooter ? 'text-black' : 'text-white';


  return (
    <>
      {/* 1. SIDEBAR PANEL (Tidak ada perubahan di sini) */}
      <div 
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-500 ease-in-out p-10 flex flex-col overflow-y-auto`}
        onMouseLeave={closeSidebar}
        style={{ transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)' }} 
      >

        {/* Logo ZARA HOME CLONE di dalam Sidebar */}
        <div className="font-serif text-3xl font-bold tracking-widest mb-10 mt-1 text-black">
          DECOHOME
        </div>

        {/* List Menu UTAMA (Bisa di-scroll jika isinya panjang) */}
        <div className="flex flex-col gap-4 border-b border-gray-100 pb-6 mb-6">
          {categories.map((cat) => (
            <a 
              key={cat} 
              href="#" 
              className="text-sm uppercase tracking-wide text-gray-800 font-semibold hover:pl-2 transition-all duration-300"
            >
              {cat}
            </a>
          ))}
        </div>
        
        {/* Link Corporate / Support Tambahan */}
        <div className="flex flex-col gap-3">
          {corporateLinks.map((link) => (
             <a key={link} href="#" className="text-xs text-gray-500 hover:text-black block">{link}</a>
          ))}
        </div>
        
      </div>
      
      {/* 2. NAVBAR UTAMA */}
      {/* FIX: Hapus class text-white statis dari <nav> */}
      <nav 
        className={`fixed top-0 left-0 w-full z-40 flex justify-between items-center px-8 py-6 transition-all duration-500`}
      >
        
        {/* GROUP KIRI: Burger Icon + Logo */}
        <div 
          className="flex items-center gap-6 cursor-pointer group transition-transform duration-500"
          onMouseEnter={openSidebar} 
          onClick={openSidebar}
          style={{ transform: isSidebarOpen ? `translateX(${SIDEBAR_WIDTH - 32}px)` : 'translateX(0)' }} 
        >
          {/* Burger Icon: FIX - Terapkan burgerColorClass */}
          {!isSidebarOpen && (
              <div className="flex flex-col gap-1.5 w-6">
                <span className={`block w-full h-[2px] ${burgerColorClass} transition`}></span>
                <span className={`block w-full h-[2px] ${burgerColorClass} transition`}></span>
                <span className={`block w-2/3 h-[2px] ${burgerColorClass} transition-all duration-300`}></span>
              </div>
          )}

          {/* Logo "ZARA HOME CLONE" (Hanya render jika Sidebar TERTUTUP) */}
          {!isSidebarOpen && (
            // FIX: Terapkan textColorClass
            <div className={`text-2xl font-serif font-bold tracking-wider transition-colors duration-500 ${textColorClass}`}>
                DECOHOME
            </div>
          )}
        </div>

        {/* GROUP KANAN: Search, Login, Cart */}
        {/* FIX: Terapkan rightTextColorClass */}
        <div className={`flex items-center gap-6 text-xs font-sans uppercase tracking-widest cursor-pointer transition-colors duration-500 ${rightTextColorClass}`}>
          <span className="hidden md:inline hover:underline underline-offset-4">Search</span>
          <span className="hidden md:inline hover:underline underline-offset-4">Login</span>
          <span className="hover:underline underline-offset-4">Cart (0)</span>
        </div>
      </nav>
      
      {/* Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30" 
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;