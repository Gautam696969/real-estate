import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

function BuyProperty() {
  useScrollAnimation();

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <section className="py-20 pt-32 bg-dark-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="text-center mb-14">
              <div className="inline-block px-4 py-1.5 bg-gold-600/10 border border-gold-600/20 rounded-full text-gold-600 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-sm">
                Buy Property
              </div>
              <h2 className="text-[2.5rem] font-bold text-white capitalize">Find Your Dream Home</h2>
              <p className="text-white/40 text-base mt-3 max-w-2xl mx-auto">Browse our exclusive collection of properties available for sale. Your perfect home awaits.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-dark-200/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-gold-600/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 group">
                  <div className="relative overflow-hidden">
                    <img src={`https://ravmoyaanrealty.com/images/rvm/fi${item}.png`} alt={`Property ${item}`} className="w-full h-[240px] object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-gold-600/90 text-dark-500 text-xs font-semibold rounded-lg backdrop-blur-sm">For Sale</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2">Premium Property {item}</h3>
                    <p className="text-white/50 text-sm mb-4">Luxurious living space with modern amenities and premium finishes.</p>
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold text-gold-600">$450,000</div>
                      <a href="#" className="px-4 py-2 bg-gold-600 text-dark-500 text-sm font-semibold rounded-lg">View Details</a>
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

export default BuyProperty;
