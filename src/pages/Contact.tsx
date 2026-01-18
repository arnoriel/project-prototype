import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="pt-24 md:pt-32 min-h-screen flex flex-col justify-between bg-white">
      <div className="px-6 md:px-20 max-w-7xl mx-auto w-full mb-20">
        <div className="flex flex-col lg:flex-row gap-20">
            
            {/* Left: Info */}
            <div className="lg:w-1/3 space-y-12">
                <div className="space-y-4">
                    <h1 className="font-serif text-5xl text-black">Contact.</h1>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                        Ingin berdiskusi tentang proyek interior atau sekadar bertanya mengenai koleksi kami? Tim kami siap membantu Anda.
                    </p>
                </div>
                
                <div className="space-y-8">
                    <div className="group cursor-pointer">
                        <div className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2 group-hover:text-black transition-colors">Our Flagship</div>
                        <p className="text-sm font-medium leading-loose">Jalan Dago No. 123<br/>Bandung, West Java, Indonesia</p>
                    </div>
                    <div className="group cursor-pointer">
                        <div className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-2 group-hover:text-black transition-colors">Digital Inquiry</div>
                        <p className="text-sm font-medium">hello@SAFGO.id</p>
                        <p className="text-sm font-medium">+62 812 3456 7890</p>
                    </div>
                    <div>
                         <div className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-4">Follow Us</div>
                        <div className="flex gap-6 text-sm font-medium uppercase tracking-widest text-black">
                            <a href="#" className="hover:opacity-50 transition">IG</a>
                            <a href="#" className="hover:opacity-50 transition">PN</a>
                            <a href="#" className="hover:opacity-50 transition">LI</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Form + FAQ Area */}
            <div className="lg:w-2/3 space-y-20">
                <form className="space-y-10 bg-neutral-50 p-8 md:p-12 rounded-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-400">Full Name</label>
                            <input type="text" className="bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors placeholder:text-gray-200" placeholder="John Doe"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-400">Email Address</label>
                            <input type="email" className="bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors placeholder:text-gray-200" placeholder="john@example.com"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-400">Subject</label>
                        <select className="bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors">
                            <option>General Inquiry</option>
                            <option>Partnership</option>
                            <option>Custom Order</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-400">Message</label>
                        <textarea rows={4} className="bg-transparent border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors resize-none placeholder:text-gray-200" placeholder="Describe your project..."></textarea>
                    </div>
                    <button type="submit" className="bg-black text-white px-12 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-neutral-800 transition-all w-full md:w-auto">
                        Send Inquiry
                    </button>
                </form>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;