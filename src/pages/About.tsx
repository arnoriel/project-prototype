import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="pt-24 md:pt-32 w-full bg-white">
      {/* Section 1: Intro */}
      <div className="px-6 md:px-20 py-10 md:py-20 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 space-y-6">
            <h1 className="font-serif text-4xl md:text-6xl text-black leading-tight">
                Designing <br/> 
                <span className="italic text-gray-400">Mindful</span> Spaces.
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-md">
                Decohome was born from a simple idea: that the objects we surround ourselves with should bring peace, not clutter. Established in 2024, we work with artisans across Indonesia to bring sustainable, handcrafted luxury into your home.
            </p>
        </div>
        <div className="md:w-1/2 h-[400px] md:h-[600px] bg-gray-100 overflow-hidden rounded-sm">
             <img src="/assets/img/1.jpeg" alt="Our Studio" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-1000 ease-in-out transform hover:scale-105"/>
        </div>
      </div>

      {/* Section 2: Narrative Story */}
      <div className="bg-neutral-50 py-24 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400">Our Philosophy</span>
            <h2 className="font-serif text-3xl md:text-5xl text-black italic">"Beauty lies in the quiet details of craftsmanship."</h2>
            <p className="text-gray-500 leading-loose text-lg font-light">
                Di Decohome, kami percaya bahwa rumah adalah tempat perlindungan. Itulah mengapa setiap material—mulai dari kayu jati yang bersertifikat hingga kain linen organik kami—dipilih secara manual untuk memastikan kualitas yang bertahan melampaui tren sesaat.
            </p>
        </div>
      </div>

      {/* Section 3: Values */}
      <div className="py-24 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-4 border-l border-gray-100 pl-6">
                <span className="text-sm font-serif italic text-gray-400">01.</span>
                <h3 className="font-serif text-2xl uppercase tracking-wider">Sustainable</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Kami hanya menggunakan material yang bersumber secara etis, mendukung regenerasi hutan dan meminimalkan jejak karbon.</p>
            </div>
            <div className="space-y-4 border-l border-gray-100 pl-6">
                <span className="text-sm font-serif italic text-gray-400">02.</span>
                <h3 className="font-serif text-2xl uppercase tracking-wider">Handcrafted</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Dibuat oleh tangan-tangan ahli pengrajin lokal Indonesia, menjaga tradisi tetap hidup dalam konteks modern.</p>
            </div>
            <div className="space-y-4 border-l border-gray-100 pl-6">
                <span className="text-sm font-serif italic text-gray-400">03.</span>
                <h3 className="font-serif text-2xl uppercase tracking-wider">Timeless</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Desain yang mengutamakan fungsi dan estetika minimalis, diciptakan untuk menemani generasi masa depan.</p>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;