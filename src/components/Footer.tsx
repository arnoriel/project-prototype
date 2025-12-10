// src/components/Footer.tsx (VERSI BAHASA INGGRIS DENGAN ICON SOSMED SVG)

import React from 'react';

// Ikon SVG sederhana
const InstagramIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
  </svg>
);

const FacebookIcon = (props: any) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.5 2h-15C3.67 2 3 2.67 3 3.5v17C3 21.33 3.67 22 4.5 22h8.46v-6.73h-2.25V12.7h2.25v-1.63c0-2.22 1.34-3.42 3.32-3.42 0.94 0 1.75 0.07 1.99 0.11v2.17h-1.3c-1.04 0-1.24 0.5-1.24 1.22v1.5H18.7l-0.63 2.57h-2.06V22h4.5c0.83 0 1.5-0.67 1.5-1.5v-17C21 2.67 20.33 2 19.5 2z" />
  </svg>
);

const PinterestIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.22 2.64 7.81 6.35 9.29-.09-.79-.17-2.01.04-2.88.18-.75 1.16-4.78 1.16-4.78s-.29-.59-.29-1.47c0-1.38.8-2.41 1.8-2.41.85 0 1.26.64 1.26 1.41 0 .86-.55 2.15-.83 3.34-.24 1.03.5 1.87 1.48 1.87 1.78 0 3.15-1.88 3.15-4.59 0-2.4-1.73-4.08-4.2-4.08-2.86 0-4.54 2.15-4.54 4.37 0 .86.33 1.78.74 2.28a.3.3 0 0 1 .07.29c-.08.32-.26 1.03-.3 1.17-.05.19-.16.23-.37.14-1.38-.64-2.25-2.64-2.25-4.25 0-3.46 2.52-6.64 7.27-6.64 3.82 0 6.79 2.72 6.79 6.36 0 3.8-2.4 6.86-5.72 6.86-1.12 0-2.17-.58-2.53-1.26l-.69 2.62c-.25.96-.94 2.17-1.4 2.91A9.99 9.99 0 1 0 12 2z" />
  </svg>
);

const XIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.3 2H21l-6.6 7.5L21.8 22h-5.4l-4.2-6-4.8 6H3l7.2-8.1L2.5 2h5.5l3.8 5.6L18.3 2z" />
  </svg>
);

// Untuk TikTok, kita asumsikan ikon 'T' sebelumnya merujuk pada TikTok atau X. Kita akan pakai TikTok.
const TikTokIcon = (props: any) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2h3c.1 1.3.6 2.6 1.5 3.6A6 6 0 0 0 19.8 7v3a9 9 0 0 1-3-1V16a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V2z" />
  </svg>
);


const Footer: React.FC = () => {
  return (
    <section className="h-screen w-full snap-start bg-[#f5f4f0] flex flex-col justify-start items-center p-10 md:p-16 text-gray-800">
      
      {/* 1. Area Newsletter, Social, dan QR */}
      <div className="w-full max-w-5xl text-center pt-8 mb-16">
        <h3 className="text-sm uppercase tracking-widest font-bold mb-6">
          JOIN OUR NEWSLETTER – INTRODUCE YOUR EMAIL
        </h3>
        
        {/* Input Email */}
        <div className="flex justify-center mb-10">
          <div className="border-b border-gray-400 pb-2 w-full max-w-md">
            <input 
              type="email" 
              placeholder="E-mail" 
              className="bg-transparent outline-none w-full text-sm text-center" 
            />
          </div>
        </div>

        {/* Social Media dan QR Code */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-16">
            
            {/* FOLLOW US - FIX: Menggunakan Komponen Ikon SVG */}
            <div className="text-center mb-6 md:mb-0">
                <p className="text-xs uppercase font-bold mb-4">Follow us on</p>
                {/* Mengganti huruf placeholder dengan Ikon SVG */}
                <div className="flex gap-4 justify-center text-gray-600">
                    <a href="#" className="hover:text-black transition duration-200">
                        <FacebookIcon /> 
                    </a>
                    <a href="#" className="hover:text-black transition duration-200">
                        <PinterestIcon />
                    </a>
                    <a href="#" className="hover:text-black transition duration-200">
                        <InstagramIcon />
                    </a>
                    <a href="#" className="hover:text-black transition duration-200">
                        <XIcon /> {/* Mengganti 'X' */}
                    </a>
                    <a href="#" className="hover:text-black transition duration-200">
                        <TikTokIcon /> {/* Mengganti 'T' */}
                    </a>
                </div>
            </div>

            {/* Download our App */}
            <div className="text-center">
                <p className="text-xs uppercase font-bold mb-4">Download our app</p>
                {/* QR Code Image */}
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/128px-QR_code_for_mobile_English_Wikipedia.svg.png" 
                    alt="QR Code" 
                    className="w-20 h-20 mx-auto border border-gray-200 p-1"
                />
            </div>
        </div>
      </div>


      {/* 2. Area Kolom Informasi (POLICIES, COMPANY, CONTACT, YOU MAY BE INTERESTED) */}
      <div className="w-full max-w-5xl border-t border-b border-gray-300 py-10 md:py-16 mt-auto">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 text-sm text-left">
          
          {/* COLUMN 1: POLICIES */}
          <div className="flex flex-col gap-2">
            <span className="font-bold uppercase mb-2 text-xs">Policies</span>
            <a href="#" className="text-xs text-gray-700 hover:underline">Terms and Conditions</a>
            <a href="#" className="text-xs text-gray-700 hover:underline">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-700 hover:underline">Cookies Policy</a>
            <a href="#" className="text-xs text-gray-700 hover:underline">Purchase Verification</a>
          </div>

          {/* COLUMN 2: COMPANY */}
          <div className="flex flex-col gap-2">
            <span className="font-bold uppercase mb-2 text-xs">Company</span>
            <a href="#" className="text-xs text-gray-700 hover:underline">About DECOHOME</a>
            <a href="#" className="text-xs text-gray-700 hover:underline">Offices</a>
            <a href="#" className="text-xs text-gray-700 hover:underline">Work with Us</a>
            <a href="#" className="text-xs text-gray-700 hover:underline">Help</a>
          </div>

          {/* COLUMN 3: CONTACT */}
          <div className="flex flex-col gap-2">
            <span className="font-bold uppercase mb-2 text-xs">Contact</span>
            <a href="#" className="text-xs text-gray-700 hover:underline">Communication</a>
            <a href="#" className="text-xs text-gray-700 hover:underline">Stores</a>
            <a href="#" className="text-xs text-gray-700 hover:underline">900 900 000</a> 
          </div>

          {/* COLUMN 4: YOU MAY BE INTERESTED (Categories) */}
          <div className="flex flex-col gap-2">
            <span className="font-bold uppercase mb-2 text-xs">You may be interested</span>
            <a href="#" className="text-xs text-gray-700 hover:underline">Decoration</a>
            <a href="#" className="text-xs text-gray-700 hover:underline">Furniture</a>
            <a href="#" className="text-xs text-gray-700 hover:underline">Bathroom</a>
            <a href="#" className="text-xs text-gray-700 hover:underline">Kitchen</a>
          </div>
        </div>
      </div>
      
      {/* 3. Bottom Footer (Copyright and Language) */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-end text-xs text-gray-500 uppercase tracking-wider pt-8 pb-4">
        <span className="text-center md:text-left">© 2025 DECOHOME. ALL RIGHTS RESERVED.</span>
        <div className="mt-2 md:mt-0">
          <span>COUNTRY / LANGUAGE</span>
        </div>
      </div>

    </section>
  );
};

export default Footer;