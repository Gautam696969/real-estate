import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [propertyOpen, setPropertyOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const navigate = useNavigate();

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

  const handleHomeClick = () => {
    navigate('/');
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full bg-dark-400/40 backdrop-blur-xl z-[1000] border-b border-white/5 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex justify-between items-center h-[70px] sm:h-[80px]">
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="#" onClick={(e) => { e.preventDefault(); handleHomeClick(); }}>
            <img src="https://ravmoyaanrealty.com/images/myedit/main-logo-yellow.png" alt="Ravmoyaan Realty" className="h-[40px] sm:h-[50px] w-auto" />
          </a>
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-4 sm:gap-6">
              <li><Link to="/" className="text-white/80 text-xs sm:text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-white/80 text-xs sm:text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors duration-300">About</Link></li>
              <li
                className="relative"
                onMouseEnter={() => setPropertyOpen(true)}
                onMouseLeave={() => setPropertyOpen(false)}
              >
                <Link to="/buy-property" className="text-white/80 text-xs sm:text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors duration-300 flex items-center">
                  Property
                  <ChevronDown size={12} className="ml-1" />
                </Link>
                <ul className={`absolute top-full left-0 bg-dark-200/95 backdrop-blur-xl min-w-[200px] py-2.5 transition-all duration-300 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/5 z-50 ${propertyOpen ? 'opacity-100 visible translate-y-2' : 'opacity-0 invisible translate-y-0'}`}>
                  <li><Link to="/buy-property" className="block px-5 py-2.5 text-sm text-white/60 capitalize hover:text-gold-600 hover:bg-white/5 transition-all rounded-lg mx-1">Buy Property</Link></li>
                  <li><Link to="/sell-property" className="block px-5 py-2.5 text-sm text-white/60 capitalize hover:text-gold-600 hover:bg-white/5 transition-all rounded-lg mx-1">Sell Property</Link></li>
                  <li><a href="https://ravmoyaanrealty.com/rent-property.php" className="block px-5 py-2.5 text-sm text-white/60 capitalize hover:text-gold-600 hover:bg-white/5 transition-all rounded-lg mx-1">Rent Property</a></li>
                </ul>
              </li>
              <li><Link to="/services" className="text-white/80 text-xs sm:text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors duration-300">Services</Link></li>
              <li><Link to="/gallery" className="text-white/80 text-xs sm:text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors duration-300">Gallery</Link></li>
              <li><a href="https://ravmoyaanrealty.com/blog.php" className="text-white/80 text-xs sm:text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors duration-300">Blog</a></li>
              <li><Link to="/contact" className="text-white/80 text-xs sm:text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors duration-300">Contact</Link></li>
            </ul>
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-3 sm:gap-4">
          <a href="https://ravmoyaanrealty.com/login-register.php" className="text-white/60 text-xs sm:text-sm font-medium hover:text-gold-600 transition-colors duration-300">Sign In</a>
          <div className="relative">
            <div className="flex items-center gap-1.5 text-gold-600 text-xs sm:text-sm font-semibold cursor-pointer" onClick={() => setLangOpen(!langOpen)}>
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
          <div className="flex items-center gap-2 text-gold-600 font-semibold text-xs sm:text-sm">
            <div className="w-[24px] sm:w-[28px] h-3 sm:h-4 bg-white border-2 border-gold-600 rounded-full relative overflow-hidden animate-[blink_5s_infinite]">
              <div className="w-[8px] sm:w-[10px] h-[8px] sm:h-[10px] bg-gradient-to-br from-[#5a3b00] to-[#2e1b00] rounded-full absolute top-[2px] left-1.5 sm:left-2 animate-[lookAround_6s_infinite]">
                <span className="w-[3px] sm:w-[4px] h-[3px] sm:h-[4px] bg-black rounded-full absolute top-[3px] left-[3px]"></span>
              </div>
            </div>
            <span>602</span>
          </div>
          <a href="https://ravmoyaanrealty.com/renter-application/" className="hidden xl:inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-gold-600 to-gold-700 text-dark-500 text-xs sm:text-sm font-medium uppercase tracking-wide rounded-xl transition-all duration-300 hover:from-gold-500 hover:to-gold-600 hover:shadow-[0_8px_25px_rgba(255,179,0,0.3)]">
            Rental Form <i className="fas fa-laptop-house ml-1 sm:ml-2"></i>
          </a>
        </div>

        <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`lg:hidden fixed top-[70px] sm:top-[80px] left-0 w-full bg-dark-500/95 backdrop-blur-xl p-4 sm:p-5 transition-all duration-300 z-[999] border-b border-white/5 ${mobileOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-[120%] opacity-0 invisible'}`}>
        <ul className="flex flex-col items-start gap-3 sm:gap-4">
          <li><Link to="/" className="text-white/80 text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors" onClick={() => setMobileOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="text-white/80 text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors" onClick={() => setMobileOpen(false)}>About</Link></li>
          <li className="w-full">
            <Link to="/buy-property" className="text-white/80 text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors" onClick={() => setMobileOpen(false)}>Property</Link>
            <ul className="ml-4 mt-2 space-y-2">
              <li><Link to="/buy-property" className="block py-2 text-sm text-white/50 hover:text-gold-600 transition-colors" onClick={() => setMobileOpen(false)}>Buy Property</Link></li>
              <li><Link to="/sell-property" className="block py-2 text-sm text-white/50 hover:text-gold-600 transition-colors" onClick={() => setMobileOpen(false)}>Sell Property</Link></li>
              <li><a href="https://ravmoyaanrealty.com/rent-property.php" className="block py-2 text-sm text-white/50 hover:text-gold-600 transition-colors" onClick={() => setMobileOpen(false)}>Rent Property</a></li>
            </ul>
          </li>
          <li><Link to="/services" className="text-white/80 text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors" onClick={() => setMobileOpen(false)}>Services</Link></li>
          <li><Link to="/gallery" className="text-white/80 text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors">Gallery</Link></li>
          <li><a href="https://ravmoyaanrealty.com/blog.php" className="text-white/80 text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors">Blog</a></li>
          <li><Link to="/contact" className="text-white/80 text-sm font-medium uppercase tracking-wide hover:text-gold-600 transition-colors" onClick={() => setMobileOpen(false)}>Contact</Link></li>
          <li className="pt-2 border-t border-white/5 mt-2">
            <a href="https://ravmoyaanrealty.com/login-register.php" className="text-gold-600 text-sm font-medium uppercase tracking-wide hover:text-gold-500 transition-colors">Sign In / Register</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
