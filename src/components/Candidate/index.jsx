import PropTypes from 'prop-types';
import Navbar from './Navbar';
import JobPosts from '../JobPost/Index';

const Candidate = ({ userSignedIn, currentUser }) => {
  return (
    <>
      <JobPosts />
    </>
  );
};
Candidate.propTypes = {
  userSignedIn: PropTypes.bool.isRequired,
  currentUser: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
  }).isRequired,
};

export default Candidate;
