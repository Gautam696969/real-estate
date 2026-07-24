const Services = () => {
  const services = [
    {
      id: 1,
      icon: 'fa-solid fa-house',
      title: 'Houses',
      description: 'Discover premium residential properties designed for comfort and modern living in prime locations.',
    },
    {
      id: 2,
      icon: 'fa-solid fa-building',
      title: 'Apartments',
      description: 'Nonec pede justo fringilla vel aliquet nec vulputate eget arcu in enim justo rhoncus ut imperdiet venenatis vitae justo.',
    },
    {
      id: 3,
      icon: 'fa-solid fa-warehouse',
      title: 'Commercial',
      description: 'Nonec pede justo fringilla vel aliquet nec vulputate eget arcu in enim justo rhoncus ut imperdiet venenatis vitae justo.',
    },
  ];

  return (
    <section className="py-10 relative overflow-hidden" style={{ backgroundImage: 'url(https://ravmoyaanrealty.com/images/bg/bg-counter.jpg)', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-dark-500/80"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
      <div className="max-w-[1200px] mx-auto px-5 relative z-10">
        <div className="text-center mb-5">
          <div className="inline-block px-4 py-1.5 bg-gold-600/10 border border-gold-600/20 rounded-full text-gold-600 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-sm">
            Property
          </div>
          <h2 className="text-[2.5rem] font-bold text-white capitalize">Services</h2>
          <p className="text-white/40 text-base max-w-2xl mx-auto">Comprehensive real estate solutions tailored to your needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="aos-init opacity-0 translate-y-[30px] transition-all duration-700 ease-out group"
              style={{ transitionDelay: `${(index + 1) * 0.15}s` }}
            >
               <div className="bg-dark-200/80 backdrop-blur-s m border border-white/5 rounded-2xl p-6 sm:p-8 h-full transition-all duration-500 hover:border-gold-600/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1">
                 <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-600/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:from-gold-600/30 group-hover:to-gold-700/20 transition-all duration-500">
                   <i className={`${service.icon} text-xl sm:text-2xl text-gold-600`}></i>
                 </div>
                 <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{service.title}</h4>
                 <p className="text-white/50 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">{service.description}</p>
                 <a href="#" className="inline-flex items-center gap-2 text-gold-600 text-xs sm:text-sm font-semibold transition-all duration-300 group-hover:gap-3">
                   Learn More <i className="fa fa-long-arrow-right"></i>
                 </a>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
