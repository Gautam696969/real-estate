import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

function About() {
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
                About Us
              </div>
              <h2 className="text-[2.5rem] font-bold text-white capitalize">Welcome to Ravmoyaan Realty</h2>
              <p className="text-white/40 text-base mt-3 max-w-3xl mx-auto">
                We are a trusted real estate agency in Chicago, dedicated to helping you find the perfect property. With years of experience and a passion for excellence, we deliver personalized service for buying, selling, and renting properties.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="bg-dark-200/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/5 transition-all duration-300 hover:border-gold-600/30">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">About Ravmoyaan Realty Associates</h3>
                  <p className="text-white/60 leading-relaxed mb-4">
                    At Ravmoyaan Realty Associates, we understand that buying or selling a property is one of the most significant decisions in your life. Our team of experienced professionals is committed to making this process smooth, transparent, and successful.
                  </p>
                  <p className="text-white/60 leading-relaxed">
                    We specialize in residential and commercial properties across Illinois, with a focus on delivering exceptional customer service, market expertise, and innovative solutions tailored to your unique needs.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-dark-200/80 backdrop-blur-sm rounded-2xl p-6 border border-white/5 text-center transition-all duration-300 hover:border-gold-600/30">
                    <div className="text-3xl font-bold text-gold-600 mb-2">200+</div>
                    <div className="text-white/60 text-sm">Properties Sold</div>
                  </div>
                  <div className="bg-dark-200/80 backdrop-blur-sm rounded-2xl p-6 border border-white/5 text-center transition-all duration-300 hover:border-gold-600/30">
                    <div className="text-3xl font-bold text-gold-600 mb-2">50+</div>
                    <div className="text-white/60 text-sm">Happy Clients</div>
                  </div>
                  <div className="bg-dark-200/80 backdrop-blur-sm rounded-2xl p-6 border border-white/5 text-center transition-all duration-300 hover:border-gold-600/30">
                    <div className="text-3xl font-bold text-gold-600 mb-2">15+</div>
                    <div className="text-white/60 text-sm">Years Experience</div>
                  </div>
                  <div className="bg-dark-200/80 backdrop-blur-sm rounded-2xl p-6 border border-white/5 text-center transition-all duration-300 hover:border-gold-600/30">
                    <div className="text-3xl font-bold text-gold-600 mb-2">24/7</div>
                    <div className="text-white/60 text-sm">Support</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="https://ravmoyaanrealty.com/images/rvm/fi7.png" 
                  alt="About Ravmoyaan Realty" 
                  className="w-full h-[500px] object-cover rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-dark-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="text-center mb-14">
              <div className="inline-block px-4 py-1.5 bg-gold-600/10 border border-gold-600/20 rounded-full text-gold-600 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-sm">
                Our Mission
              </div>
              <h2 className="text-[2.5rem] font-bold text-white capitalize">What We Do</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-dark-300/80 backdrop-blur-sm rounded-2xl p-8 border border-white/5 transition-all duration-500 hover:border-gold-600/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-600/20 flex items-center justify-center mb-6 mx-auto">
                  <i className="fa-solid fa-house text-2xl text-gold-600"></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Buy Property</h4>
                <p className="text-white/50 leading-relaxed">Find your dream home with our extensive listings and expert guidance through every step of the buying process.</p>
              </div>
              <div className="bg-dark-300/80 backdrop-blur-sm rounded-2xl p-8 border border-white/5 transition-all duration-500 hover:border-gold-600/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-600/20 flex items-center justify-center mb-6 mx-auto">
                  <i className="fa-solid fa-hand-holding-dollar text-2xl text-gold-600"></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Sell Property</h4>
                <p className="text-white/50 leading-relaxed">Get the best value for your property with our marketing strategies, negotiation expertise, and extensive network.</p>
              </div>
              <div className="bg-dark-300/80 backdrop-blur-sm rounded-2xl p-8 border border-white/5 transition-all duration-500 hover:border-gold-600/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-600/20 flex items-center justify-center mb-6 mx-auto">
                  <i className="fa-solid fa-key text-2xl text-gold-600"></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Rent Property</h4>
                <p className="text-white/50 leading-relaxed">Discover the perfect rental property that fits your lifestyle and budget with our curated selection of homes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-dark-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="text-center mb-14">
              <div className="inline-block px-4 py-1.5 bg-gold-600/10 border border-gold-600/20 rounded-full text-gold-600 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-sm">
                Contact Us
              </div>
              <h2 className="text-[2.5rem] font-bold text-white capitalize">Get In Touch</h2>
              <p className="text-white/40 text-base mt-3 max-w-2xl mx-auto">Have a question or ready to find your dream property? Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="bg-dark-200/80 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all duration-300 hover:border-gold-600/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-600/20 flex items-center justify-center flex-shrink-0">
                      <i className="fa fa-map-marker text-gold-600 text-lg"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Office Location</h4>
                      <p className="text-white/50 text-sm leading-relaxed">Chicago Illinois, USA<br />Ravmoyaan Realty Associates</p>
                    </div>
                  </div>
                </div>
                <div className="bg-dark-200/80 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all duration-300 hover:border-gold-600/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-600/20 flex items-center justify-center flex-shrink-0">
                      <i className="fa fa-phone text-gold-600 text-lg"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Phone Number</h4>
                      <p className="text-white/50 text-sm leading-relaxed">(224) 772 3760</p>
                    </div>
                  </div>
                </div>
                <div className="bg-dark-200/80 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all duration-300 hover:border-gold-600/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-600/20 flex items-center justify-center flex-shrink-0">
                      <i className="fa fa-envelope text-gold-600 text-lg"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Email Address</h4>
                      <p className="text-white/50 text-sm leading-relaxed">sourav.mukherjee@ravmoyaanrealty.com</p>
                    </div>
                  </div>
                </div>
                <div className="bg-dark-200/80 backdrop-blur-sm rounded-2xl p-6 border border-white/5 transition-all duration-300 hover:border-gold-600/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-600/20 flex items-center justify-center flex-shrink-0">
                      <i className="fa fa-clock text-gold-600 text-lg"></i>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-3">Business Hours</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                          <span className="text-white/70 text-sm">Monday - Friday</span>
                          <span className="text-gold-600 text-sm font-semibold">9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-white/5">
                          <span className="text-white/70 text-sm">Saturday</span>
                          <span className="text-gold-600 text-sm font-semibold">10:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-white/70 text-sm">Sunday</span>
                          <span className="text-white/40 text-sm font-semibold">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dark-200/80 backdrop-blur-sm rounded-2xl p-8 border border-white/5 transition-all duration-500 hover:border-gold-600/30">
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/60 text-sm font-medium mb-2">First Name *</label>
                      <input type="text" placeholder="Enter your first name" required className="w-full px-4 py-3 bg-dark-500/60 border border-white/10 rounded-xl text-white text-sm outline-none transition-all duration-300 focus:border-gold-600/50 focus:ring-1 focus:ring-gold-600/20" />
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm font-medium mb-2">Last Name *</label>
                      <input type="text" placeholder="Enter your last name" required className="w-full px-4 py-3 bg-dark-500/60 border border-white/10 rounded-xl text-white text-sm outline-none transition-all duration-300 focus:border-gold-600/50 focus:ring-1 focus:ring-gold-600/20" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm font-medium mb-2">Email Address *</label>
                    <input type="email" placeholder="Enter your email address" required className="w-full px-4 py-3 bg-dark-500/60 border border-white/10 rounded-xl text-white text-sm outline-none transition-all duration-300 focus:border-gold-600/50 focus:ring-1 focus:ring-gold-600/20" />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm font-medium mb-2">Phone Number *</label>
                    <input type="tel" placeholder="Enter your phone number" required className="w-full px-4 py-3 bg-dark-500/60 border border-white/10 rounded-xl text-white text-sm outline-none transition-all duration-300 focus:border-gold-600/50 focus:ring-1 focus:ring-gold-600/20" />
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm font-medium mb-2">Property Type</label>
                    <select required className="w-full px-4 py-3 bg-dark-500/60 border border-white/10 rounded-xl text-white/60 text-sm outline-none transition-all duration-300 focus:border-gold-600/50 focus:ring-1 focus:ring-gold-600/20 appearance-none cursor-pointer">
                      <option>Select Property Type</option>
                      <option>House</option>
                      <option>Apartment</option>
                      <option>Commercial</option>
                      <option>Villa</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/60 text-sm font-medium mb-2">Message</label>
                    <textarea rows={4} placeholder="Tell us about your requirements..." className="w-full px-4 py-3 bg-dark-500/60 border border-white/10 rounded-xl text-white text-sm outline-none transition-all duration-300 focus:border-gold-600/50 focus:ring-1 focus:ring-gold-600/20 resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-gold-600 to-gold-700 text-dark-500 font-semibold rounded-xl transition-all duration-300 hover:from-gold-500 hover:to-gold-600 hover:shadow-[0_8px_25px_rgba(255,179,0,0.3)] uppercase tracking-wider text-sm">
                    Send Message
                  </button>
                </form>
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

export default About;
