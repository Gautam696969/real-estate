import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

function Services() {
  useScrollAnimation();

  const services = [
    {
      id: 1,
      icon: 'fa-solid fa-house',
      title: 'Buy Property',
      description: 'We help you find the right home or investment property, evaluate value using market data, and negotiate the best terms. From showings and offers to inspections, financing timelines, and closing coordination—we manage the details and protect your interests.',
    },
    {
      id: 2,
      icon: 'fas fa-building',
      title: 'Sell Property',
      description: 'We use a data-driven pricing strategy and a strong marketing plan to attract qualified buyers. We guide you on preparation and improvements that increase value, then handle showings, offers, negotiations, inspection requests, and closing—so you can sell smoothly and confidently.',
    },
    {
      id: 3,
      icon: 'fas fa-warehouse',
      title: 'Rent Property',
      description: 'For renters, we help you quickly find options that fit your budget and needs, and guide you through the application and lease process. For owners, we support rental pricing, listing marketing, showings, and qualified tenant placement to reduce vacancy and improve tenant quality.',
    },
  ];

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
                Our Services
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white capitalize">What We Offer</h1>
              <div className="flex items-center justify-center gap-2 text-white/50 text-sm mt-4">
                <a href="/" className="hover:text-gold-600 transition-colors text-white/70">Home</a>
                <span>/</span>
                <span className="text-gold-600">Services</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-dark-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto px-5 relative z-10">
            <div className="text-center mb-14">
              <div className="inline-block px-4 py-1.5 bg-gold-600/10 border border-gold-600/20 rounded-full text-gold-600 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-sm">
                Why Choose Us
              </div>
              <h2 className="text-[2.5rem] font-bold text-white capitalize">We Provide Full Service At Every Step</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-dark-300/80 backdrop-blur-sm rounded-2xl p-8 border border-white/5 transition-all duration-500 hover:border-gold-600/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center">
                <div className="flex items-center justify-center mb-6 mx-auto gap-2">
                  <img src="https://ravmoyaanrealty.com/images/icons/icon-12.svg" alt="icon" className="w-15 h-15" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Wide Renge Of Properties</h4>
                <p className="text-white/50 leading-relaxed">lorem ipsum dolor sit amet, consectetur pro adipisici consectetur debits adipisicing lacus consectetur Business Directory.</p>
              </div>
              <div className="bg-dark-300/80 backdrop-blur-sm rounded-2xl p-8 border border-white/5 transition-all duration-500 hover:border-gold-600/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center">
                <div className="flex items-center justify-center mb-6 mx-auto gap-2">
                  <img src="https://ravmoyaanrealty.com/images/icons/icon-13.svg" alt="icon" className="w-15 h-15" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Clear Communication & Negotiation</h4>
                <p className="text-white/50 leading-relaxed">Fast, transparent communication at every step, strong negotiation to protect your interests, clear guidance for confident decision-making.</p>
              </div>
              <div className="bg-dark-300/80 backdrop-blur-sm rounded-2xl p-8 border border-white/5 transition-all duration-500 hover:border-gold-600/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center">
                <div className="flex items-center justify-center mb-6 mx-auto gap-2">
                  <img src="https://ravmoyaanrealty.com/images/icons/icon-14.svg" alt="icon" className="w-15 h-15" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Complete Transaction Support</h4>
                <p className="text-white/50 leading-relaxed">End-to-end transaction coordination, detail-oriented process management, smooth and secure deal closure.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden" style={{ backgroundImage: 'url(https://ravmoyaanrealty.com/images/bg/bg-counter.jpg)', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' ,height:'700px', width:'100%'}}>
          <div className="absolute inset-0 bg-dark-100/90"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto px-5 relative z-10">
            <div className="text-center mb-5">
              <h2 className="text-[2.5rem] font-bold text-white capitalize">Property</h2>
              <p className="text-white/40 text-base mt-3 max-w-2xl mx-auto">Services.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="aos-init opacity-0 translate-y-[30px] transition-all duration-700 ease-out group bg-dark-300/80 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-gold-600/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-500 h-full flex flex-col"
                  style={{ transitionDelay: `${(index + 1) * 0.15}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-600/20 flex items-center justify-center mb-4 group-hover:from-gold-600/30 group-hover:to-gold-700/20 transition-all duration-500">
                    <i className={`${service.icon} text-4xl text-gold-600`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-white ">{service.title}</h4>
                  <p className="text-white/50 leading-relaxed ">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                  </ul>
                  <a href="#" className="inline-flex items-center gap-2 text-gold-600 text-sm font-semibold transition-all duration-300 group-hover:gap-3 mt-auto">
                    Read More <i className="fa fa-long-arrow-right"></i>
                  </a>
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

export default Services; 