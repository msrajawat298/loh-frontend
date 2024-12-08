import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../assets/images/lh-trans.png';

const Navbar = ({ userSignedIn, currentUser }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Logo and Company Name */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Layoffhelp" className="logo" />
          <span className="logo-text"> Layoffhelp </span>
        </Link>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {userSignedIn ? (
            <>
              {currentUser?.Navbar ? (
                <ul className="navbar-nav navbar-nav-center">
                  <li className="nav-item">
                    <Link to="/Navbar/dashboard" className="nav-link">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Navbar/edit-profile" className="nav-link">
                      Edit Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Find Work
                    </a>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav navbar-nav-center">
                  <li className="nav-item">
                    <Link to="/employer/dashboard" className="nav-link">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/employer/my-jobs" className="nav-link">
                      My Jobs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={`/employer/${currentUser?.id}/edit`}
                      className="nav-link"
                    >
                      Update Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/employer/post-job"
                      className="btn btn-outline-primary post-job-button"
                    >
                      Post Job
                    </Link>
                  </li>
                </ul>
              )}
              <ul className="navbar-nav ms-auto align-items-center">
                <li className="nav-item">
                  <div className="nav-link nav-link question">
                    Welcome {currentUser?.email}
                  </div>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() => {
                      // Add sign out logic here
                    }}
                    className="nav-link signin-button btn btn-outline-primary"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="navbar-nav navbar-nav-center">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Find Work
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto align-items-center">
                <li className="nav-item">
                  <span className="nav-link question">
                    Already have an account?{' '}
                  </span>
                </li>
                <li className="nav-item">
                  <Link
                    to="/sign-in"
                    className="nav-link signin-button btn btn-outline-primary"
                  >
                    Sign in
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  userSignedIn: PropTypes.bool.isRequired,
  currentUser: PropTypes.shape({
    Navbar: PropTypes.bool,
    id: PropTypes.number,
    email: PropTypes.string,
  }).isRequired,
};

export default Navbar;
