import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

function About() {
  useScrollAnimation();

  const teamMembers = [
    {
      id: 1,
      name: 'Sourav Mukherjee',
      role: 'Realtor',
      image: 'https://ravmoyaanrealty.com/images/team/sir.png',
      socials: { facebook: '#', twitter: '#', instagram: '#' },
    },
    {
      id: 2,
      name: 'Ankita Ghosh',
      role: 'Team Member',
      image: 'https://ravmoyaanrealty.com/images/team/ankita.png',
      socials: { facebook: '#', twitter: '#', instagram: '#' },
    },
    {
      id: 3,
      name: 'Vishwendra Singh Yadav',
      role: 'Team Member',
      image: 'https://ravmoyaanrealty.com/images/team/vish.png',
      socials: { facebook: '#', twitter: '#', instagram: '#' },
    },
    {
      id: 4,
      name: 'Tapas Nayak',
      role: 'Team Leader',
      image: 'https://ravmoyaanrealty.com/images/team/tapas.png',
      socials: { facebook: '#', twitter: '#', instagram: '#' },
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Buyer',
      location: 'Chicago, USA',
      image: 'https://ravmoyaanrealty.com/images/testimonials/ts-1.jpg',
      text: 'Rav-Mo-Yaan Realty Associates made the entire buying process feel simple. They were fast, honest, and extremely sharp during negotiation. We got the home we wanted and avoided costly mistakes during inspection. Communication was excellent from day one to closing.',
    },
    {
      id: 2,
      name: 'Rental / Landlord',
      location: 'Chicago, USA',
      image: 'https://ravmoyaanrealty.com/images/testimonials/ts-2.jpg',
      text: 'We were impressed by the pricing strategy and marketing plan. Our home received strong interest quickly, and the negotiations were handled professionally. The team stayed on top of every detail and kept us informed throughout. Smooth sale, great result.',
    },
    {
      id: 3,
      name: 'Buyer',
      location: 'Chicago, USA',
      image: 'https://ravmoyaanrealty.com/images/testimonials/ts-3.jpg',
      text: 'I needed a qualified tenant quickly, and Rav-Mo-Yaan delivered. They priced the rental correctly, scheduled showings efficiently, and helped us screen applicants. We had a great tenant in place without the stress and back-and-forth.',
    },
    {
      id: 4,
      name: 'Ichiro Tasaka',
      location: 'Houston',
      image: 'https://ravmoyaanrealty.com/images/testimonials/ts-6.jpg',
      text: 'We were impressed by the pricing strategy and marketing plan. Our home received strong interest quickly, and the negotiations were handled professionally. The team stayed on top of every detail and kept us informed throughout. Smooth sale, great result.',
    },
  ];

  const partners = [
    'https://ravmoyaanrealty.com/images/partners/11.jpg',
    'https://ravmoyaanrealty.com/images/partners/12.jpg',
    'https://ravmoyaanrealty.com/images/partners/13.jpg',
    'https://ravmoyaanrealty.com/images/partners/14.jpg',
    'https://ravmoyaanrealty.com/images/partners/15.jpg',
    'https://ravmoyaanrealty.com/images/partners/16.jpg',
    'https://ravmoyaanrealty.com/images/partners/17.jpg',
    'https://ravmoyaanrealty.com/images/partners/11.jpg',
    'https://ravmoyaanrealty.com/images/partners/12.jpg',
    'https://ravmoyaanrealty.com/images/partners/13.jpg',
  ];

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <section className="relative py-24 pt-32 overflow-hidden">
          <img src="https://ravmoyaanrealty.com/images/bg/bg-testimonials-2.jpg" alt="Testimonials Background" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-100/50"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto px-5 relative z-10">
            <div className="text-center mb-14">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white capitalize">About Our Company</h1>
              <div className="flex items-center justify-center gap-2 text-white/50 text-sm mt-4">
                <a href="/" className="hover:text-gold-600 transition-colors text-white/80">Home</a>
                <span>/</span>
                <span className="text-white">About Us</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-dark-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
              <div className="space-y-6">
                <div>
                  <div className="inline-block px-4 py-1.5 bg-gold-600/10 border border-gold-600/20 rounded-full text-gold-600 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-sm">
                    About Ravmoyaan
                  </div>
                  <h2 className="text-3xl font-bold text-white mt-4">Who We Are</h2>
                </div>
                <p className="text-white/60 leading-relaxed">
                  Rav-Mo-Yaan Realty Associates is a client-first real estate company focused on helping buyers, sellers, and investors make confident property decisions. We combine market knowledge, clear communication, and strong negotiation to deliver smooth transactions from start to finish.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Whether you're purchasing your first home, selling a property, or building an investment portfolio, we guide you with honest advice, data-driven pricing, and step-by-step support. Our team coordinates showings, paperwork, inspections, financing timelines, and closing details—so you stay informed and in control throughout the process.
                </p>
                <p className="text-white/60 leading-relaxed">
                  We believe real estate success comes from transparency, speed, and long-term relationships. Our goal is simple: protect your interests, maximize value, and make your real estate journey stress-free.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-gold-600 font-semibold text-sm transition-all duration-300 hover:gap-3">
                  Read More <i className="fa fa-arrow-right"></i>
                </a>
                <img src="https://ravmoyaanrealty.com/images/signature.png" alt="Signature" className="w-36 h-auto mt-2 bg-white " />
              </div>
              <div className="relative">
                <img src="https://ravmoyaanrealty.com/images/bg/bg-video1.jpg" alt="About Ravmoyaan Realty" className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]" />
                <a href="#" target="_blank" className="absolute inset-0 flex items-center justify-center rounded-2xl">
                  <div className="relative w-16 h-16 rounded-full bg-gold-600/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,179,0,0.4)] transition-all duration-300 pulse-ring rotate-ring">
                    <i className="fa fa-play text-dark-500 text-lg ml-1"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-dark-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="text-center mb-14">
              <div className="inline-block px-4 py-1.5 bg-gold-600/10 border border-gold-600/20 rounded-full text-gold-600 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-sm">
                Why Choose Us
              </div>
              <h2 className="text-[2.5rem] font-bold text-white capitalize">We Provide Full Service At Every Step</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-dark-300/80 backdrop-blur-sm rounded-2xl p-8 border border-white/5 transition-all duration-500 hover:border-gold-600/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-600/20 flex items-center justify-center mb-6 mx-auto gap-2">
                  <i className="fa-solid fa-chart-line text-2xl text-gold-600"></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Strategic Market Expertise</h4>
                <p className="text-white/50 leading-relaxed">Data-driven pricing and in-depth market analysis, investor-focused insights and growth opportunities, smart positioning for maximum value.</p>
              </div>
              <div className="bg-dark-300/80 backdrop-blur-sm rounded-2xl p-8 border border-white/5 transition-all duration-500 hover:border-gold-600/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-600/20 flex items-center justify-center mb-6 mx-auto">
                  <i className="fa-solid fa-comments text-2xl text-gold-600"></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Clear Communication & Negotiation</h4>
                <p className="text-white/50 leading-relaxed">Fast, transparent communication at every step, strong negotiation to protect your interests, clear guidance for confident decision-making.</p>
              </div>
              <div className="bg-dark-300/80 backdrop-blur-sm rounded-2xl p-8 border border-white/5 transition-all duration-500 hover:border-gold-600/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-600/20 to-gold-700/10 border border-gold-600/20 flex items-center justify-center mb-6 mx-auto">
                  <i className="fa-solid fa-handshake text-2xl text-gold-600"></i>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Complete Transaction Support</h4>
                <p className="text-white/50 leading-relaxed">End-to-end transaction coordination, detail-oriented process management, smooth and secure deal closure.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center flex flex-col items-center gap-3">
                <div className="flex items-center justify-center gap-3">
                  <i className="fa fa-home text-5xl text-gold-600"></i>
                  <div className="text-left">
                    <div className="text-4xl sm:text-5xl font-bold text-gold-600">300</div>
                    <div className="text-white/50 text-sm uppercase tracking-wider">Sold Houses</div>
                  </div>
                </div>
              </div>
              <div className="text-center flex flex-col items-center gap-3">
                <div className="flex items-center justify-center gap-3">
                  <i className="fa fa-list text-5xl text-gold-600"></i>
                  <div className="text-left">
                    <div className="text-4xl sm:text-5xl font-bold text-gold-600">400</div>
                    <div className="text-white/50 text-sm uppercase tracking-wider">Daily Listings</div>
                  </div>
                </div>
              </div>
              <div className="text-center flex flex-col items-center gap-3">
                <div className="flex items-center justify-center gap-3">
                  <i className="fa fa-users text-5xl text-gold-600"></i>
                  <div className="text-left">
                    <div className="text-4xl sm:text-5xl font-bold text-gold-600">250</div>
                    <div className="text-white/50 text-sm uppercase tracking-wider">Expert Agents</div>
                  </div>
                </div>
              </div>
              <div className="text-center flex flex-col items-center gap-3">
                <div className="flex items-center justify-center gap-3">
                  <i className="fa fa-trophy text-5xl text-gold-600"></i>
                  <div className="text-left">
                    <div className="text-4xl sm:text-5xl font-bold text-gold-600">200</div>
                    <div className="text-white/50 text-sm uppercase tracking-wider">Won Awards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-dark-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="text-center mb-14">
              <div className="inline-block px-4 py-1.5 bg-gold-600/10 border border-gold-600/20 rounded-full text-gold-600 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-sm">
                Our Team
              </div>
              <h2 className="text-[2.5rem] font-bold text-white capitalize">Meet Our Team</h2>
              <p className="text-white/40 text-base mt-3 max-w-2xl mx-auto">Dedicated professionals committed to your real estate success.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="aos-init opacity-0 translate-y-[30px] transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${(index + 1) * 0.15}s` }}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-dark-300 border border-white/5 group transition-all duration-500 hover:border-gold-600/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                    <div className="relative overflow-hidden">
                      <img src={member.image} alt={member.name} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-500/95 via-dark-500/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-gold-600 text-sm font-medium">{member.role}</p>
                      </div>
                      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <a href={member.socials.facebook} className="w-9 h-9 bg-dark-500/80 backdrop-blur-sm text-white rounded-xl flex items-center justify-center text-sm transition-all duration-300 hover:bg-gold-600 hover:text-dark-500" title="facebook"><i className="fab fa-facebook"></i></a>
                        <a href={member.socials.twitter} className="w-9 h-9 bg-dark-500/80 backdrop-blur-sm text-white rounded-xl flex items-center justify-center text-sm transition-all duration-300 hover:bg-gold-600 hover:text-dark-500" title="twitter"><i className="fab fa-twitter"></i></a>
                        <a href={member.socials.instagram} className="w-9 h-9 bg-dark-500/80 backdrop-blur-sm text-white rounded-xl flex items-center justify-center text-sm transition-all duration-300 hover:bg-gold-600 hover:text-dark-500" title="instagram"><i className="fab fa-instagram"></i></a>
                      </div>
                    </div>
                    <div className="p-4 border-t border-white/5">
                      <a href="#" className="text-gold-600 text-sm font-semibold transition-all duration-300 hover:text-white hover:gap-2 inline-flex items-center gap-1">
                        View Profile <i className="fa fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden" style={{ backgroundImage: 'url(https://ravmoyaanrealty.com/images/bg/bg-counter2.jpg)', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-dark-500/85"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto px-5 relative z-10">
            <div className="text-center mb-14">
              <div className="inline-block px-4 py-1.5 bg-gold-600/10 border border-gold-600/20 rounded-full text-gold-600 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-sm">
                Clients Testimonials
              </div>
              <h2 className="text-[2.5rem] font-bold text-white capitalize">What Our Clients Say</h2>
              <p className="text-white text-base mt-3 max-w-2xl mx-auto">We collect reviews from our customers.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="aos-init opacity-0 translate-y-[30px] transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${(index + 1) * 0.15}s` }}
                >
                  <div className="bg-dark-200/90 backdrop-blur-sm rounded-2xl p-6 border border-gold-600/20 transition-all duration-500 hover:border-gold-600/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-5">
                      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                        <p className="text-gold-600 text-xs">{testimonial.location}</p>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed flex-1">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-dark-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="text-center mb-14">
              <div className="inline-block px-4 py-1.5 bg-gold-600/10 border border-gold-600/20 rounded-full text-gold-600 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-sm">
                Our Partners
              </div>
              <h2 className="text-[2.5rem] font-bold text-white capitalize">The Companies That Represent Us</h2>
            </div>

            <div className="relative overflow-hidden">
              <div className="flex animate-marquee">
                {partners.concat(partners).map((partner, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 backdrop-blur-sm rounded-lg flex items-center justify-center min-h-[100px] mx-10 hover:border-gold-600/30 transition-all duration-500"
                  >
                    <img src={partner} alt={`Partner ${index + 1}`} className="h-30 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
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