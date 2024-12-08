import React from 'react';
import Navbar from '../Candidate/Navbar';
import Footer from '../Footer/Footer';

const MyJobs = () => {
  const currentUser = { id: 1, email: 'test@gmail.com' };
  return (
    <>
      <Navbar userSignedIn currentUser={currentUser} />
      <div className="container mt-5">
        <div className="row mb-4">
          <div className="col-md-12">
            <form className="d-flex">
              <input
                className="form-control me-2 custom-input"
                type="search"
                placeholder="Search by skills"
                aria-label="Search"
              />
              <input
                className="form-control me-2 custom-input"
                type="search"
                placeholder="Search by location"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success custom-button"
                type="submit"
              >
                <i className="fas fa-search" /> Search
              </button>
            </form>
          </div>
        </div>
        <br />
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="card text-center bg-transparent text-white">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-briefcase" /> MyJobs Posted
                </h5>
                <p className="card-text"> 0</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center bg-transparent text-white">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-file-alt" /> Applications Received
                </h5>
                <p className="card-text"> 0</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center bg-transparent text-white">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-check-circle" /> Shortlisted
                </h5>
                <p className="card-text"> 0</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center bg-transparent text-white">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fas fa-eye" /> Reviewed
                </h5>
                <p className="card-text"> applications_reviewed_count || 0</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <h4>Recent Job Posts</h4>
            <ul className="list-group list-group-flush">
              <li className="listing_post_box">
                <div className="row">
                  <div className="col-md-11">
                    <h6> job_post.employer.company_name is hiring for</h6>
                    <h4> job_post.title ( job_post.job_type)</h4>
                    <p className="job-details">
                      <span>
                        <i className="fas fa-map-marker-alt" /> job_post.city,
                        job_post.state, job_post.country
                      </span>
                      <span>
                        <i className="fas fa-rupee-sign" />{' '}
                        number_to_indian_words(job_post.salary_min) -
                        number_to_indian_words(job_post.salary_max)
                      </span>
                      <span>
                        <i className="fas fa-clock" />{' '}
                        time_ago_in_words(job_post.created_at) ago
                      </span>
                      <span>
                        <i className="fas fa-briefcase" /> job_post.experience
                        years
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyJobs;
