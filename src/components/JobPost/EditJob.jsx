import React from 'react';
import JobPostForm from './JobPostForm';

const EditJobPost = ({ jobPost, onSubmit, onCancel }) => {
  const handleFormSubmit = (updatedJobPost) => {
    console.log('Updated Job Post:', updatedJobPost);
    onSubmit(updatedJobPost); // Add API call or state update logic here
  };

  return (
    <div className="edit-job-post">
      <h2>Edit Job Post</h2>
      <JobPostForm
        jobPost={jobPost}
        onSubmit={handleFormSubmit}
        onCancel={onCancel}
      />
    </div>
  );
};

export default EditJobPost;
