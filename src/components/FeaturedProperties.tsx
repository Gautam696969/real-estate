import type { Property } from '../types';

interface FeaturedPropertiesProps {
  title: string;
  subtitle?: string;
  properties: Property[];
  variant?: 'grid' | 'compact';
  showViewAll?: boolean;
}

const FeaturedProperties = ({ title, subtitle, properties, variant = 'grid', showViewAll = true }: FeaturedPropertiesProps) => {
  const words = title.split(' ');
  const lastWord = words.pop();
  const firstWords = words.join(' ');

  return (
    <section className={`pt-8 pb-15 ${variant === 'grid' ? 'bg-dark-100' : 'bg-dark-50'}`}>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="mb-5">
          <div className="text-left mb-2.5">
            <div className="inline-block px-4 py-1.5 bg-gold-600/10 border border-gold-600/20 rounded-full text-gold-600 text-xs font-semibold uppercase tracking-widest backdrop-blur-sm">
              {firstWords}
            </div>
            <h2 className="text-[2.5rem] font-bold text-white capitalize block">{lastWord}</h2>
          </div>
          {subtitle && <p className="text-white/50 text-base max-w-[600px]">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {properties.map((prop, index) => (
            <div
              key={prop.id}
               className="aos-init opacity-0 translate-y-[30px] transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
               {variant === 'grid' ? (
                  <a href="#" className="block relative overflow-hidden group rounded-xl bg-dark-300 border border-white/5 hover:border-gold-600/30 transition-all duration-500">
                    <div className="w-full h-64 md:h-80 lg:h-100 bg-cover bg-center transition-all duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${prop.image})` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-gold-600/90 text-dark-500 text-xs font-semibold rounded-lg backdrop-blur-sm">{prop.status}</span>
                  </div>
                   <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                     <div className="mb-2 sm:mb-3">
                       <h3 className="text-base sm:text-lg font-bold text-white">{prop.title}</h3>
                     </div>
                     <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/80 mb-3 sm:mb-4">
                       <span className="flex items-center gap-1 sm:gap-1.5"><i className="fa fa-bed text-gold-600"></i> {prop.beds}</span>
                       <span className="flex items-center gap-1 sm:gap-1.5"><i className="fa fa-bath text-gold-600"></i> {prop.baths}</span>
                       <span className="flex items-center gap-1 sm:gap-1.5"><i className="fa fa-arrows-alt text-gold-600"></i> {prop.sqft} sqft</span>
                     </div>
                     <div className="flex items-center justify-between">
                       <div className="text-lg sm:text-xl font-bold text-gold-600">{prop.price}</div>
                       <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gold-600 text-dark-500 text-xs sm:text-sm font-semibold rounded-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                         View Details
                       </div>
                     </div>
                   </div>
                </a>
              ) : (
                <div className="project-single w-full">
                  <div className="relative overflow-hidden rounded-xl bg-dark-200 border border-white/5 hover:border-gold-600/30 transition-all duration-500 group">
                     <img src={prop.image} alt={prop.title} className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10">
                      <span className="bg-gold-600 text-dark-500 px-3 py-1.5 text-xs font-semibold rounded-lg">{prop.location?.split(' ')[0] || 'Illinois'}</span>
                      <span className={`px-3 py-1.5 text-xs font-semibold rounded-lg ${prop.status === 'For Rent' ? 'bg-purple-600 text-white' : 'bg-dark-50 text-white'}`}>{prop.status}</span>
                    </div>
                     <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent z-10">
                       <h3 className="text-white text-base sm:text-lg font-bold mb-1">{prop.location}</h3>
                       <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/80">
                         {prop.beds && <span>{prop.beds} Beds</span>}
                         {prop.baths && <span>{prop.baths} Baths</span>}
                         {prop.sqft && <span>{prop.sqft} sqft</span>}
                       </div>
                      <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <a href="#" className="text-gold-600 text-sm font-semibold hover:text-white transition-colors">View Details <i className="fa fa-arrow-right ml-1"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {showViewAll && (
          <div className="text-center mt-14">
            <a href="#" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold-600 text-dark-500 text-sm font-semibold uppercase tracking-wider rounded-xl transition-all duration-300 hover:bg-gold-500 hover:shadow-[0_8px_25px_rgba(255,179,0,0.3)]">
              View All Properties <i className="fa fa-arrow-right"></i>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProperties;
