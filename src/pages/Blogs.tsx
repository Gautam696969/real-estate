import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { useState } from 'react';

const properties = [
  { id: 1, type: 'For Rent', price: '$623,000', title: 'Luxury House in New York', area: '720 sq ft', rooms: '6', beds: '2', baths: '3', image: 'https://ravmoyaanrealty.com/images/feature-properties/fp-7.jpg' },
  { id: 2, type: 'For Rent', price: '$6,500', title: 'Villa House in Los Angeles', area: '720 sq ft', rooms: '6', beds: '2', baths: '3', image: 'https://ravmoyaanrealty.com/images/feature-properties/fp-8.jpg' },
  { id: 3, type: 'For Rent', price: '$230,000', title: 'Family House in San Francisco', area: '720 sq ft', rooms: '6', beds: '2', baths: '3', image: 'https://ravmoyaanrealty.com/images/feature-properties/fp-9.jpg' },
];

const blogPosts = [
  {
    id: 1,
    title: 'REAL ESTATE NEWS',
    date: 'April 11, 2020',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur Real Estate News.',
    image: 'https://ravmoyaanrealty.com/images/blog/b-1.jpg',
    author: { name: 'Sourav Mukherjee', image: 'https://ravmoyaanrealty.com/images/testimonials/ts-1.jpg' },
    likes: 24,
    comments: 12,
    shares: 8,
  },
  {
    id: 2,
    title: 'REAL ESTATE NEWS',
    date: 'May 20, 2020',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur Real Estate News.',
    image: 'https://ravmoyaanrealty.com/images/blog/b-2.jpg',
    author: { name: 'Sourav Mukherjee', image: 'https://ravmoyaanrealty.com/images/testimonials/ts-2.jpg' },
    likes: 18,
    comments: 9,
    shares: 5,
  },
  {
    id: 3,
    title: 'REAL ESTATE NEWS',
    date: 'Jun 30, 2020',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur Real Estate News.',
    image: 'https://ravmoyaanrealty.com/images/blog/b-3.jpg',
    author: { name: 'Ankita Ghosh', image: 'https://ravmoyaanrealty.com/images/testimonials/ts-3.jpg' },
    likes: 31,
    comments: 15,
    shares: 10,
  },
  {
    id: 4,
    title: 'REAL ESTATE NEWS',
    date: 'Jul 15, 2020',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur Real Estate News.',
    image: 'https://ravmoyaanrealty.com/images/blog/b-4.jpg',
    author: { name: 'Sourav Mukherjee', image: 'https://ravmoyaanrealty.com/images/testimonials/ts-4.jpg' },
    likes: 15,
    comments: 7,
    shares: 4,
  },
  {
    id: 5,
    title: 'REAL ESTATE NEWS',
    date: 'Aug 01, 2020',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur Real Estate News.',
    image: 'https://ravmoyaanrealty.com/images/blog/b-5.jpg',
    author: { name: 'Ankita Ghosh', image: 'https://ravmoyaanrealty.com/images/testimonials/ts-5.jpg' },
    likes: 22,
    comments: 11,
    shares: 6,
  },
  {
    id: 6,
    title: 'REAL ESTATE NEWS',
    date: 'Sep 10, 2020',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur Real Estate News.',
    image: 'https://ravmoyaanrealty.com/images/blog/b-6.jpg',
    author: { name: 'Sourav Mukherjee', image: 'https://ravmoyaanrealty.com/images/testimonials/ts-6.jpg' },
    likes: 27,
    comments: 13,
    shares: 9,
  },
];

const sidebarPages = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
  { name: 'Rental Form', href: 'https://ravmoyaanrealty.com/renter-application/' },
];

const popularTags = ['Houses', 'Real Home', 'Baths', 'Beds', 'Garages', 'Family', 'Real Estates', 'Properties', 'Location', 'Price'];

const recentPosts = [
  { title: 'REAL ESTATE NEWS', date: 'April 11, 2020', image: 'https://ravmoyaanrealty.com/images/blog/b-1.jpg' },
  { title: 'REAL ESTATE NEWS', date: 'May 20, 2020', image: 'https://ravmoyaanrealty.com/images/blog/b-2.jpg' },
  { title: 'REAL ESTATE NEWS', date: 'Jun 30, 2020', image: 'https://ravmoyaanrealty.com/images/blog/b-3.jpg' },
];

