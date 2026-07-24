import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect } from 'react';
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [propertyOpen, setPropertyOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
 const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 0) {
        setVisible(true);
      } else if (currentScroll > lastScroll && currentScroll > 100) {
        setVisible(false);
        setMobileOpen(false);
      } else if (currentScroll < lastScroll) {
        setVisible(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  return (
    <nav className={`fixed top-0 left-0 w-full bg-dark-400/40 backdrop-blur-xl z-[1000] border-b border-white/5 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center h-[80px]">
        <div className="flex items-center gap-6">
          <a href="#">
            <img src="https://ravmoyaanrealty.com/images/myedit/main-logo-yellow.png" alt="Ravmoyaan Realty" className="h-[50px] w-auto" />
          </a>
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-6">
              <li><a href="#" className="text-white/80 text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-white/80 text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors duration-300">About</a></li>
              <li
                className="relative"
                onMouseEnter={() => setPropertyOpen(true)}
                onMouseLeave={() => setPropertyOpen(false)}
              >
                <a href="#" className="text-white/80 text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors duration-300 flex items-center">
                  Property
                  <ChevronDown size={12} className="ml-1" />
                </a>
                <ul className={`absolute top-full left-0 bg-dark-200/95 backdrop-blur-xl min-w-[200px] py-2.5 transition-all duration-300 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/5 z-50 ${propertyOpen ? 'opacity-100 visible translate-y-2' : 'opacity-0 invisible translate-y-0'}`}>
                  <li><a href="https://ravmoyaanrealty.com/buy-property.php" className="block px-5 py-2.5 text-sm text-white/60 capitalize hover:text-gold-600 hover:bg-white/5 transition-all rounded-lg mx-1">Buy Property</a></li>
                  <li><a href="https://ravmoyaanrealty.com/sell-property.php" className="block px-5 py-2.5 text-sm text-white/60 capitalize hover:text-gold-600 hover:bg-white/5 transition-all rounded-lg mx-1">Sell Property</a></li>
                  <li><a href="https://ravmoyaanrealty.com/rent-property.php" className="block px-5 py-2.5 text-sm text-white/60 capitalize hover:text-gold-600 hover:bg-white/5 transition-all rounded-lg mx-1">Rent Property</a></li>
                </ul>
              </li>
              <li><a href="https://ravmoyaanrealty.com/services.php" className="text-white/80 text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors duration-300">Services</a></li>
              <li><a href="https://ravmoyaanrealty.com/gallery.php" className="text-white/80 text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors duration-300">Gallery</a></li>
              <li><a href="https://ravmoyaanrealty.com/blog.php" className="text-white/80 text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors duration-300">Blog</a></li>
              <li><a href="https://ravmoyaanrealty.com/contact.php" className="text-white/80 text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors duration-300">Contact</a></li>
            </ul>
          </nav>
        </div>

        <div className="hidden xl:flex items-center gap-4">
          <a href="#" className="text-white/60 text-sm font-medium hover:text-gold-600 transition-colors duration-300">Sign In</a>
          <div className="relative">
            <div className="flex items-center gap-1.5 text-gold-600 text-sm font-semibold cursor-pointer" onClick={() => setLangOpen(!langOpen)}>
              <i className="fas fa-globe-americas"></i>
              <strong>ENG</strong>
              <ChevronDown size={12} />
            </div>
            <ul className={`absolute top-full right-0 bg-dark-200/95 backdrop-blur-xl min-w-[120px] py-2.5 transition-all duration-300 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/5 z-50 ${langOpen ? 'opacity-100 visible translate-y-2' : 'opacity-0 invisible translate-y-0'}`}>
              <li><a href="#" className="block px-4 py-2 text-sm text-white/60 hover:text-gold-600 hover:bg-white/5 transition-all rounded-lg mx-1">English</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm text-white/60 hover:text-gold-600 hover:bg-white/5 transition-all rounded-lg mx-1">Chicago</a></li>
              <li><a href="#" className="block px-4 py-2 text-sm text-white/60 hover:text-gold-600 hover:bg-white/5 transition-all rounded-lg mx-1">Hindi</a></li>
            </ul>
          </div>
          <div className="flex items-center gap-2 text-gold-600 font-semibold text-sm">
            <div className="w-[28px] h-4 bg-white border-2 border-gold-600 rounded-full relative overflow-hidden animate-[blink_5s_infinite]">
              <div className="w-[10px] h-[10px] bg-gradient-to-br from-[#5a3b00] to-[#2e1b00] rounded-full absolute top-[2px] left-2 animate-[lookAround_6s_infinite]">
                <span className="w-[4px] h-[4px] bg-black rounded-full absolute top-[3px] left-[3px]"></span>
              </div>
            </div>
            <span>602</span>
          </div>
          <a href="https://ravmoyaanrealty.com/renter-application/" className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-gold-600 to-gold-700 text-dark-500 text-sm font-medium uppercase tracking-wide rounded-xl transition-all duration-300 hover:from-gold-500 hover:to-gold-600 hover:shadow-[0_8px_25px_rgba(255,179,0,0.3)]">
            Rental Form <i className="fas fa-laptop-house ml-2"></i>
          </a>
        </div>

        <button className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`lg:hidden fixed top-[80px] left-0 w-full bg-dark-500/95 backdrop-blur-xl p-5 transition-all duration-300 z-[999] border-b border-white/5 ${mobileOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-[120%] opacity-0 invisible'}`}>
        <ul className="flex flex-col items-start gap-4">
          <li><a href="#" className="text-white/80 text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors">Home</a></li>
          <li><a href="https://ravmoyaanrealty.com/about-us.php" className="text-white/80 text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors">About</a></li>
          <li className="w-full">
            <a href="#" className="text-white/80 text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors">Property</a>
            <ul className="ml-4 mt-2 space-y-2">
              <li><a href="https://ravmoyaanrealty.com/buy-property.php" className="block py-2 text-sm text-white/50 hover:text-gold-600 transition-colors">Buy Property</a></li>
              <li><a href="https://ravmoyaanrealty.com/sell-property.php" className="block py-2 text-sm text-white/50 hover:text-gold-600 transition-colors">Sell Property</a></li>
              <li><a href="https://ravmoyaanrealty.com/rent-property.php" className="block py-2 text-sm text-white/50 hover:text-gold-600 transition-colors">Rent Property</a></li>
            </ul>
          </li>
          <li><a href="https://ravmoyaanrealty.com/services.php" className="text-white/80 text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors">Services</a></li>
          <li><a href="https://ravmoyaanrealty.com/gallery.php" className="text-white/80 text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors">Gallery</a></li>
          <li><a href="#" className="text-white/80 text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors">Blog</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
