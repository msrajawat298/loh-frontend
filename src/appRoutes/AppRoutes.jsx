import { Routes, Route } from 'react-router-dom';
import Home from '../component/home/Home';
import About from '../component/about/About';
import Faq from '../component/faq/Faq';
import Contact from '../component/contact/Contact';
import PageNotFound from '../component/pagenotfound/PageNotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
