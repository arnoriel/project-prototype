// src/components/BottomNav.tsx

import React from 'react';

interface Section {
  id: string;
  title: string;
}

interface BottomNavProps {
  sections: Section[];
  activeIndex: number;
  onNavigate: (index: number) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ sections, activeIndex, onNavigate }) => {
  // Hanya tampilkan navigasi saat sidebar tidak terbuka
  // Kita asumsikan Sidebar state dikelola di App.tsx, tapi karena BottomNav tidak menerima prop Sidebar,
  // kita biarkan BottomNav selalu tampil, dan jika ingin disembunyikan, logika harus ditaruh di App.tsx.

  // Filter Footer dari navigasi utama (biasanya navigasi ini hanya untuk konten utama)
  const navSections = sections.filter(sec => sec.id !== 'footer');

  return (
    <div className="fixed bottom-0 left-0 w-full z-20 flex justify-center pb-6 md:pb-8 pointer-events-none">
      <div className="flex gap-8 text-xs font-sans uppercase tracking-widest text-white transition-colors duration-500">
        
        {navSections.map((section, index) => (
          <button 
            key={section.id}
            onClick={() => onNavigate(index)}
            className={`pointer-events-auto transition-all duration-300 ${
              activeIndex === index 
                ? 'font-extrabold underline underline-offset-4' // Teks STRONG (aktif)
                : 'font-normal opacity-80 hover:opacity-100' // Teks normal
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;