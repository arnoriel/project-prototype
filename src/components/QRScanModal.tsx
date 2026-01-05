// src/components/QRScanModal.tsx
import React, { useState } from 'react';

const QR_CODE_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1024px-QR_code_for_mobile_English_Wikipedia.svg.png";

const QRScanModal: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        // REVISI: Tambahkan 'hidden md:block'. 
        // Ini akan menyembunyikan modal QR di layar kecil (mobile) karena user mobile tidak bisa scan layar sendiri.
        <div 
            className="hidden md:block fixed bottom-6 right-6 z-50 w-64 p-5 bg-white shadow-xl border border-gray-100 transition-opacity duration-300"
        >
            <div className="flex justify-end">
                <button 
                    onClick={handleClose} 
                    className="text-gray-500 hover:text-black transition absolute top-2 right-2 p-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            
            <div className="text-center mt-2 mb-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-800 mb-3">
                   DON'T YOU HAVE THE APP YET?
                </p>
                <div className="flex justify-center mb-3">
                    <img 
                        src={QR_CODE_URL} 
                        alt="QR Code" 
                        className="w-24 h-24 object-contain border border-gray-200 p-1"
                    />
                </div>
                <p className="text-[10px] text-gray-500">
                    Download Now
                </p>
            </div>
        </div>
    );
};

export default QRScanModal;