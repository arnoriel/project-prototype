// src/components/NewsletterModal.tsx (VERSI REVISI)

import React, { useEffect, useState } from 'react';

const NewsletterModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    // Container utama: fixed, memenuhi layar, tidak memblokir scroll (inset-0)
    // Pointer-events-none agar user tetap bisa klik/scroll di bawah modal
    <div className="fixed inset-0 z-[100] pointer-events-none">
      
      {/* Modal Content - Posisi Kanan (justify-end) dan Vertikal Tengah (items-center) */}
      <div className="h-full w-full flex items-center justify-end p-4 md:p-10">
        
        {/* Konten Modal yang bisa di-klik (pointer-events-auto) */}
        <div className="bg-white w-full max-w-sm md:max-w-md relative z-10 shadow-2xl animate-[fadeIn_0.5s_ease-out] pointer-events-auto">
          
          {/* Tombol Close (X) */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-black z-20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Form Content */}
          <div className="p-8 md:p-10 flex flex-col justify-center text-center">
            <h3 className="font-serif text-2xl mb-2">JOIN OUR NEWSLETTER</h3>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              Subscribe to receive the latest news on our new collections, catalogs and special offers.
            </p>
            
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="border-b border-gray-300 py-2 outline-none text-sm mb-6 focus:border-black transition"
            />
            
            <div className="flex items-start gap-2 mb-6">
              <input type="checkbox" id="privacy" className="mt-1" />
              <label htmlFor="privacy" className="text-[10px] text-gray-500 text-left">
                I have read and understand the Privacy Policy and Cookie Policy.
              </label>
            </div>

            <button className="bg-black text-white py-3 text-xs uppercase tracking-widest hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;