import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import BuyProperty from './pages/BuyProperty';
import SellProperty from './pages/SellProperty';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import ContactPage from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/buy-property" element={<BuyProperty />} />
      <Route path="/sell-property" element={<SellProperty />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
