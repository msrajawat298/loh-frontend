import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const RegistrationsForm = ({ userType = 'candidate' }) => {
  const navigate = useNavigate();
  const title =
    userType === 'candidate'
      ? 'Your Next Opportunity Awaits - Join Today!'
      : 'Your Next Great Hire is Just a Click Away - Signup Now!';

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    if (!formData.passwordConfirmation) {
      newErrors.passwordConfirmation = 'Password confirmation is required.';
    } else if (formData.passwordConfirmation !== formData.password) {
      newErrors.passwordConfirmation = 'Passwords do not match.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Handle form submission logic here
    setErrors({});
    navigate('/dashboard');
  };

  return (
    <>
      <Navbar />
      <div className="container top-margin">
        <div className="text-center rounded-3">
          <h2 className="signin_form_header">{title}</h2>
          <div className="d-inline-flex gap-3 justify-content-center">
            <form onSubmit={handleSubmit} method="post">
              <div className="mb-3 text-start form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className="form-control form-control-lg input-field"
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && (
                  <div className="text-danger mt-1">{errors.email}</div>
                )}
              </div>

              <div className="mb-3 text-start form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  className="form-control form-control-lg input-field"
                  aria-invalid={errors.password ? 'true' : 'false'}
                />
                {errors.password && (
                  <div className="text-danger mt-1">{errors.password}</div>
                )}
              </div>

              <div className="mb-3 text-start form-group">
                <label htmlFor="passwordConfirmation" className="form-label">
                  Password Confirmation
                </label>
                <input
                  type="password"
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  value={formData.passwordConfirmation}
                  onChange={handleChange}
                  autoComplete="new-password"
                  className="form-control form-control-lg input-field"
                  aria-invalid={errors.passwordConfirmation ? 'true' : 'false'}
                />
                {errors.passwordConfirmation && (
                  <div className="text-danger mt-1">
                    {errors.passwordConfirmation}
                  </div>
                )}
              </div>

              <input type="hidden" name="role" value={userType} />

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
