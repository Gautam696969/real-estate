import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { useState } from 'react';
function Gallery() {
  useScrollAnimation();

  const properties = [
    { id: 1, type: 'For Rent', price: '$623,000', title: 'Luxury House in New York', area: '720 sq ft', rooms: '6', beds: '2', baths: '3', image: "https://ravmoyaanrealty.com/images/feature-properties/fp-7.jpg" },
    { id: 2, type: 'For Rent', price: '$6,500', title: 'Villa House in Los Angeles', area: '720 sq ft', rooms: '6', beds: '2', baths: '3', image: "https://ravmoyaanrealty.com/images/feature-properties/fp-8.jpg" },
    { id: 3, type: 'For Rent', price: '$230,000', title: 'Family House in San Francisco', area: '720 sq ft', rooms: '6', beds: '2', baths: '3', image: "https://ravmoyaanrealty.com/images/feature-properties/fp-9.jpg" },
    { id: 4, type: 'For Rent', price: '$6,500', title: 'Condo House in Miami', area: '720 sq ft', rooms: '6', beds: '2', baths: '3', image: "https://ravmoyaanrealty.com/images/feature-properties/fp-10.jpg" },
    { id: 5, type: 'For Rent', price: '$230,000', title: 'Family House in Chicago', area: '720 sq ft', rooms: '6', beds: '2', baths: '3', image: "https://ravmoyaanrealty.com/images/feature-properties/fp-11.jpg" },
    { id: 6, type: 'For Rent', price: '$6,500', title: 'Luxury House in Toronto', area: '720 sq ft', rooms: '6', beds: '2', baths: '3', image: "https://ravmoyaanrealty.com/images/feature-properties/fp-12.jpg" },
  ];

  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProperties = activeFilter === 'All' ? properties : properties.filter(p => p.type === activeFilter);

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
      <section className="relative py-24 pt-32 bg-dark-100 overflow-hidden">
          <img src="https://ravmoyaanrealty.com/images/bg/bg-testimonials-2.jpg " alt="Services Background" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-100/60"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto px-5 relative z-10">
            <div className="text-center mb-14">
              <div className="inline-block px-4 py-1.5 bg-gold-600/10 border border-gold-600/20 rounded-full text-gold-600 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-sm">
                Our Gallery
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white capitalize">OUR GALLERY</h1>
              <div className="flex items-center justify-center gap-2 text-white/50 text-sm mt-4">
                <a href="/" className="hover:text-gold-600 transition-colors text-white/70">Home</a>
                <span>/</span>
                <span className="text-gold-600">Gallery</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-dark-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="flex flex-wrap justify-center gap-4 mb-14">
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property, index) => (
                <div
                  key={property.id}
                  className="aos-init opacity-0 translate-y-[30px] transition-all duration-700 ease-out group bg-dark-300/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-gold-600/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500"
                  style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
                >
                  <div className="relative overflow-hidden h-72">
                    <img src={property.image} alt={property.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-500/40 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-3 py-1 bg-gold-600 text-dark-500 text-xs font-semibold uppercase rounded-full">{property.type}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent transition-transform duration-300 hover:-translate-y-2">
                      <h3 className="text-lg font-bold text-white">{property.title}</h3>
                      <p className="text-gold-600 font-semibold text-sm">{property.price}</p>
                    </div>
                  </div>
                  <div className="p-4 border-t border-white/3">
                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div className="flex items-center justify-center gap-2 text-white/50 text-xs">
                        <i className="fa fa-expand text-gold-600"></i>
                        <span>{property.area}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-white/50 text-xs">
                        <i className="fa fa-door-open text-gold-600"></i>
                        <span>{property.rooms} Rooms</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-white/50 text-xs">
                        <i className="fa fa-bed text-gold-600"></i>
                        <span>{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-white/50 text-xs">
                        <i className="fa fa-bath text-gold-600"></i>
                        <span>{property.baths} Baths</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="go-up fixed bottom-[30px] right-[30px] w-[50px] h-[50px] bg-gold-600 text-dark-500 rounded-full flex items-center justify-center shadow-[0_5px_20px_rgba(0,0,0,0.3)] z-[99] transition-all duration-300 text-2xl hover:bg-gold-800 hover:-translate-y-1 border-none cursor-pointer">
        <i className="fa fa-angle-double-up"></i>
      </button>
    </div>
  );
}

export default Gallery;