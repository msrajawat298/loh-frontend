const Footer = () => {
  return (
    <footer className="footer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="container">
        <span className="text-secondary">Footer Note LayoffHelp</span>
      </div>
      <div>
        <a href="/employer/my-jobs">My Jobs</a>
        &nbsp; | <a href="/employer/update-profile">Update Profile</a>
        &nbsp; | <a href="/jobpost/jobs">Job Posts</a>
        &nbsp; | <a href="/jobpost/job-form">Job Post Form</a>
        &nbsp; | <a href="/dashboard">Dashboard</a>
        &nbsp; | <a href="/candidate/update-profile">Update Profile</a>
        &nbsp; | <a href="/jobpost/job-detail">Job Post Details</a>
        &nbsp; | <a href="/jobpost/edit-job">Edit Job Post</a>
        &nbsp; | <a href="/jobpost/new-job">New Job Post</a>
      </div>

    </footer>
  );
};

export default Footer;
