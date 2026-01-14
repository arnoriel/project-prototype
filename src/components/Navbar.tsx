// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const categories = [
  { name: "Home", path: "/" },
  { name: "Product", path: "/product" },
  { name: "About Us", path: "/about" },
  { name: "Certificate", path: "/certificate" },
  { name: "Contact", path: "/contact" }
];

interface NavbarProps {
  onSidebarToggle?: (isOpen: boolean) => void; // Opsional karena tidak semua page butuh logic ini
  isScrolledToFooter?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onSidebarToggle, isScrolledToFooter = false }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Logic: Jika bukan Home, selalu Dark Text (Background Putih)
  // Jika Home, ikuti logic scroll / sidebar
  const isDarkText = !isHomePage || isSidebarOpen || isScrolledToFooter;
  
  const textColorClass = isDarkText ? 'text-black' : 'text-white';
  const burgerColorClass = isDarkText ? 'bg-black' : 'bg-white';
  const rightTextColorClass = isDarkText ? 'text-black' : 'text-white'; // Disederhanakan untuk page lain

  const closeSidebar = () => {
    setTimeout(() => {
        setIsSidebarOpen(false);
        if (onSidebarToggle) onSidebarToggle(false);
    }, 50); 
  };
  
  const openSidebar = () => {
    setIsSidebarOpen(true);
    if (onSidebarToggle) onSidebarToggle(true);
  };

  return (
    <>
      {/* 1. SIDEBAR PANEL */}
      <div 
        className={`fixed top-0 left-0 h-full w-[85vw] max-w-[320px] md:w-80 bg-white z-50 transform transition-transform duration-500 ease-in-out p-6 md:p-10 flex flex-col overflow-y-auto`}
        style={{ transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)' }} 
      >
        <div className="flex justify-between items-center mb-12 mt-1">
            <div className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-black">
              DECOHOME
            </div>
            <button onClick={closeSidebar} className="md:hidden text-black p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <div className="flex flex-col gap-6 border-b border-gray-100 pb-8 mb-6">
          {categories.map((cat) => (
            <Link 
              key={cat.name} 
              to={cat.path} 
              onClick={closeSidebar}
              className={`text-sm uppercase tracking-widest font-semibold hover:pl-2 transition-all duration-300 ${location.pathname === cat.path ? 'text-black pl-2 border-l-2 border-black' : 'text-gray-500'}`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
      
      {/* 2. NAVBAR UTAMA */}
      <nav 
        className={`fixed top-0 left-0 w-full z-40 flex justify-between items-center px-5 md:px-8 py-5 md:py-6 transition-all duration-500 ${!isHomePage ? 'bg-white/90 backdrop-blur-md border-b border-gray-100' : ''}`}
      >
        {/* GROUP KIRI */}
        <div 
          className="flex items-center gap-4 md:gap-6 cursor-pointer group"
          onClick={isSidebarOpen ? closeSidebar : openSidebar}
        >
          {!isSidebarOpen && (
              <div className="flex flex-col gap-1.5 w-5 md:w-6">
                <span className={`block w-full h-[2px] ${burgerColorClass} transition`}></span>
                <span className={`block w-full h-[2px] ${burgerColorClass} transition`}></span>
                <span className={`block w-2/3 h-[2px] ${burgerColorClass} transition-all duration-300 group-hover:w-full`}></span>
              </div>
          )}
          {!isSidebarOpen && (
            <Link to="/" className={`text-xl md:text-2xl font-serif font-bold tracking-wider transition-colors duration-500 ${textColorClass}`}>
                DECOHOME
            </Link>
          )}
        </div>

        {/* GROUP KANAN */}
        <div className={`flex items-center gap-4 md:gap-6 text-xs font-sans uppercase tracking-widest cursor-pointer transition-colors duration-500 ${rightTextColorClass}`}>
          <span className="hidden md:inline hover:underline underline-offset-4">Search</span>
          <span className="md:hidden">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
             </svg>
          </span>
        </div>
      </nav>
      
      {/* Backdrop */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30" onClick={closeSidebar}></div>
      )}
    </>
  );
};

export default Navbar;
