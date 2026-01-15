// src/components/HeroVideo.tsx

import React from 'react';

const HeroVideo: React.FC = () => {
  return (
    <section className="h-screen w-full snap-start relative overflow-hidden bg-gray-900">
      <video
        autoPlay
        muted
        loop
        playsInline // Penting untuk mobile (iOS) agar tidak fullscreen otomatis
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
      >
        <source src="/assets/videos/vid1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 p-4 text-center">
        {/* REVISI: text-4xl di mobile, text-7xl di desktop */}
        <h1 className="text-4xl md:text-7xl font-serif mb-6 md:mb-4 tracking-widest text-shadow leading-tight">
            NEW COLLECTION
        </h1>
        <p className="mb-6">Rattan reed diffuser sticks are a natural and effective choice for companies looking to incorporate sustainable elegance into their product line or workspace.</p>
        <button className="border border-white px-6 py-3 md:px-8 md:py-3 text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-black transition duration-300">
          Discover
        </button>
      </div>
    </section>
  );
};

export default HeroVideo;