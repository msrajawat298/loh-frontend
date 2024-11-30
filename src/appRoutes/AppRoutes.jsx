import { Routes, Route } from 'react-router-dom';
import Home from '../component/Home/Home';
import About from '../component/About/About';
import Faq from '../component/Faq/Faq';
import Contact from '../component/Contact/Contact';
import PageNotFound from '../component/PageNotFound/PageNotFound';

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
