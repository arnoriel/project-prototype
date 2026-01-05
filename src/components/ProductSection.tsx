// src/components/ProductSection.tsx

import React from 'react';

interface ProductSectionProps {
  imageLeft: string;
  imageRight: string;
  title: string;
  subtitle: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ imageLeft, imageRight, title, subtitle }) => {
  return (
    <section className="h-screen w-full snap-start flex flex-col md:flex-row relative">
      
      {/* Gambar Kiri (Atas di Mobile) - 50% height */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative group overflow-hidden">
        <img 
          src={imageLeft} 
          alt="Product Left" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
      </div>

      {/* Gambar Kanan (Bawah di Mobile) - 50% height */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative group overflow-hidden">
        <img 
          src={imageRight} 
          alt="Product Right" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
      </div>

      {/* Teks Tengah (Overlay) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none p-4">
        {/* REVISI: Padding dikurangi di mobile (p-6), max-width diset */}
        <div className="bg-white/85 backdrop-blur-sm p-6 md:p-8 text-center w-[85%] max-w-md pointer-events-auto shadow-sm">
          {/* Font size judul lebih kecil di mobile */}
          <h2 className="text-xl md:text-2xl font-serif mb-2 text-gray-800">{title}</h2>
          <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 mb-4">{subtitle}</p>
          <button className="text-[10px] md:text-xs border-b border-black pb-1 hover:text-gray-600 transition font-medium">
            VIEW PRODUCTS
          </button>
        </div>
      </div>

    </section>
  );
};

export default ProductSection;