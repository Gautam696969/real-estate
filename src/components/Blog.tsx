import type { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    id: 1,
    title: '74 Paddock St, Montgomery, IL 60538',
    date: 'April 11, 2020',
    excerpt: 'Located at 74 Paddock St, Montgomery, IL 60538, this area offers a peaceful residential environment with easy access to major roads, local schools, and essential amenities.',
    image: 'https://ravmoyaanrealty.com/images/rvm/fi7.png',
    author: {
      name: 'Sourav Mukherjee',
      image: 'https://ravmoyaanrealty.com/images/team/sir.png',
    },
  },
  {
    id: 2,
    title: '1505 Plymouth Cir, Carpentersville, IL 60110',
    date: 'May 20, 2020',
    excerpt: 'Situated at 1505 Plymouth Cir, Carpentersville, IL 60110, this location provides excellent connectivity to nearby business hubs, shopping centers, and recreational spaces.',
    image: 'https://ravmoyaanrealty.com/images/rvm/fi8.png',
    author: {
      name: 'Sourav Mukherjee',
      image: 'https://ravmoyaanrealty.com/images/team/sir.png',
    },
  },
  {
    id: 3,
    title: '456 Walnut Ave #2, Elgin, IL 60123',
    date: 'Jun 30, 2020',
    excerpt: 'Based at 456 Walnut Ave #2, Elgin, IL 60123, this location sits in a vibrant and growing city known for its historic character and strong local economy.',
    image: 'https://ravmoyaanrealty.com/images/rvm/fi9.png',
    author: {
      name: 'Ankita Ghosh',
      image: 'https://ravmoyaanrealty.com/images/team/ankita.png',
    },
  },
];

const Blog = () => {
  return (
    <section className="py-20 pt-10 bg-dark-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-gold-600/10 border border-gold-600/20 rounded-full text-gold-600 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-sm">
            Latest
          </div>
          <h2 className="text-[2.5rem] font-bold text-white capitalize">News</h2>
          <p className="text-white/50 text-base mt-3 max-w-2xl mx-auto">Stay updated with the latest real estate insights and property listings.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="aos-init opacity-0 translate-y-[30px] transition-all duration-700 ease-out h-full"
              style={{ transitionDelay: `${(index + 1) * 0.15}s` }}
            >
              <div className="bg-dark-200/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-gold-600/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 group h-full flex flex-col">
                <a href="#" className="block overflow-hidden">
                  <div className="overflow-hidden relative">
                    <img src={post.image} alt={post.title} className="w-full h-48 sm:h-[240px] object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-500/50 to-transparent"></div>
                  </div>
                </a>
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/40 mb-2 sm:mb-3">
                    <span><i className="fa fa-calendar mr-1 sm:mr-1.5"></i>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                    <span><i className="fa fa-user mr-1 sm:mr-1.5"></i>{post.author.name}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-2 sm:mb-3 transition-colors duration-300 hover:text-gold-600">
                    <a href="#">{post.title}</a>
                  </h3>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/5">
                    <a href="#" className="text-gold-600 text-xs sm:text-sm font-semibold transition-all duration-300 hover:text-white inline-flex items-center gap-1 group-hover:gap-2">
                      Read More <i className="fa fa-arrow-right"></i>
                    </a>
                    <div className="flex items-center gap-2 sm:gap-3 text-white/40 text-xs sm:text-sm">
                      <span><i className="fa fa-heart mr-1"></i>24</span>
                      <span><i className="fa fa-comment mr-1"></i>12</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
