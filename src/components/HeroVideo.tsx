import React from 'react';

const HeroVideo: React.FC = () => {
  return (
    <section className="h-screen w-full snap-start relative overflow-hidden bg-gray-900">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
      >
        {/* Video Interior Aesthetic Free License */}
        <source src="https://videos.pexels.com/video-files/7578544/7578544-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
        <h1 className="text-5xl md:text-7xl font-serif mb-4 tracking-widest text-shadow">NEW COLLECTION</h1>
        <button className="border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition duration-300">
          Discover
        </button>
      </div>
    </section>
  );
};

export default HeroVideo;