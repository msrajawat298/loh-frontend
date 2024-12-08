import React from 'react';
import JobPostForm from './JobPostForm';

const NewJobPost = ({ onSubmit, onCancel }) => {
  const initialJobPost = {
    title: '',
    description: '',
    // Include other fields as necessary
  };

  const handleFormSubmit = (newJobPost) => {
    console.log('New Job Post:', newJobPost);
    onSubmit(newJobPost); // Add API call or state update logic here
  };

  return (
    <JobPostForm
        jobPost={initialJobPost}
        onSubmit={handleFormSubmit}
        onCancel={onCancel}
        title="Post New Jobs"
      />
  );
};

export default NewJobPost;
