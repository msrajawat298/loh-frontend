import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Candidate/Navbar';
import Footer from '../Footer/Footer';

const JobPostDetails = ({ jobPost, currentUser, onDelete }) => {
  return (
    <>
      <Navbar userSignedIn currentUser={currentUser} />
      <div className="job-details-container">
        <h1>{jobPost.title}</h1>

        <p>
          <strong>Description:</strong> {jobPost.description}
        </p>

        <p>
          <strong>Salary Range:</strong>
          {jobPost.salaryMin.toFixed(2)} - {jobPost.salaryMax.toFixed(2)}
        </p>

        <p>
          <strong>Location:</strong> {jobPost.city}, {jobPost.state},{' '}
          {jobPost.country}
        </p>

        <p>
          <strong>Experience Required:</strong> {jobPost.experience.toFixed(1)}{' '}
          years
        </p>

        <p>
          <strong>Industry:</strong> {jobPost.industry}
        </p>

        <p>
          <strong>Job Type:</strong> {jobPost.jobType}
        </p>

        <div className="job-actions">
          <Link
            to={`/job_posts/${jobPost.id}/edit`}
            className="btn btn-warning"
          >
            Edit
          </Link>
          {' | '}
          <Link to="/job_posts" className="btn btn-secondary">
            Back
          </Link>
          {currentUser?.employer && (
            <button
              className="btn btn-danger"
              onClick={() => onDelete(jobPost.id)}
            >
              Destroy this job posting
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobPostDetails;
