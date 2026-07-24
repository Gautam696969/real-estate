import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import Services from '../components/Services';
import Team from '../components/Team';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Modal from '../components/Modal';

const propertiesSection1 = [
  {
    id: 1,
    title: 'Luxury House',
    location: '',
    price: '$230,000',
    beds: '6',
    baths: '3',
    sqft: '720',
    status: 'For Sale',
    image: 'https://ravmoyaanrealty.com/images/rvm/fi7.png',
  },
  {
    id: 2,
    title: 'Family Apartment',
    location: '',
    price: '$230,000',
    beds: '6',
    baths: '3',
    sqft: '720',
    status: 'For Rent',
    image: 'https://ravmoyaanrealty.com/images/rvm/fi8.png',
  },
  {
    id: 3,
    title: 'Villa House',
    location: '',
    price: '$230,000',
    beds: '6',
    baths: '3',
    sqft: '720',
    status: 'For Sale',
    image: 'https://ravmoyaanrealty.com/images/rvm/fi9.png',
  },
  {
    id: 4,
    title: 'Luxury Condo',
    location: '',
    price: '$230,000',
    beds: '6',
    baths: '3',
    sqft: '720',
    status: 'For Rent',
    image: 'https://ravmoyaanrealty.com/images/rvm/fi10.png',
  },
  {
    id: 5,
    title: 'Luxury House',
    location: '',
    price: '$230,000',
    beds: '6',
    baths: '3',
    sqft: '720',
    status: 'For Sale',
    image: 'https://ravmoyaanrealty.com/images/rvm/fi5.png',
  },
  {
    id: 6,
    title: 'Luxury House',
    location: '',
    price: '$230,000',
    beds: '6',
    baths: '3',
    sqft: '720',
    status: 'For Rent',
    image: 'https://ravmoyaanrealty.com/images/rvm/fi4.png',
  },
];

const propertiesSection2 = [
  {
    id: 7,
    title: '4744 Rose St',
    location: '4744 Rose St #Ga *New Yor CitySchiller Park IL 60176*',
    price: '',
    status: 'For Sale',
    image: 'https://ravmoyaanrealty.com/images/rvm/fi1.png',
  },
  {
    id: 8,
    title: '164 S Hale Ave',
    location: '164 S Hale Ave, Bartlett, IL 60103',
    price: '',
    status: 'For Rent',
    image: 'https://ravmoyaanrealty.com/images/rvm/fi2.png',
  },
  {
    id: 9,
    title: '135 Pecos Cir',
    location: '135 Pecos Cir, Carpentersville, IL 60110',
    price: '',
    status: 'For Sale',
    image: 'https://ravmoyaanrealty.com/images/rvm/fi3.png',
    beds: '2',
    baths: '3',
    sqft: '720',
  },
  {
    id: 10,
    title: '9002 N Clifton Ave',
    location: '9002 N Clifton Ave, Niles, IL 60714',
    price: '',
    status: 'For Rent',
    image: 'https://ravmoyaanrealty.com/images/rvm/fi4.png',
  },
  {
    id: 11,
    title: '436 W Division St APT 2',
    location: '436 W Division St APT 2, Villa Park, IL 60181',
    price: '',
    status: 'For Sale',
    image: 'https://ravmoyaanrealty.com/images/rvm/fi5.png',
  },
  {
    id: 12,
    title: '351 Farmingdale Cir',
    location: '351 Farmingdale Cir Vernon Hills, IL 60061',
    price: '',
    status: 'For Rent',
    image: 'https://ravmoyaanrealty.com/images/rvm/fi6.png',
  },
];

function Home() {
  useScrollAnimation();

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProperties
          title="Featured Properties"
          properties={propertiesSection1}
          variant="grid"
          showViewAll={false}
        />
        <Services />
        <FeaturedProperties
          title="Featured Properties"
          properties={propertiesSection2}
          variant="compact"
          showViewAll={true}
        />
        <Team />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="go-up fixed bottom-[30px] right-[30px] w-[50px] h-[50px] bg-gold-600 text-dark-500 rounded-full flex items-center justify-center shadow-[0_5px_20px_rgba(0,0,0,0.3)] z-[99] transition-all duration-300 text-2xl hover:bg-gold-800 hover:-translate-y-1 border-none cursor-pointer">
        <i className="fa fa-angle-double-up"></i>
      </button>
      <Modal />
    </div>
  );
}

export default Home;
