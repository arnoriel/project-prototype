// src/components/NewsletterModal.tsx (MOBILE RESPONSIVE FIXED)

import React, { useEffect, useState } from 'react';

const NewsletterModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000); // Sedikit diperlama (3s) agar user sempat lihat hero video dulu
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    // Container utama: fixed, memenuhi layar
    // pointer-events-none: user bisa scroll/klik website di belakang modal (area kosong)
    <div className="fixed inset-0 z-[100] pointer-events-none">
      
      {/* LAYOUTING:
         - Mobile: items-center justify-center (Tengah layar)
         - Desktop: items-center justify-end (Kanan tengah)
         - Padding: p-4 di mobile agar ada jarak dari tepi layar
      */}
      <div className="h-full w-full flex items-center justify-center md:justify-end p-4 md:p-10">
        
        {/* MODAL BOX:
           - pointer-events-auto: agar modal bisa diklik
           - max-w-[340px]: batas lebar di mobile agar tidak terlalu lebar
           - md:max-w-md: lebar normal di desktop
        */}
        <div className="bg-white w-full max-w-[340px] md:max-w-md relative z-10 shadow-2xl animate-[fadeIn_0.5s_ease-out] pointer-events-auto border border-gray-100">
          
          {/* Tombol Close (X) */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 hover:text-black z-20 p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Form Content */}
          {/* Padding lebih kecil di mobile (p-6) vs desktop (p-10) */}
          <div className="p-6 md:p-10 flex flex-col justify-center text-center">
            
            {/* Judul lebih kecil di mobile */}
            <h3 className="font-serif text-xl md:text-2xl mb-2 text-gray-900">
                JOIN OUR NEWSLETTER
            </h3>
            
            <p className="text-[11px] md:text-xs text-gray-500 mb-6 leading-relaxed px-2">
              Subscribe to receive the latest news on our new collections, catalogs and special offers.
            </p>
            
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="border-b border-gray-300 py-2 outline-none text-sm mb-6 focus:border-black transition w-full rounded-none"
            />
            
            <div className="flex items-start gap-2 mb-6 text-left px-1">
              <input type="checkbox" id="privacy" className="mt-1 cursor-pointer accent-black" />
              <label htmlFor="privacy" className="text-[10px] text-gray-500 leading-tight cursor-pointer select-none">
                I have read and understand the Privacy Policy and Cookie Policy.
              </label>
            </div>

            <button className="bg-black text-white py-3 text-xs uppercase tracking-widest hover:bg-gray-800 transition w-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;