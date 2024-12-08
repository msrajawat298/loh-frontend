import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Candidate/Navbar';
import Footer from '../Footer/Footer';

const JobPosts = ({ jobPosts }) => {
  const numberToIndianWords = (number) => {
    // Replace this with the appropriate function to format numbers to Indian words.
    return number.toLocaleString('en-IN');
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      // Implement the delete functionality
      console.log(`Delete job post with id: ${id}`);
    }
  };
  const currentUser = { id: 1, email: 'test@gmail.com' };
  return (
    <>
      <Navbar userSignedIn currentUser={currentUser} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-9">{/* Additional content can go here */}</div>
          <div className="col-md-3 text-end">
            <Link to="/jobs/new" className="btn btn-primary">
              New Job Post
            </Link>
          </div>
        </div>

        <div className="row">
          <h2 className="text-center signin_form_header">
            Your recent job posts
          </h2>
          <table className="job_table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Salary Range</th>
                <th>Location</th>
                <th>Experience Required</th>
                <th>Job Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobPosts?.map((jobPost) => (
                <tr key={jobPost.id}>
                  <td>
                    <Link to={`/jobs/${jobPost.id}`} className="icon-link">
                      {jobPost.title}
                    </Link>
                  </td>
                  <td>
                    {numberToIndianWords(jobPost.salaryMin)} -{' '}
                    {numberToIndianWords(jobPost.salaryMax)}
                  </td>
                  <td>
                    {jobPost.city}, {jobPost.state}, {jobPost.country}
                  </td>
                  <td>{jobPost.experience.toFixed(1)} years</td>
                  <td>{jobPost.jobType}</td>
                  <td>{jobPost.status}</td>
                  <td>
                    <Link to={`/jobs/${jobPost.id}`} className="icon-link">
                      <i className="fas fa-eye" />
                    </Link>
                    <Link to={`/jobs/${jobPost.id}/edit`} className="icon-link">
                      <i className="fas fa-edit" />
                    </Link>
                    <button
                      onClick={() => handleDelete(jobPost.id)}
                      className="icon-link btn btn-link"
                    >
                      <i className="fas fa-trash" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobPosts;
