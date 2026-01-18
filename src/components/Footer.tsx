// src/components/Footer.tsx (Hanya bagian return yang berubah layoutnya)
import React from 'react';

// ... (Simpan kode Icon SVG yang lama di sini, tidak berubah) ...
const InstagramIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" /></svg>
);
const FacebookIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.5 2h-15C3.67 2 3 2.67 3 3.5v17C3 21.33 3.67 22 4.5 22h8.46v-6.73h-2.25V12.7h2.25v-1.63c0-2.22 1.34-3.42 3.32-3.42 0.94 0 1.75 0.07 1.99 0.11v2.17h-1.3c-1.04 0-1.24 0.5-1.24 1.22v1.5H18.7l-0.63 2.57h-2.06V22h4.5c0.83 0 1.5-0.67 1.5-1.5v-17C21 2.67 20.33 2 19.5 2z" /></svg>
);
const PinterestIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.22 2.64 7.81 6.35 9.29-.09-.79-.17-2.01.04-2.88.18-.75 1.16-4.78 1.16-4.78s-.29-.59-.29-1.47c0-1.38.8-2.41 1.8-2.41.85 0 1.26.64 1.26 1.41 0 .86-.55 2.15-.83 3.34-.24 1.03.5 1.87 1.48 1.87 1.78 0 3.15-1.88 3.15-4.59 0-2.4-1.73-4.08-4.2-4.08-2.86 0-4.54 2.15-4.54 4.37 0 .86.33 1.78.74 2.28a.3.3 0 0 1 .07.29c-.08.32-.26 1.03-.3 1.17-.05.19-.16.23-.37.14-1.38-.64-2.25-2.64-2.25-4.25 0-3.46 2.52-6.64 7.27-6.64 3.82 0 6.79 2.72 6.79 6.36 0 3.8-2.4 6.86-5.72 6.86-1.12 0-2.17-.58-2.53-1.26l-.69 2.62c-.25.96-.94 2.17-1.4 2.91A9.99 9.99 0 1 0 12 2z" /></svg>
);
const XIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.3 2H21l-6.6 7.5L21.8 22h-5.4l-4.2-6-4.8 6H3l7.2-8.1L2.5 2h5.5l3.8 5.6L18.3 2z" /></svg>
);
const TikTokIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2h3c.1 1.3.6 2.6 1.5 3.6A6 6 0 0 0 19.8 7v3a9 9 0 0 1-3-1V16a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V2z" /></svg>
);

const Footer: React.FC = () => {
  return (
    // REVISI: p-6 di mobile, p-16 di desktop. md:h-screen (mobile biar auto height)
    <section className="min-h-screen md:h-screen w-full snap-start bg-[#f5f4f0] flex flex-col justify-start items-center p-6 md:p-16 text-gray-800">
      
      {/* 1. Newsletter */}
      <div className="w-full max-w-5xl text-center pt-4 md:pt-8 mb-10 md:mb-16">
        <h3 className="text-xs md:text-sm uppercase tracking-widest font-bold mb-6">
          JOIN OUR NEWSLETTER
        </h3>
        
        <div className="flex justify-center mb-10">
          <div className="border-b border-gray-400 pb-2 w-full max-w-md">
            <input 
              type="email" 
              placeholder="E-mail" 
              className="bg-transparent outline-none w-full text-sm text-center placeholder-gray-500" 
            />
          </div>
        </div>

        {/* Social Media - Flex Col di mobile agar rapi */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
            <div className="text-center">
                <p className="text-[10px] md:text-xs uppercase font-bold mb-4">Follow us on</p>
                <div className="flex gap-6 justify-center text-gray-600">
                    <a href="#"><FacebookIcon /></a>
                    <a href="#"><PinterestIcon /></a>
                    <a href="#"><InstagramIcon /></a>
                    <a href="#"><XIcon /></a>
                    <a href="#"><TikTokIcon /></a>
                </div>
            </div>
            {/* Mobile App Link di Footer tetap ada (opsional) */}
        </div>
      </div>

      {/* 2. Info Columns */}
      <div className="w-full max-w-5xl border-t border-b border-gray-300 py-8 md:py-16 mt-auto">
        {/* Grid 2 kolom di mobile, 4 di desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 text-sm text-left">
          
          <div className="flex flex-col gap-3">
            <span className="font-bold uppercase mb-1 text-[10px] md:text-xs">Policies</span>
            <a href="#" className="text-[10px] md:text-xs text-gray-600 hover:underline">Terms & Conditions</a>
            <a href="#" className="text-[10px] md:text-xs text-gray-600 hover:underline">Privacy Policy</a>
            <a href="#" className="text-[10px] md:text-xs text-gray-600 hover:underline">Cookies Policy</a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-bold uppercase mb-1 text-[10px] md:text-xs">Company</span>
            <a href="#" className="text-[10px] md:text-xs text-gray-600 hover:underline">About Us</a>
            <a href="#" className="text-[10px] md:text-xs text-gray-600 hover:underline">Offices</a>
            <a href="#" className="text-[10px] md:text-xs text-gray-600 hover:underline">Careers</a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-bold uppercase mb-1 text-[10px] md:text-xs">Contact</span>
            <a href="#" className="text-[10px] md:text-xs text-gray-600 hover:underline">Contact Us</a>
            <a href="#" className="text-[10px] md:text-xs text-gray-600 hover:underline">Store Locator</a>
          </div>

          <div className="flex flex-col gap-3">
             <span className="font-bold uppercase mb-1 text-[10px] md:text-xs">Explore</span>
            <a href="#" className="text-[10px] md:text-xs text-gray-600 hover:underline">Decoration</a>
            <a href="#" className="text-[10px] md:text-xs text-gray-600 hover:underline">Furniture</a>
          </div>
        </div>
      </div>
      
      {/* 3. Bottom */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center md:items-end text-[10px] md:text-xs text-gray-400 uppercase tracking-wider pt-6 md:pt-8 pb-4 gap-2">
        <span>© 2025 SAFGO</span>
        <span>INDONESIA / ENGLISH</span>
      </div>

    </section>
  );
};

export default Footer;