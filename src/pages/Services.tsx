import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

function Services() {
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
                Property
              </div>
              <h2 className="text-[2.5rem] font-bold text-white capitalize">Services</h2>
              <p className="text-white/40 text-base mt-3 max-w-2xl mx-auto">Comprehensive real estate solutions tailored to your needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
              <div className="bg-dark-200/80 backdrop-blur-sm rounded-2xl p-8 h-full transition-all duration-500 hover:border-gold-600/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 border border-white/5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-600/20 flex items-center justify-center mb-6">
                  <i className="fa-solid fa-house text-2xl text-gold-600"></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Houses</h4>
                <p className="text-white/50 leading-relaxed mb-6">Discover premium residential properties designed for comfort and modern living in prime locations.</p>
                <a href="#" className="inline-flex items-center gap-2 text-gold-600 text-sm font-semibold transition-all duration-300 hover:gap-3">
                  Learn More <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
              <div className="bg-dark-200/80 backdrop-blur-sm rounded-2xl p-8 h-full transition-all duration-500 hover:border-gold-600/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 border border-white/5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-600/20 flex items-center justify-center mb-6">
                  <i className="fa-solid fa-building text-2xl text-gold-600"></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Apartments</h4>
                <p className="text-white/50 leading-relaxed mb-6">Nonec pede justo fringilla vel aliquet nec vulputate eget arcu in enim justo rhoncus ut imperdiet venenatis vitae justo.</p>
                <a href="#" className="inline-flex items-center gap-2 text-gold-600 text-sm font-semibold transition-all duration-300 hover:gap-3">
                  Learn More <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
              <div className="bg-dark-200/80 backdrop-blur-sm rounded-2xl p-8 h-full transition-all duration-500 hover:border-gold-600/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 border border-white/5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-600/20 flex items-center justify-center mb-6">
                  <i className="fa-solid fa-warehouse text-2xl text-gold-600"></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Commercial</h4>
                <p className="text-white/50 leading-relaxed mb-6">Nonec pede justo fringilla vel aliquet nec vulputate eget arcu in enim justo rhoncus ut imperdiet venenatis vitae justo.</p>
                <a href="#" className="inline-flex items-center gap-2 text-gold-600 text-sm font-semibold transition-all duration-300 hover:gap-3">
                  Learn More <i className="fa fa-long-arrow-right"></i>
                </a>
              </div>
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

export default Services;
