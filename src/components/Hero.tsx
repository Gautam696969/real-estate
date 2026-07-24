import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [openSelect, setOpenSelect] = useState<string | null>(null);
  const [selected, setSelected] = useState({
    location: 'Sec 102',
    type: 'Sell Property',
    status: 'For Sale',
  });

  const refs = {
    location: useRef<HTMLDivElement>(null),
    type: useRef<HTMLDivElement>(null),
    status: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        refs.location.current?.contains(event.target as Node) &&
        refs.type.current?.contains(event.target as Node) &&
        refs.status.current?.contains(event.target as Node)
      ) {
        return;
      }
      setOpenSelect(null);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSelect = (name: string) => {
    setOpenSelect(openSelect === name ? null : name);
  };

  const selectOption = (name: string, value: string) => {
    setSelected({ ...selected, [name]: value });
    setOpenSelect(null);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-dark-600">
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/10 z-10"></div>
        <video poster="/images/bg/video-poster2.png" loop autoPlay muted playsInline className="w-full h-full object-cover">
          <source src="https://ravmoyaanrealty.com/video/5.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 min-h-screen flex items-center py-[100px] sm:py-[120px]">
        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-5">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block px-3 sm:px-4 py-1.5 bg-gold-600/20 border border-gold-600/30 rounded-full text-gold-600 text-xs sm:text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-5 backdrop-blur-sm">
              Premium Real Estate Services
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-[3.5rem] font-bold leading-tight mb-4 sm:mb-5 text-white">
              Find Your <span className="text-gold-600">Dream Property</span>
            </h1>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto px-4 sm:px-0">Discover luxury homes, apartments, and commercial spaces tailored to your lifestyle.</p>
          </div>

          <div className="max-w-[950px] mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl sm:rounded-4xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-white/10 p-2 sm:p-2">
              <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0">
                <div className="form-group location flex-[1.5] relative min-w-[200px]">
                  <div ref={refs.location} className="nice-select w-full h-12 sm:h-14 bg-transparent border-none text-white font-medium text-sm sm:text-base flex items-center px-4 sm:px-5 cursor-pointer relative transition-all duration-300 hover:text-gold-600" onClick={() => toggleSelect('location')}>
                    <span className="current flex items-center gap-2 sm:gap-2.5 w-full whitespace-nowrap">
                      <i className="fa fa-map-marker text-gold-600 text-xs sm:text-sm"></i> {selected.location}
                    </span>
                    <ul className={`list absolute top-full left-0 right-0 bg-dark-200 border border-dark-50 rounded-xl z-10 py-1.5 list-none m-0 shadow-[0_10px_30px_rgba(0,0,0,0.3)] ${openSelect === 'location' ? 'block' : 'hidden'}`}>
                      <li onClick={() => selectOption('location', 'Sec 102')} className="px-3 sm:px-4 py-2 text-sm text-white/70 cursor-pointer hover:bg-white/5 hover:text-gold-600 transition-all">Sec 102</li>
                      <li onClick={() => selectOption('location', 'Sec 84')} className="px-3 sm:px-4 py-2 text-sm text-white/70 cursor-pointer hover:bg-white/5 hover:text-gold-600 transition-all">Sec 84</li>
                      <li onClick={() => selectOption('location', 'Sec 89')} className="px-3 sm:px-4 py-2 text-sm text-white/70 cursor-pointer hover:bg-white/5 hover:text-gold-600 transition-all">Sec 89</li>
                      <li onClick={() => selectOption('location', 'Sector 89, Gurgaon')} className="px-3 sm:px-4 py-2 text-sm text-white/70 cursor-pointer hover:bg-white/5 hover:text-gold-600 transition-all">Sector 89, Gurgaon</li>
                      <li onClick={() => selectOption('location', 'Sohna, Mumbai Expressway')} className="px-3 sm:px-4 py-2 text-sm text-white/70 cursor-pointer hover:bg-white/5 hover:text-gold-600 transition-all">Sohna, Mumbai Expressway</li>
                    </ul>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-8 bg-white/10 self-center"></div>

                <div className="form-group flex-[1] relative min-w-[180px]">
                  <div ref={refs.type} className="nice-select w-full h-12 sm:h-14 bg-transparent border-none text-white font-medium text-sm sm:text-base flex items-center px-4 sm:px-5 cursor-pointer relative transition-all duration-300 hover:text-gold-600" onClick={() => toggleSelect('type')}>
                    <span className="current flex items-center gap-2 sm:gap-2.5 w-full whitespace-nowrap">
                      <i className="fa fa-home text-gold-600 text-xs sm:text-sm"></i> {selected.type}
                    </span>
                    <ul className={`list absolute top-full left-0 right-0 bg-dark-200 border border-dark-50 rounded-xl z-10 py-1.5 list-none m-0 shadow-[0_10px_30px_rgba(0,0,0,0.3)] ${openSelect === 'type' ? 'block' : 'hidden'}`}>
                      <li onClick={() => selectOption('type', 'Sell Property')} className="px-3 sm:px-4 py-2 text-sm text-white/70 cursor-pointer hover:bg-white/5 hover:text-gold-600 transition-all">Sell Property</li>
                      <li onClick={() => selectOption('type', 'Buy Property')} className="px-3 sm:px-4 py-2 text-sm text-white/70 cursor-pointer hover:bg-white/5 hover:text-gold-600 transition-all">Buy Property</li>
                      <li onClick={() => selectOption('type', 'Rent Property')} className="px-3 sm:px-4 py-2 text-sm text-white/70 cursor-pointer hover:bg-white/5 hover:text-gold-600 transition-all">Rent Property</li>
                    </ul>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-8 bg-white/10 self-center"></div>

                <div className="form-group duration flex-[1.2] relative min-w-[180px]">
                  <div ref={refs.status} className="nice-select w-full h-12 sm:h-14 bg-transparent border-none text-white font-medium text-sm sm:text-base flex items-center px-4 sm:px-5 cursor-pointer relative transition-all duration-300 hover:text-gold-600" onClick={() => toggleSelect('status')}>
                    <span className="current flex items-center gap-2 sm:gap-2.5 w-full whitespace-nowrap">
                      <i className="fa fa-building text-gold-600 text-xs sm:text-sm"></i> {selected.status}
                    </span>
                    <ul className={`list absolute top-full left-0 right-0 bg-dark-200 border border-dark-50 rounded-xl z-10 py-1.5 list-none m-0 shadow-[0_10px_30px_rgba(0,0,0,0.3)] ${openSelect === 'status' ? 'block' : 'hidden'}`}>
                      <li onClick={() => selectOption('status', 'For Sale')} className="px-3 sm:px-4 py-2 text-sm text-white/70 cursor-pointer hover:bg-white/5 hover:text-gold-600 transition-all">For Sale</li>
                      <li onClick={() => selectOption('status', 'For Rent')} className="px-3 sm:px-4 py-2 text-sm text-white/70 cursor-pointer hover:bg-white/5 hover:text-gold-600 transition-all">For Rent</li>
                    </ul>
                  </div>
                </div>

                <div className="form-group button flex-[0_0_auto] min-w-[140px] sm:min-w-[160px]">
                  <button
                    type="submit"
                    className="w-full h-12 sm:h-14 bg-gradient-to-r from-gold-600 to-gold-700 text-dark-500 border-none rounded-2xl sm:rounded-4xl text-sm sm:text-base font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wide px-5 sm:px-7 hover:from-gold-500 hover:to-gold-600 hover:shadow-[0_8px_25px_rgba(255,179,0,0.4)] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <i className="fa fa-search mr-1 sm:mr-2"></i> Search
                  </button>
                </div>
              </form>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-8 sm:mt-10">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">200+</div>
                <div className="text-xs sm:text-sm text-white/50">Properties</div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
                <div className="text-xs sm:text-sm text-white/50">Happy Clients</div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-white/10"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">24/7</div>
                <div className="text-xs sm:text-sm text-white/50">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
