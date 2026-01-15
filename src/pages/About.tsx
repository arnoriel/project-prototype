import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="pt-24 md:pt-32 w-full bg-white">
      {/* Section 1: Intro */}
      <div className="px-6 md:px-20 py-10 md:py-20 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 space-y-6">
          <h1 className="font-serif text-4xl md:text-6xl text-black leading-tight">
            Rattan Reed Diffuser Sticks <br />
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-md">
            Rattan reed diffuser sticks are a natural and effective choice for
            companies looking to incorporate sustainable elegance into their
            product line or workspace.
          </p>
        </div>
        <div className="md:w-1/2 h-[400px] md:h-[600px] bg-gray-100 overflow-hidden rounded-sm">
          <img
            src="/assets/img/1.jpeg"
            alt="Our Studio"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-1000 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>

      {/* Section 2: Narrative Story */}
      <div className="bg-neutral-50 py-24 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* <span className="text-xs uppercase tracking-[0.3em] text-gray-400">Our Philosophy</span> */}
          <h2 className="font-serif text-3xl md:text-5xl text-black italic">
            "Superior diffusion meets sustainable craftsmanship."
          </h2>
          <div className="text-gray-500 leading-loose text-lg font-light space-y-6">
            <p>
              Our rattan reed diffuser sticks offer an eco-conscious and highly
              efficient solution for fragrance diffusion. Harvested from
              sustainably managed sources, these natural rattan sticks are
              designed with a porous structure featuring multiple capillary
              channels that draw essential oils and release a consistent,
              long-lasting aroma without the need for heat, electricity, or
              flame.
            </p>
            <p className="text-base italic">
              Ideal for clients who prioritize natural ingredients and
              environmentally responsible practices, these rattan reeds provide
              a clean, simple, and aesthetically pleasing method for scent
              delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Values */}
      <div className="py-24 px-6 md:px-20">
        <h2 className="font-serif text-3xl md:text-5xl text-black italic mb-10 text-center">
          Key Feature and Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-4 border-l border-gray-100 pl-6">
            <span className="text-sm font-serif italic text-gray-400">01.</span>
            <h3 className="font-serif text-2xl uppercase tracking-wider">
              Eco-Friendly
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Made from natural, rapidly renewable rattan palms, supporting a
              commitment to sustainability and responsible sourcing.
            </p>
          </div>
          <div className="space-y-4 border-l border-gray-100 pl-6">
            <span className="text-sm font-serif italic text-gray-400">02.</span>
            <h3 className="font-serif text-2xl uppercase tracking-wider">
              Superior Throw
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              The porous capillary channels ensure maximum scent throw and
              steady fragrance release for a premium experience.
            </p>
          </div>
          <div className="space-y-4 border-l border-gray-100 pl-6">
            <span className="text-sm font-serif italic text-gray-400">03.</span>
            <h3 className="font-serif text-2xl uppercase tracking-wider">
              Safe & Pure
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              A flame-free alternative to candles, making it safe for homes,
              offices, and luxury hospitality environments.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-neutral-50 py-24 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="text-gray-500 leading-loose text-lg font-light space-y-6">
            <p>
              By choosing our rattan reeds, your company aligns with sustainable
              values while providing a premium, high-performance fragrance
              experience.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
