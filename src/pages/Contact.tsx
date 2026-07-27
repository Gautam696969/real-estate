import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

function ContactPage() {
  useScrollAnimation();

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <section className="relative py-24 pt-32 bg-dark-100 overflow-hidden">
          <img src="https://ravmoyaanrealty.com/images/bg/bg-testimonials-2.jpg" alt="Contact Background" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-100/60"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto px-5 relative z-10">
            <div className="text-center mb-14">
              <div className="inline-block px-4 py-1.5 bg-gold-600/10 border border-gold-600/20 rounded-full text-gold-600 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-sm">
                Contact Us
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white capitalize">CONTACT US</h1>
              <div className="flex items-center justify-center gap-2 text-white/50 text-sm mt-2">
                <a href="/" className="hover:text-gold-600 transition-colors text-white/70">Home</a>
                <span>/</span>
                <span className="text-gold-600 ">Contact Us</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-dark-100/80 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto px-5 rounded-2xl border border-white/10 bg-dark-100/90">
            <h1 className="text-left py-5 text-2xl font-bold text-white">OUR LOCATION</h1>

            <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps?q=Chicago,Illinois,USA&output=embed"
                className="w-full h-[350px] md:h-[400px] lg:h-[450px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chicago Location Map"
              />
            </div>
          </div>
        </section>
        <section className="py-20 bg-dark-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Get In Touch</h3>
                <form className="space-y-5">
                  <div>
                    <label className="block text-white/60 text-sm font-medium mb-2">First Name *</label>
                    <input type="text" required placeholder="Enter your first name" className="w-full px-4 py-3 bg-dark-500/60 border border-white/10 rounded-xl text-white text-sm outline-none transition-all duration-300 focus:border-gold-600/50 focus:ring-1 focus:ring-gold-600/20" />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm font-medium mb-2">Last Name *</label>
                    <input type="text" required placeholder="Enter your last name" className="w-full px-4 py-3 bg-dark-500/60 border border-white/10 rounded-xl text-white text-sm outline-none transition-all duration-300 focus:border-gold-600/50 focus:ring-1 focus:ring-gold-600/20" />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm font-medium mb-2">Email *</label>
                    <input type="email" required placeholder="Enter your email" className="w-full px-4 py-3 bg-dark-500/60 border border-white/10 rounded-xl text-white text-sm outline-none transition-all duration-300 focus:border-gold-600/50 focus:ring-1 focus:ring-gold-600/20" />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm font-medium mb-2">Message *</label>
                    <textarea rows={5} required placeholder="Tell us about your requirements..." className="w-full px-4 py-3 bg-dark-500/60 border border-white/10 rounded-xl text-white text-sm outline-none transition-all duration-300 focus:border-gold-600/50 focus:ring-1 focus:ring-gold-600/20 resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-gold-600 to-gold-700 text-dark-500 font-semibold rounded-xl transition-all duration-300 hover:from-gold-500 hover:to-gold-600 hover:shadow-[0_8px_25px_rgba(255,179,0,0.3)] uppercase tracking-wider text-sm">
                    Submit
                  </button>
                </form>
              </div>

              <div className="space-y-6">
                <div
                  className="relative overflow-hidden w-full min-h-[525px]"
                  style={{
                    backgroundImage:
                      "url('https://ravmoyaanrealty.com/images/bg/bg-testimonials.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="absolute inset-0 bg-[#243B6B]/85"></div>

                  <div className="relative z-10 p-8">
                    <h3 className="text-2xl font-bold text-white mb-5 uppercase">
                      Contact Details
                    </h3>

                    <div className="w-12 h-1 bg-white mb-8"></div>

                    <p className="text-white text-base leading-relaxed mb-10 max-w-md">
                      Please find below contact details and contact us today!
                    </p>

                    <ul className="space-y-6">
                      <li className="flex items-center gap-5">
                        <i className="fa fa-map-marker text-white text-2xl"></i>
                        <p className="text-white/80 text-base">
                          Chicago Illinois, USA
                        </p>
                      </li>

                      <li className="flex items-center gap-5">
                        <i className="fa fa-phone text-white text-2xl"></i>
                        <p className="text-white/80 text-base">
                          (224) 772 3760
                        </p>
                      </li>

                      <li className="flex items-center gap-5">
                        <i className="fa fa-envelope text-white text-2xl"></i>
                        <p className="text-white/80 text-base break-all">
                          sourav.mukherjee@ravmoyaanrealty.com
                        </p>
                      </li>

                      <li className="flex items-center gap-5">
                        <i className="fa fa-envelope text-white text-2xl"></i>
                        <p className="text-white/80 text-base">
                          vish@ravmoyaanrealty.com
                        </p>
                      </li>

                      <li className="flex items-center gap-5">
                        <i className="fa fa-envelope text-white text-2xl"></i>
                        <p className="text-white/80 text-base">
                          annie@ravmoyaanrealty.com
                        </p>
                      </li>

                      <li className="flex items-center gap-5">
                        <i className="fa fa-clock text-white text-2xl"></i>
                        <p className="text-white/80 text-base">
                          8:00 a.m - 9:00 p.m
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                
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

export default ContactPage;