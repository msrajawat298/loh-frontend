import { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const RegistrationsForm = ({ userType = 'candidate' }) => {
  const title =
    userType === 'candidate'
      ? 'Your Next Opportunity Awaits - Join Today!'
      : 'Your Next Great Hire is Just a Click Away - Signup Now!';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setErrors(null);
    // eslint-disable-next-line no-console
    console.log('Form submitted', email, password, passwordConfirmation);
  };

  return (
    <>
      <Navbar />
      <div className="container top-margin">
        <div className="text-center rounded-3">
          <h2 className="signin_form_header">{title}</h2>
          <div className="d-inline-flex gap-3 justify-content-center">
            <form onSubmit={handleSubmit} method="post">
              {errors.length > 0 && (
                <div className="alert alert-danger">
                  {errors.map((error) => (
                    <p key={error}>{error}</p>
                  ))}
                </div>
              )}
              <div className="mb-3 text-start form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="form-control form-control-lg input-field"
                />
              </div>

              <div className="mb-3 text-start form-group">
                <label
                  htmlFor="password"
                  className="form-label"
                  id="password-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  className="form-control form-control-lg input-field"
                />
              </div>
              <div className="mb-3 text-start form-group">
                <label htmlFor="passwordConfirmation" className="form-label">
                  Password Confirmation
                </label>
                <input
                  type="password"
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  autoComplete="new-password"
                  className="form-control form-control-lg input-field"
                />
              </div>
              <input type="hidden" name="role" value="candidate" />
              <div className="d-grid form-group">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg sign-in-button-form"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
RegistrationsForm.defaultProps = {
  userType: 'candidate',
};

RegistrationsForm.propTypes = {
  userType: PropTypes.string,
};

export default RegistrationsForm;
