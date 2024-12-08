import React, { useState } from 'react';
import Navbar from '../Candidate/Navbar';
import Footer from '../Footer/Footer';

const JobPostForm = ({
  jobPost = {},
  countries = ['India', 'USA', 'Canada'], // Replace with actual country data if needed
  onSubmit,
  onCancel,
  title = "Post a job",
}) => {
  const [formData, setFormData] = useState({
    title: jobPost.title || '',
    description: jobPost.description || '',
    skills: '',
    salaryMin: jobPost.salaryMin || '',
    salaryMax: jobPost.salaryMax || '',
    country: jobPost.country || 'India',
    state: jobPost.state || '',
    city: jobPost.city || '',
    experience: jobPost.experience || '',
    industry: jobPost.industry || '',
    jobType: jobPost.jobType || '',
    status: jobPost.status || 'Open',
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit(formData);
    }
  };

  const validateForm = (data) => {
    const errors = [];
    if (!data.title) errors.push('Title is required.');
    if (!data.description) errors.push('Description is required.');
    if (!data.salaryMin || !data.salaryMax)
      errors.push('Salary range is required.');
    return errors;
  };

  const currentUser = { id: 1, email: 'test@gmail.com' };

  return (
    <>
      <Navbar userSignedIn currentUser={currentUser} />
      <div className="container mt-5">
        <div className="row">
          <h2 className="text-center signin_form_header">{title}</h2>
          {errors.length > 0 && (
            <div className="alert alert-danger">
              <h4>There were errors:</h4>
              <ul>
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Job Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-control"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="form-control"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="skills" className="form-label">
                Skills
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                className="form-control"
                value={formData.skills}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 row">
              <div className="col-md-6">
                <label htmlFor="salaryMin" className="form-label">
                  Salary Min
                </label>
                <input
                  type="number"
                  id="salaryMin"
                  name="salaryMin"
                  className="form-control"
                  value={formData.salaryMin}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="salaryMax" className="form-label">
                  Salary Max
                </label>
                <input
                  type="number"
                  id="salaryMax"
                  name="salaryMax"
                  className="form-control"
                  value={formData.salaryMax}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-3 row">
              <div className="col-md-4">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="form-control"
                  value={formData.country}
                  onChange={handleChange}
                >
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="form-control"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="form-control"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <div className="col-md-6">
                <label htmlFor="experience" className="form-label">
                  Experience
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  className="form-control"
                  value={formData.experience}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="industry" className="form-label">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  className="form-control"
                  value={formData.industry}
                  onChange={handleChange}
                >
                  {[
                    'Information Technology (IT)',
                    'Healthcare',
                    'Finance',
                    'Education',
                    'Manufacturing',
                    'Retail',
                    'Hospitality and Tourism',
                    'Marketing and Advertising',
                    'Real Estate',
                    'Media and Entertainment',
                    'Law and Legal Services',
                    'Science and Research',
                    'Transportation and Logistics',
                    'Construction and Engineering',
                    'Telecommunications',
                    'Energy',
                    'Fitness and Wellness',
                    'Other',
                  ].map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="jobType" className="form-label">
                Job Type
              </label>
              <select
                id="jobType"
                name="jobType"
                className="form-control"
                value={formData.jobType}
                onChange={handleChange}
              >
                {[
                  'Full Time',
                  'Part Time',
                  'Internship',
                  'Freelance',
                  'Contract',
                  'Other',
                ].map((jobType) => (
                  <option key={jobType} value={jobType}>
                    {jobType}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Job Status
              </label>
              <select
                id="status"
                name="status"
                className="form-control"
                value={formData.status}
                onChange={handleChange}
              >
                {[
                  'Open',
                  'Closed',
                  'Paused',
                  'Filled',
                  'Cancelled',
                  'Expired',
                ].map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <div className="actions">
              <button type="submit" className="btn btn-primary">
                {jobPost.id ? 'Update Job' : 'Post a Job'}
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobPostForm;
