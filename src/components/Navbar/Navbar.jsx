import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/lh-trans.png';

const Navbar = ({ user }) => {
  const handleSignOut = () => {
    // Logic for signing out the user
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Logo and Company Name */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Layoffhelp" className="logo" />
          <span className="logo-text">Layoffhelp</span>
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
          <ul className="navbar-nav navbar-nav-center">
            <li className="nav-item menu">
              <a className="nav-link" href="#how-it-works">
                How it works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#find-work">
                Find Work
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto align-items-center">
            {user ? (
              <>
                <li className="nav-item">
                  <div className="nav-link nav-link question">
                    Welcome {user.name}
                  </div>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="nav-link signin-button btn btn-outline-primary"
                  >
                    Sign out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <span className="nav-link question">
                    Already have an account?
                  </span>
                </li>
                <li className="nav-item">
                  <Link
                    to="/signin"
                    className="nav-link signin-button btn btn-outline-primary"
                  >
                    Sign in
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};

Navbar.defaultProps = {
  user: null,
};

export default Navbar;