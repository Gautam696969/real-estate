const Footer = () => {
  return (
    <footer className="relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
      <div className="bg-dark-200 py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <div>
              <a href="#" className="inline-block mb-4 sm:mb-6">
                <img src="https://ravmoyaanrealty.com/images/myedit/main-logo-yellow-%20text.png" alt="Ravmoyaan Realty" className="h-[40px] sm:h-[50px] w-auto object-contain" />
              </a>
              <p className="text-white/50 text-xs sm:text-base leading-relaxed mb-4 sm:mb-6">
                We're your trusted partner for help and support, 24x7.
              </p>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-2 sm:gap-3">
                  <i className="fa fa-map-marker text-gold-600 mt-0.5 sm:mt-1 text-xs sm:text-base"></i>
                  <span className="text-white/50 text-xs sm:text-base">Chicago Illinois, USA</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <i className="fa fa-phone text-gold-600 mt-0.5 sm:mt-1 text-xs sm:text-base"></i>
                  <span className="text-white/50 text-xs sm:text-base">(224) 772 3760</span>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <i className="fa fa-envelope text-gold-600 mt-0.5 sm:mt-1 text-xs sm:text-base"></i>
                  <span className="text-white/50 text-xs sm:text-base">
                    sourav.mukherjee@ravmoyaan
                    <br />
                    realty.com
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block px-3 py-1.5 bg-gold-600/10 border border-gold-600/20 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-white">Navigation</h3>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <ul className="space-y-2 sm:space-y-3">
                  <li><a href="https://ravmoyaanrealty.com/index.php" className="text-white/50 text-xs sm:text-base transition-all duration-300 hover:text-gold-600 hover:pl-1">Home</a></li>
                  <li><a href="https://ravmoyaanrealty.com/about-us.php" className="text-white/50 text-xs sm:text-base transition-all duration-300 hover:text-gold-600 hover:pl-1">About</a></li>
                  <li><a href="https://ravmoyaanrealty.com/services.php" className="text-white/50 text-xs sm:text-base transition-all duration-300 hover:text-gold-600 hover:pl-1">Services</a></li>
                  <li><a href="https://ravmoyaanrealty.com/gallery.php" className="text-white/50 text-xs sm:text-base transition-all duration-300 hover:text-gold-600 hover:pl-1">Gallery</a></li>
                  <li><a href="https://ravmoyaanrealty.com/blog.php" className="text-white/50 text-xs sm:text-base transition-all duration-300 hover:text-gold-600 hover:pl-1">Blog</a></li>
                </ul>
                <ul className="space-y-2 sm:space-y-3">
                  <li><a href="https://ravmoyaanrealty.com/faq.php" className="text-white/50 text-xs sm:text-base transition-all duration-300 hover:text-gold-600 hover:pl-1">FAQ</a></li>
                  <li><a href="https://ravmoyaanrealty.com/buy-property.php" className="text-white/50 text-xs sm:text-base transition-all duration-300 hover:text-gold-600 hover:pl-1">Property</a></li>
                  <li><a href="https://ravmoyaanrealty.com/login-register.php" className="text-white/50 text-xs sm:text-base transition-all duration-300 hover:text-gold-600 hover:pl-1">Login</a></li>
                  <li><a href="https://ravmoyaanrealty.com/login-register.php" className="text-white/50 text-xs sm:text-base transition-all duration-300 hover:text-gold-600 hover:pl-1">Register</a></li>
                  <li><a href="https://ravmoyaanrealty.com/rent-property.php" className="text-white/50 text-xs sm:text-base transition-all duration-300 hover:text-gold-600 hover:pl-1">Rental</a></li>
                </ul>
              </div>
            </div>

            <div>
              <div className="inline-block px-3 py-1.5 bg-gold-600/10 border border-gold-600/20 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-white">Scan for Contact</h3>
              </div>
              <a href="https://wa.me/12247723760" target="_blank" className="inline-flex items-center gap-3 sm:gap-4 transition-all duration-300">
                <img src="https://ravmoyaanrealty.com/images/myedit/qr.jpg" alt="WhatsApp QR Code" className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] rounded-xl object-contain" />
                <div>
                  <h5 className="text-white text-xs sm:text-sm font-semibold mb-0.5 sm:mb-1">Chat with us</h5>
                  <p className="text-gold-600 text-[10px] sm:text-xs font-medium">on WhatsApp</p>
                </div>
              </a>
            </div>

            <div>
              <div className="inline-block px-3 py-1.5 bg-gold-600/10 border border-gold-600/20 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-white">Newsletter</h3>
              </div>
              <p className="text-white/50 text-xs sm:text-base leading-relaxed mb-4 sm:mb-5">Subscribe to receive news and latest updates.</p>
              <form className="space-y-2 sm:space-y-3">
                <input type="email" placeholder="Enter Your Email" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-300 border border-white/10 text-white text-xs sm:text-base rounded-xl outline-none transition-all duration-300 focus:border-gold-600 placeholder:text-white/30" />
                <button type="submit" className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-gold-600 to-gold-700 text-dark-500 text-xs sm:text-base font-semibold rounded-xl transition-all duration-300 hover:from-gold-500 hover:to-gold-600 hover:shadow-[0_8px_25px_rgba(255,179,0,0.3)]">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-4 sm:py-5 bg-dark-500">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-5 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-white/40 text-xs sm:text-sm">2026 &copy; Copyright - All Rights Reserved.</p>
          <div className="flex gap-2 sm:gap-3">
            <a href="https://www.facebook.com/profile.php?id=61585251009349" target="_blank" className="w-8 h-8 sm:w-9 sm:h-9 bg-dark-200 text-white/50 rounded-lg sm:rounded-xl flex items-center justify-center text-xs sm:text-sm transition-all duration-300 hover:bg-gold-600 hover:text-dark-500 hover:-translate-y-1"><i className="fab fa-facebook"></i></a>
            <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 bg-dark-200 text-white/50 rounded-lg sm:rounded-xl flex items-center justify-center text-xs sm:text-sm transition-all duration-300 hover:bg-gold-600 hover:text-dark-500 hover:-translate-y-1"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/ravmoyaan/" target="_blank" className="w-8 h-8 sm:w-9 sm:h-9 bg-dark-200 text-white/50 rounded-lg sm:rounded-xl flex items-center justify-center text-xs sm:text-sm transition-all duration-300 hover:bg-gold-600 hover:text-dark-500 hover:-translate-y-1"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/@RavMoYaanRealtyAssociates" target="_blank" className="w-8 h-8 sm:w-9 sm:h-9 bg-dark-200 text-white/50 rounded-lg sm:rounded-xl flex items-center justify-center text-xs sm:text-sm transition-all duration-300 hover:bg-gold-600 hover:text-dark-500 hover:-translate-y-1"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
