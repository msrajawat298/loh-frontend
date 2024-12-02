import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Faq from '../components/Faq/Faq';
import Contact from '../components/Contact/Contact';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import RegistrationsForm from '../components/RegistrationsForm/RegistrationsForm';
import Candidate from '../components/Candidate/index';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/dashboard"
        element={
          <Candidate
            userSignedIn
            currentUser={{ candidate: 'test', id: 1, email: 'test@gmail.com' }}
          />
        }
      />
      <Route path="/signup" element={<RegistrationsForm />} />
      <Route
        path="/signup_recruiter"
        element={<RegistrationsForm userType="recruiter" />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