function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  return (
    <div
      className="aos-init opacity-0 translate-y-[30px] transition-all duration-700 ease-out group bg-dark-300/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-gold-600/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-500"
      style={{ transitionDelay: `${(index + 1) * 0.15}s` }}
    >
      <a href="#" className="block overflow-hidden">
        <div className="overflow-hidden relative">
          <img src={post.image} alt={post.title} className="w-full h-56 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-500/50 to-transparent"></div>
        </div>
      </a>
      <div className="p-4 sm:p-6">
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/40 mb-2 sm:mb-3">
          <span><i className="fa fa-calendar mr-1 sm:mr-1.5"></i>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-white/20"></span>
         <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-white/10">
            <img src={post.author.image} alt={post.author.name} className="w-full h-full object-cover" />
          </div> <span>{post.author.name}</span>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-2 sm:mb-3 transition-colors duration-300 hover:text-gold-600">
          <a href="#">{post.title}</a>
        </h3>
        <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-white/5">
          <a href="#" className="text-gold-600 text-xs sm:text-sm font-semibold transition-all duration-300 hover:text-white inline-flex items-center gap-1 group-hover:gap-2">
            Read More <i className="fa fa-arrow-right"></i>
          </a>
          <div className="flex items-center gap-2 sm:gap-3 text-white/40 text-xs sm:text-sm">
            <span><i className="fa fa-heart mr-1"></i>{post.likes}</span>
            <span><i className="fa fa-comment mr-1"></i>{post.comments}</span>
            <span><i className="fa fa-share-alt mr-1"></i>{post.shares}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarWidget() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <aside className="space-y-6">
      <div className="bg-dark-300/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/5">
        <h5 className="font-bold text-white mb-4">Search</h5>
        <div className="flex gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for..."
            className="flex-1 px-4 py-2.5 bg-dark-200 border border-white/10 text-white text-sm rounded-xl outline-none transition-all duration-300 focus:border-gold-600 placeholder:text-white/30"
          />
          <button className="px-4 py-2.5 bg-gold-600 text-dark-500 text-sm font-semibold rounded-xl hover:bg-gold-700 transition-all duration-300">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>

      <div className="bg-dark-300/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/5">
        <h5 className="font-bold text-white mb-4">Our Pages</h5>
        <ul className="space-y-2.5">
          {sidebarPages.map((page) => (
            <li key={page.name}>
              <a href={page.href} className="flex items-center gap-2 text-white/50 text-sm transition-all duration-300 hover:text-gold-600 hover:pl-1">
                <i className="fa fa-caret-right text-gold-600 text-xs"></i>
                {page.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-dark-300/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/5">
        <h5 className="font-bold text-white mb-4">Popular Tags</h5>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <a key={tag} href="#" className="px-3 py-1.5 bg-dark-200 text-white/50 text-xs font-medium rounded-full border border-white/5 hover:border-gold-600/30 hover:text-gold-600 transition-all duration-300">
              {tag}
            </a>
          ))}
        </div>
      </div>

      <div className="bg-dark-300/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/5">
        <h5 className="font-bold text-white mb-4">Recent Posts</h5>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.title} className="flex gap-3">
              <a href="#" className="flex-shrink-0">
                <img src={post.image} alt={post.title} className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl object-cover" />
              </a>
              <div className="min-w-0">
                <a href="#"><h6 className="text-white text-xs sm:text-sm font-semibold leading-snug mb-1 overflow-hidden" style={{ maxHeight: '2.5rem' }}>{post.title}</h6></a>
                <p className="text-white/40 text-l">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

function Blogs() {
  useScrollAnimation();

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <section className="relative py-24 pt-32 bg-dark-100 overflow-hidden">
          <img src="https://ravmoyaanrealty.com/images/bg/bg-testimonials-2.jpg" alt="Blog Background" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark-100/60"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto px-5 relative z-10">
            <div className="text-center mb-14">
              <div className="inline-block px-4 py-1.5 bg-gold-600/10 border border-gold-600/20 rounded-full text-gold-600 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-sm">
                Blog
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white capitalize">Our Blog</h1>
              <div className="flex items-center justify-left gap-2 text-white/50 text-sm mt-2">
                <a href="/" className="hover:text-gold-600 transition-colors text-white/70">Home</a>
                <span>/</span>
                <span className="text-gold-600">Blog</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-dark-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
          <div className="max-w-[1200px] mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {blogPosts.map((post, index) => (
                    <BlogCard key={post.id} post={post} index={index} />
                  ))}
                </div>

                <nav className="pt-15" aria-label="Pagination">
                  <ul className="flex items-center justify-center gap-2">
                    <li>
                      <a href="#" className="px-4 py-2 bg-dark-300/80 text-white/50 text-sm rounded-xl border border-white/5 hover:border-gold-600/30 hover:text-gold-600 transition-all duration-300">
                        <i className="fa fa-angle-left"></i> Prev
                      </a>
                    </li>
                    <li>
                      <a href="#" className="px-4 py-2 bg-gold-600 text-dark-500 text-sm font-semibold rounded-xl">1</a>
                    </li>
                    <li>
                      <a href="#" className="px-4 py-2 bg-dark-300/80 text-white/50 text-sm rounded-xl border border-white/5 hover:border-gold-600/30 hover:text-gold-600 transition-all duration-300">2</a>
                    </li>
                    <li>
                      <a href="#" className="px-4 py-2 bg-dark-300/80 text-white/50 text-sm rounded-xl border border-white/5 hover:border-gold-600/30 hover:text-gold-600 transition-all duration-300">3</a>
                    </li>
                    <li>
                      <a href="#" className="px-4 py-2 bg-dark-300/80 text-white/50 text-sm rounded-xl border border-white/5 hover:border-gold-600/30 hover:text-gold-600 transition-all duration-300">
                        Next <i className="fa fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="lg:col-span-1">
                <SidebarWidget />
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

export default Blogs;