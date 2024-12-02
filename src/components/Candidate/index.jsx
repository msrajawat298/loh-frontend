import PropTypes from 'prop-types';
import Navbar from './Navbar';

const Candidate = ({ userSignedIn, currentUser }) => {
  return <Navbar userSignedIn={userSignedIn} currentUser={currentUser} />;
};
Candidate.propTypes = {
  userSignedIn: PropTypes.bool.isRequired,
  currentUser: PropTypes.shape({
    candidate: PropTypes.bool,
    id: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default Candidate;
