import React, { useState } from 'react';
import Navbar from '../Candidate/Navbar';
import Footer from '../Footer/Footer';

const UpdateProfile = ({ employer, errors, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    logo: null,
    companyName: employer?.companyName || '',
    webpage: employer?.webpage || '',
    address: employer?.address || '',
    city: employer?.city || '',
    state: employer?.state || '',
    country: employer?.country || '',
    workEmail: employer?.workEmail || '',
    industry: employer?.industry || '',
    numberOfEmployees: employer?.numberOfEmployees || '',
    tagline: employer?.tagline || '',
    companyDescription: employer?.companyDescription || '',
    name: employer?.name || '',
    mobile: employer?.mobile || '',
    position: employer?.position || '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const currentUser = { id: 1, email: 'test@gmail.com' };

  return (
    <>
      <Navbar userSignedIn currentUser={currentUser} />
      <form onSubmit={handleSubmit} className="container mt-5">
        {errors && errors.length > 0 && (
          <div className="alert alert-danger">
            <h4>There were errors:</h4>
            <ul>
              {errors.map((message, index) => (
                <li key={index}>{message}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="row">
          <h2 className="text-center signin_form_header">
            Update your company profile!
          </h2>
        </div>
        <div className="row">
          <div className="col-md-5">
            <h2>About Company</h2>
            <p>
              We value your presence in our community and want to ensure your
              profile reflects the best of what your company has to offer...
            </p>
          </div>
          <div className="col-md-7">
            <div className="mb-3 row">
              <div className="col-md-2">
                {employer?.logo && (
                  <img
                    src={employer?.logo}
                    alt="Logo"
                    className="card-img-top rounded-circle"
                  />
                )}
              </div>
              <div className="col-md-10">
                <label htmlFor="logo" className="form-label">
                  Logo
                </label>
                <input
                  type="file"
                  name="logo"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
            </div>
            {[
              { label: 'Company Name', name: 'companyName', type: 'text' },
              { label: 'Webpage', name: 'webpage', type: 'text' },
              { label: 'Address', name: 'address', type: 'textarea' },
              { label: 'City', name: 'city', type: 'text' },
              { label: 'State', name: 'state', type: 'text' },
              { label: 'Country', name: 'country', type: 'text' },
              { label: 'Work Email', name: 'workEmail', type: 'email' },
              { label: 'Industry', name: 'industry', type: 'text' },
              {
                label: 'Number of Employees',
                name: 'numberOfEmployees',
                type: 'select',
                options: [
                  '1 - 5',
                  '5 - 10',
                  '10 - 50',
                  '50 - 100',
                  '100 - 500',
                  '500 - 1000',
                  '1000 +',
                ],
              },
              { label: 'Tagline', name: 'tagline', type: 'text' },
              {
                label: 'Company Description',
                name: 'companyDescription',
                type: 'textarea',
              },
            ].map(({ label, name, type, options }) => (
              <div className="mb-3" key={name}>
                <label htmlFor={name} className="form-label">
                  {label}
                </label>
                {type === 'textarea' ? (
                  <textarea
                    id={name}
                    name={name}
                    rows="3"
                    className="form-control"
                    value={formData[name]}
                    onChange={handleChange}
                  />
                ) : type === 'select' ? (
                  <select
                    id={name}
                    name={name}
                    className="form-control"
                    value={formData[name]}
                    onChange={handleChange}
                  >
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id={name}
                    name={name}
                    type={type}
                    className="form-control"
                    value={formData[name]}
                    onChange={handleChange}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-5">
            <h2>About You</h2>
            <p>
              We’d love to know who’s behind the job postings! Please provide
              your name, phone number, and position...
            </p>
          </div>
          <div className="col-md-7">
            {[
              { label: 'Name', name: 'name', type: 'text' },
              { label: 'Mobile', name: 'mobile', type: 'tel' },
              { label: 'Position', name: 'position', type: 'text' },
            ].map(({ label, name, type }) => (
              <div className="mb-3" key={name}>
                <label htmlFor={name} className="form-label">
                  {label}
                </label>
                <input
                  id={name}
                  name={name}
                  type={type}
                  className="form-control"
                  value={formData[name]}
                  onChange={handleChange}
                />
              </div>
            ))}
            <button type="submit" className="btn btn-primary">
              Update
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default UpdateProfile;
