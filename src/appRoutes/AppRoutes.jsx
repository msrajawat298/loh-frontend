import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Faq from '../components/Faq/Faq';
import Contact from '../components/Contact/Contact';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import RegistrationsForm from '../components/RegistrationsForm/RegistrationsForm';
import Candidate from '../components/Candidate/index';
import MyJobs from '../components/Employer/MyJobs';
import UpdateProfile from '../components/Employer/UpdateProfile';
import JobPosts from '../components/JobPost/Index';
import JobPostForm from '../components/JobPost/JobPostForm';
import JobPostDetails from '../components/JobPost/JobPostDetail';
import {
  jobPost,
  currentUser,
  handleDelete,
  handleUpdateJobPost,
  handleCancelEdit,
} from '../../constant';
import EditJobPost from '../components/JobPost/EditJob';
import NewJobPost from '../components/JobPost/NewJobPost';
import ProfileUpdatePage from '../components/Candidate/UpdateProfile';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/employer/my-jobs" element={<MyJobs />} />
      <Route path="/employer/update-profile" element={<UpdateProfile />} />
      <Route path="/jobpost/jobs" element={<JobPosts />} />
      <Route path="/jobpost/job-form" element={<JobPostForm />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<RegistrationsForm />} />
      <Route
        path="/signup_recruiter"
        element={<RegistrationsForm userType="recruiter" />}
      />
      <Route
        path="/dashboard"
        element={<Candidate userSignedIn currentUser={currentUser} />}
      />
      <Route path="/candidate/update-profile" element={<ProfileUpdatePage />} />
      <Route
        path="/jobpost/job-detail"
        element={
          <JobPostDetails
            jobPost={jobPost}
            currentUser={currentUser}
            onDelete={handleDelete}
          />
        }
      />
      <Route
        path="/jobpost/edit-job"
        element={
          <EditJobPost
            jobPost={jobPost}
            onSubmit={handleUpdateJobPost}
            onCancel={handleCancelEdit}
          />
        }
      />
      <Route
        path="/jobpost/new-job"
        element={
          <NewJobPost
            onSubmit={handleUpdateJobPost}
            onCancel={handleCancelEdit}
          />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
