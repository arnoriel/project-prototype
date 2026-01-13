import { useState, useMemo, useRef, useEffect } from 'react';
import Footer from '../components/Footer';

const products = [
  { id: 1, name: "Linen Bed Sheet Set", price: 1200000, material: "100% Belgian Linen", img: "/assets/img/1.jpeg", category: "Bedroom" },
  { id: 2, name: "Minimalist Ceramic Vase", price: 450000, material: "Hand-thrown Clay", img: "/assets/img/2.jpeg", category: "Decor" },
  { id: 3, name: "Oak Lounge Chair", price: 3500000, material: "Solid White Oak", img: "/assets/img/3.jpeg", category: "Living" },
  { id: 4, name: "Handcrafted Dining Table", price: 2800000, material: "Reclaimed Teak", img: "/assets/img/4.jpeg", category: "Dining" },
  { id: 5, name: "Nero Marble Coaster", price: 150000, material: "Italian Marble", img: "/assets/img/5.jpeg", category: "Kitchen" },
  { id: 6, name: "Botanical Scented Candle", price: 290000, material: "Soy Wax", img: "/assets/img/6.jpeg", category: "Decor" },
  { id: 7, name: "Abstract Wall Art", price: 850000, material: "Canvas", img: "/assets/img/1.jpeg", category: "Decor" },
  { id: 8, name: "Rattan Armchair", price: 2200000, material: "Natural Rattan", img: "/assets/img/2.jpeg", category: "Living" },
];

const sortOptions = [
  { id: 'default', label: 'Featured' },
  { id: 'name', label: 'Alphabetical (A-Z)' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' },
];

const Product = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOption, setSortOption] = useState(sortOptions[0]);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const sortRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const categories = ["All", "Living", "Dining", "Bedroom", "Decor", "Kitchen"];

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];
    if (activeCategory !== "All") {
      result = result.filter(p => p.category === activeCategory);
    }
    if (sortOption.id === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption.id === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption.id === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }
    return result;
  }, [activeCategory, sortOption]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAndSortedProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency', currency: 'IDR', minimumFractionDigits: 0,
    }).format(price).replace("Rp", "Rp ");
  };

  return (
    <div className="pt-24 md:pt-32 min-h-screen flex flex-col justify-between bg-white">
      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto w-full mb-20">
        
        <div className="max-w-xl mx-auto text-center mb-16 space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl text-black">The Collection</h1>
          <p className="text-gray-400 text-xs tracking-[0.3em] uppercase italic">Curated essentials for slow living</p>
        </div>

        {/* Filter & Custom Sort Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-y border-gray-100 py-6 gap-6 relative z-10">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] uppercase tracking-[0.2em]">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                        className={`transition-all duration-500 pb-1 border-b ${
                            activeCategory === cat ? "text-black border-black" : "text-gray-300 border-transparent hover:text-black"
                        }`}
                    >
                        {cat === "All" ? "All Objects" : cat}
                    </button>
                ))}
            </div>
            
            {/* Custom Dropdown Sort */}
            <div className="relative" ref={sortRef}>
                <button 
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-600 hover:text-black transition-colors"
                >
                    Sort by: <span className="text-black font-medium">{sortOption.label}</span>
                    <svg className={`w-3 h-3 transition-transform duration-300 ${isSortOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {isSortOpen && (
                    <div className="absolute right-0 mt-4 w-56 bg-white border border-gray-100 shadow-xl py-2 animate-in fade-in slide-in-from-top-2 duration-300">
                        {sortOptions.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => {
                                    setSortOption(option);
                                    setIsSortOpen(false);
                                }}
                                className={`w-full text-left px-6 py-3 text-[10px] uppercase tracking-[0.1em] transition-colors ${
                                    sortOption.id === option.id ? "bg-gray-50 text-black font-bold" : "text-gray-500 hover:bg-gray-50 hover:text-black"
                                }`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>

        {/* Grid Katalog */}
        {currentItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {currentItems.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                    <div className="overflow-hidden aspect-[4/5] mb-6 bg-neutral-100 relative">
                        <img 
                            src={item.img} 
                            alt={item.name} 
                            className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700"></div>
                    </div>

                    <div className="space-y-3 px-1">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="font-serif text-lg text-black leading-tight mb-1">{item.name}</h3>
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest">{item.material}</p>
                            </div>
                            <span className="text-sm font-light text-gray-800">{formatPrice(item.price)}</span>
                        </div>
                        <div className="pt-2 border-t border-gray-50 flex justify-end">
                            <p className="text-[9px] text-gray-300 uppercase tracking-widest italic">{item.category}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        ) : (
            <div className="py-40 text-center">
                <p className="font-serif text-xl text-gray-300 italic">No pieces found in this collection.</p>
            </div>
        )}
        
        {/* Pagination */}
        {totalPages > 1 && (
            <div className="mt-32 flex justify-center items-center gap-10 text-[10px] tracking-[0.3em] uppercase border-t border-gray-100 pt-10">
                <button 
                    disabled={currentPage === 1}
                    onClick={() => { setCurrentPage(prev => prev - 1); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                    className={`transition ${currentPage === 1 ? "text-gray-200 cursor-not-allowed" : "text-black hover:opacity-50"}`}
                >
                    Previous
                </button>
                
                <div className="flex gap-6">
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { setCurrentPage(i + 1); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                            className={`transition-all ${currentPage === i + 1 ? "text-black font-bold border-b border-black" : "text-gray-300 hover:text-black"}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>

                <button 
                    disabled={currentPage === totalPages}
                    onClick={() => { setCurrentPage(prev => prev + 1); window.scrollTo({top: 0, behavior: 'smooth'}); }}
                    className={`transition ${currentPage === totalPages ? "text-gray-200 cursor-not-allowed" : "text-black hover:opacity-50"}`}
                >
                    Next
                </button>
            </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Product;