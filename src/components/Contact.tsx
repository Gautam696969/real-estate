import { useState } from 'react';

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <section className="py-20 pt-15 bg-dark-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-gold-600/10 border border-gold-600/20 rounded-full text-gold-600 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-sm">
            Contact Us
          </div>
          <h2 className="text-[2.5rem] font-bold text-white capitalize">Get In Touch</h2>
          <p className="text-white/40 text-base mt-3 max-w-2xl mx-auto">Have a question or ready to find your dream property? Fill out the form below and we'll get back to you within 24 hours.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <div className="bg-dark-200/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/5 transition-all duration-300 hover:border-gold-600/30">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-600/20 flex items-center justify-center flex-shrink-0">
                  <i className="fa fa-map-marker text-gold-600 text-base sm:text-lg"></i>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1">Office Location</h4>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed">Chicago Illinois, USA<br />Ravmoyaan Realty Associates</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-200/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/5 transition-all duration-300 hover:border-gold-600/30">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-600/20 flex items-center justify-center flex-shrink-0">
                  <i className="fa fa-phone text-gold-600 text-base sm:text-lg"></i>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1">Phone Number</h4>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed">(224) 772 3760</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-200/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/5 transition-all duration-300 hover:border-gold-600/30">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-600/20 flex items-center justify-center flex-shrink-0">
                  <i className="fa fa-envelope text-gold-600 text-base sm:text-lg"></i>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-1">Email Address</h4>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed">sourav.mukherjee@ravmoyaanrealty.com</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-200/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/5 transition-all duration-300 hover:border-gold-600/30">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-600/20 flex items-center justify-center flex-shrink-0">
                  <i className="fa fa-clock text-gold-600 text-base sm:text-lg"></i>
                </div>
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">Business Hours</h4>
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex justify-between items-center py-1.5 sm:py-2 border-b border-white/5">
                      <span className="text-white/70 text-xs sm:text-sm">Monday - Friday</span>
                      <span className="text-gold-600 text-xs sm:text-sm font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 sm:py-2 border-b border-white/5">
                      <span className="text-white/70 text-xs sm:text-sm">Saturday</span>
                      <span className="text-gold-600 text-xs sm:text-sm font-semibold">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-1.5 sm:py-2">
                      <span className="text-white/70 text-xs sm:text-sm">Sunday</span>
                      <span className="text-white/40 text-xs sm:text-sm font-semibold">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-200/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-white/5 transition-all duration-500 hover:border-gold-600/30">
            <form className="space-y-3 sm:space-y-4 md:space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
                <div>
                  <label className="block text-white/60 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">First Name *</label>
                  <input type="text" placeholder="Enter your first name" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-500/60 border border-white/10 rounded-xl text-white text-xs sm:text-sm outline-none transition-all duration-300 focus:border-gold-600/50 focus:ring-1 focus:ring-gold-600/20" />
                </div>
                <div>
                  <label className="block text-white/60 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Last Name *</label>
                  <input type="text" placeholder="Enter your last name" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-500/60 border border-white/10 rounded-xl text-white text-xs sm:text-sm outline-none transition-all duration-300 focus:border-gold-600/50 focus:ring-1 focus:ring-gold-600/20" />
                </div>
              </div>

              <div>
                <label className="block text-white/60 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Email Address *</label>
                  <input type="email" placeholder="Enter your email address" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-500/60 border border-white/10 rounded-xl text-white text-xs sm:text-sm outline-none transition-all duration-300 focus:border-gold-600/50 focus:ring-1 focus:ring-gold-600/20" />
              </div>

              <div>
                <label className="block text-white/60 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Phone Number</label>
                  <input type="tel" placeholder="Enter your phone number" required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-500/60 border border-white/10 rounded-xl text-white text-xs sm:text-sm outline-none transition-all duration-300 focus:border-gold-600/50 focus:ring-1 focus:ring-gold-600/20" />
              </div>

              <div>
                <label className="block text-white/60 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Property Type</label>
                  <select required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-500/60 border border-white/10 rounded-xl text-white/60 text-xs sm:text-sm outline-none transition-all duration-300 focus:border-gold-600/50 focus:ring-1 focus:ring-gold-600/20 appearance-none cursor-pointer">
                    <option>Select Property Type</option>
                    <option>House</option>
                    <option>Apartment</option>
                    <option>Commercial</option>
                    <option>Villa</option>
                  </select>
              </div>

              <div>
                <label className="block text-white/60 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Message *</label>
                <textarea rows={4} placeholder="Tell us about your requirements..." className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-500/60 border border-white/10 rounded-xl text-white text-xs sm:text-sm outline-none transition-all duration-300 focus:border-gold-600/50 focus:ring-1 focus:ring-gold-600/20 resize-none"></textarea>
              </div>

              <button type="submit" className="w-full py-3 sm:py-3.5 bg-gradient-to-r from-gold-600 to-gold-700 text-dark-500 font-semibold rounded-xl transition-all duration-300 hover:from-gold-500 hover:to-gold-600 hover:shadow-[0_8px_25px_rgba(255,179,0,0.3)] uppercase tracking-wider text-xs sm:text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="fixed top-4 right-4 z-[9999]">
          <div className="bg-dark-200/95 backdrop-blur-xl border border-gold-600/30 rounded-xl p-4 shadow-[0_10px_40px_rgba(0,0,0,0.4)] flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold-600/20 border border-gold-600/30 flex items-center justify-center flex-shrink-0">
              <i className="fa fa-check text-gold-600 text-lg"></i>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Message Sent!</h4>
              <p className="text-white/60 text-xs">We will get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;