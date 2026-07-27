import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { useState } from 'react';

function BuyProperty() {
  useScrollAnimation();
  const [activeSlide, setActiveSlide] = useState(0);

  const galleryImages = [
    'https://ravmoyaanrealty.com/images/single-property/s-1.jpg',
    'https://ravmoyaanrealty.com/images/single-property/s-2.jpg',
    'https://ravmoyaanrealty.com/images/single-property/s-3.jpg',
    'https://ravmoyaanrealty.com/images/single-property/s-4.jpg',
    'https://ravmoyaanrealty.com/images/single-property/s-5.jpg',
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  const goToSlide = (index: number) => setActiveSlide(index);

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <section className="breadcrumb-outer py-20 pt-32 relative min-h-[500px]">
          <img src="https://ravmoyaanrealty.com/images/bg/home-171.jpg" alt="Buy Property Background" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-200/10"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r "></div>
          <div className="max-w-[1200px] mx-auto px-5 relative z-10">
            <div className="detail-title">
              <div className="detail-title-inner">
                <div className="row grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="col-span-12 lg:col-span-7">
                    <div className="listing-rating flex items-center gap-1 mb-3">
                      <i className="fa fa-star text-gold-600"></i>
                      <i className="fa fa-star text-gold-600"></i>
                      <i className="fa fa-star text-gold-600"></i>
                      <i className="fa fa-star text-gold-600"></i>
                      <i className="fa fa-star-half text-gold-600"></i>
                    </div>
                    <h2 className="text-[2.5rem] font-bold text-white capitalize"><span>Buy Property</span></h2>
                    <div className="list-single-contacts mt-4">
                      <ul className="flex flex-wrap items-center gap-4 sm:gap-6">
                        <li className="text-white/60 text-sm"><i className="fa fa-phone mr-2 text-gold-600"></i><a href="tel:+12247723760" className="text-white/60 hover:text-gold-600 transition-colors">(224) 772 3760</a></li>
                        <li className="text-white/60 text-sm"><i className="fa fa-map-marker mr-2 text-gold-600"></i><a href="#" className="text-white/60 hover:text-gold-600 transition-colors">Chicago Illinois, USA</a></li>
                        <li className="text-white/60 text-sm the-last"><i className="fa fa-envelope mr-2 text-gold-600"></i><a href="#" className="text-white/60 hover:text-gold-600 transition-colors">sourav.mukherjee@ravmoyaanrealty.com</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-5">
                    <div className="list-single-details text-right">
                      <div className="list-single-rating w-full">
                        <div className="rating-score flex items-center justify-end gap-3">
                          <div className="pr-3 text-white/60"><strong className="text-white">Very Good</strong><br /><span className="text-white/40 text-sm">62 Reviews</span></div>
                          <span className="text-gold-600 text-2xl font-bold">4.5</span>
                        </div>
                      </div>
                      <div className="list-single-links w-full mt-4 flex flex-wrap justify-end gap-3">
                        <a href="#" className="nir-btn nir-btn1 px-4 py-2 bg-gold-600/10 border border-gold-600/20 text-gold-600 text-sm font-semibold rounded-lg">For Sale:&nbsp; $230,000</a>
                        <a href="#" className="nir-btn-black nir-btn1 px-4 py-2 bg-gold-600 text-dark-500 text-sm font-semibold rounded-lg">$1,200 / sq ft</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-us fh py-20 bg-dark-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="row grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="col-span-12 lg:col-span-6 who-1">
                <div>
                  <h2 className="text-left text-3xl font-bold text-white mb-4">Buy <span className="text-gold-600">Propery</span></h2>
                </div>
                <div className="pftext space-y-4">
                  <p className="text-white/60 leading-relaxed">Buying a property is a major decision—whether it's your first home or your next investment. At Rav-Mo-Yaan Realty Associates, we help you define your goals, narrow down the right neighborhoods, and identify properties that match your budget and lifestyle. We also handle strategy for offers, negotiations, inspections, appraisal timelines, and closing coordination.</p>
                  <p className="text-white/60 leading-relaxed">From property search to keys-in-hand, we keep you informed, protect your interests, and make the buying process simple and stress-free.</p>
                </div>
                <div className="box bg-2 mt-8 flex items-center gap-6">
                  <a href="#" className="text-center button button--moema button--text-thick button--text-upper button--size-s px-6 py-3 bg-gold-600 text-dark-500 text-sm font-semibold rounded-lg hover:bg-gold-500 transition-colors">read More</a>
                  <img src="https://ravmoyaanrealty.com/images/signature.png" className="ml-5 w-36 h-auto" alt="Signature" />
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 col-xs-12">
                <div className="wprt-image-video w50 relative">
                  <img alt="image" src="https://ravmoyaanrealty.com/images/bg/bg-video.jpg" className="w-full h-[400px] object-cover rounded-2xl" />
                  <a className="icon-wrap popup-video popup-youtube absolute inset-0 flex items-center justify-center rounded-2xl" href="https://www.youtube.com/watch?v=2xHQqYRcrx4" target="_blank">
                    <div className="w-16 h-16 rounded-full bg-gold-600/90 flex items-center justify-center shadow-lg">
                      <i className="fa fa-play text-dark-500 text-lg ml-1"></i>
                    </div>
                  </a>
                  <div className="iq-waves">
                    <div className="waves wave-1"></div>
                    <div className="waves wave-2"></div>
                    <div className="waves wave-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="single-proper blog details py-20 bg-dark-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="row grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-8 blog-pots">
                <div className="row">
                  <div className="col-span-12">
                    <section className="headings-2 p-0 mb-6">
                      <h5 className="text-xl font-bold text-white mb-4">Gallery</h5>
                    </section>
                    <div id="listingDetailsSlider" className="relative mb-6">
                      <div className="overflow-hidden rounded-2xl">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                          {galleryImages.map((img, index) => (
                            <div key={index} className="flex-shrink-0 w-full">
                              <img src={img} alt={`slider-listing-${index}`} className="w-full h-[400px] object-cover" />
                            </div>
                          ))}
                        </div>
                      </div>
                      <a className="carousel-control left absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark-500/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center z-10 hover:bg-gold-600 transition-colors cursor-pointer" onClick={prevSlide}>
                        <i className="fa fa-angle-left"></i>
                      </a>
                      <a className="carousel-control right absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark-500/80 backdrop-blur-sm text-white rounded-full flex items-center justify-center z-10 hover:bg-gold-600 transition-colors cursor-pointer" onClick={nextSlide}>
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </div>
                    <ul className="carousel-indicators smail-listing list-inline flex items-center gap-2 mb-6">
                      {galleryImages.map((img, index) => (
                        <li key={index} className="list-inline-item cursor-pointer">
                          <a id={`carousel-selector-${index}`} className={`selected ${activeSlide === index ? 'ring-2 ring-gold-600' : ''}`} onClick={() => goToSlide(index)}>
                            <img src={img} className="w-16 h-12 sm:w-20 sm:h-14 object-cover rounded-lg cursor-pointer" alt={`listing-small-${index}`} />
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="blog-info details mb-10">
                      <h5 className="text-xl font-bold text-white mb-4">Description</h5>
                      <p className="text-white/60 text-sm leading-relaxed mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum.</p>
                      <p className="text-white/60 text-sm leading-relaxed mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum.</p>
                      <p className="text-white/60 text-sm leading-relaxed mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rerum beatae consequatur, totam fugit, alias fuga aliquam quod tempora a nisi esse magnam nulla quas! Error praesentium, vero dolorum laborum.</p>
                    </div>
                  </div>
                </div>
              </div>
              <aside className="col-span-12 lg:col-span-4 car">
                <div className="single widget">
                  <div className="schedule widget-boxed mt-0 bg-dark-300/80 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                    <div className="widget-boxed-header mb-4">
                      <h4 className="text-lg font-bold text-white"><i className="fa fa-calendar pr-3 padd-r-10 text-gold-600"></i>Schedule a Tour</h4>
                    </div>
                    <div className="widget-boxed-body">
                      <div className="row grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div className="col-span-6 book">
                          <input type="text" id="reservation-date" className="form-control w-full px-4 py-3 bg-dark-200 border border-white/10 text-white text-sm rounded-xl outline-none transition-all duration-300 focus:border-gold-600 placeholder:text-white/30" placeholder="Select Date" readOnly />
                        </div>
                        <div className="col-span-6 book2">
                          <input type="text" id="reservation-time" className="form-control w-full px-4 py-3 bg-dark-200 border border-white/10 text-white text-sm rounded-xl outline-none transition-all duration-300 focus:border-gold-600 placeholder:text-white/30" placeholder="Select Time" readOnly />
                        </div>
                      </div>
                      <div className="row grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div className="col-span-6 mt-2">
                          <label className="block text-white/60 text-sm mb-3">Adult</label>
                          <div className="input-group flex items-center">
                            <span className="input-group-btn">
                              <button type="button" className="btn counter-btn theme-cl btn-number w-10 h-10 bg-dark-200 text-white rounded-lg flex items-center justify-center hover:bg-gold-600 hover:text-dark-500 transition-colors" disabled><i className="fa fa-minus text-xs"></i></button>
                            </span>
                            <input type="text" name="quant[1]" className="border-0 text-center form-control input-number w-full px-3 py-3 bg-dark-200 text-white text-sm rounded-lg outline-none focus:border-gold-600" data-min="0" data-max="10" value="0" />
                            <span className="input-group-btn">
                              <button type="button" className="btn counter-btn theme-cl btn-number w-10 h-10 bg-dark-200 text-white rounded-lg flex items-center justify-center hover:bg-gold-600 hover:text-dark-500 transition-colors" data-type="plus"><i className="fa fa-plus text-xs"></i></button>
                            </span>
                          </div>
                        </div>
                        <div className="col-span-6 mt-2">
                          <label className="block text-white/60 text-sm mb-3">Children</label>
                          <div className="input-group flex items-center">
                            <span className="input-group-btn">
                              <button type="button" className="btn counter-btn theme-cl btn-number w-10 h-10 bg-dark-200 text-white rounded-lg flex items-center justify-center hover:bg-gold-600 hover:text-dark-500 transition-colors" disabled><i className="fa fa-minus text-xs"></i></button>
                            </span>
                            <input type="text" name="quant[2]" className="border-0 text-center form-control input-number w-full px-3 py-3 bg-dark-200 text-white text-sm rounded-lg outline-none focus:border-gold-600" data-min="0" data-max="10" value="0" />
                            <span className="input-group-btn">
                              <button type="button" className="btn counter-btn theme-cl btn-number w-10 h-10 bg-dark-200 text-white rounded-lg flex items-center justify-center hover:bg-gold-600 hover:text-dark-500 transition-colors" data-type="plus"><i className="fa fa-plus text-xs"></i></button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <a href="javascript:void(0);" className="btn reservation btn-radius theme-btn full-width mt-2 py-3 bg-gradient-to-r from-gold-600 to-gold-700 text-dark-500 text-sm font-semibold rounded-xl transition-all duration-300 hover:from-gold-500 hover:to-gold-600 hover:shadow-[0_8px_25px_rgba(255,179,0,0.3)] text-center block">Submit Request</a>
                    </div>
                  </div>
                </div>
              </aside>
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

export default BuyProperty;