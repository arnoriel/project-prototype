import Footer from '../components/Footer';

const certs = [
  { 
    title: "FSC Certified Wood", 
    issuer: "Forest Stewardship Council", 
    year: "2024",
    desc: "Menjamin material kayu berasal dari hutan yang dikelola secara bertanggung jawab."
  },
  { 
    title: "Eco-Friendly Certified", 
    issuer: "Green Living Indonesia", 
    year: "2023",
    desc: "Proses produksi rendah emisi dengan penggunaan bahan finishing non-toxic."
  },
  { 
    title: "Top Brand: Interior", 
    issuer: "Design Awards Indonesia", 
    year: "2023",
    desc: "Pengakuan atas inovasi desain dan kepuasan pelanggan di sektor furnitur."
  },
  { 
    title: "ISO 9001:2015", 
    issuer: "Quality Management", 
    year: "2022",
    desc: "Standar internasional untuk sistem manajemen kualitas produksi."
  },
];

const Certificate = () => {
  return (
    <div className="pt-24 md:pt-32 min-h-screen flex flex-col justify-between bg-white">
      <div className="px-6 md:px-20 mb-20">
         <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl text-black">Our Credentials</h1>
          <div className="h-px w-20 bg-black mx-auto my-6"></div>
          <p className="text-gray-500 text-sm tracking-widest uppercase">Kualitas yang teruji dan diakui secara global</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certs.map((c, idx) => (
                <div key={idx} className="group p-8 border border-gray-100 hover:border-black transition-all duration-500 flex flex-col items-center text-center">
                    <div className="w-12 h-12 mb-6 text-gray-300 group-hover:text-black transition-colors duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                    </div>
                    <h3 className="font-serif text-lg mb-2">{c.title}</h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4">{c.issuer} — {c.year}</p>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">{c.desc}</p>
                </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Certificate;