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
  const navSections = sections.filter(sec => sec.id !== 'footer');

  return (
    // REVISI: Tambahkan 'hidden md:flex'. Hilang di mobile, muncul flex di desktop.
    <div className="hidden md:flex fixed bottom-0 left-0 w-full z-20 justify-center pb-8 pointer-events-none">
      <div className="flex gap-8 text-xs font-sans uppercase tracking-widest text-white transition-colors duration-500">
        
        {navSections.map((section, index) => (
          <button 
            key={section.id}
            onClick={() => onNavigate(index)}
            className={`pointer-events-auto transition-all duration-300 ${
              activeIndex === index 
                ? 'font-extrabold underline underline-offset-4' 
                : 'font-normal opacity-80 hover:opacity-100'
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