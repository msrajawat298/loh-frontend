// Example job post data
export const jobPost = {
  id: 1,
  title: 'Software Engineer',
  description: 'Develop and maintain web applications.',
  salaryMin: 50000,
  salaryMax: 80000,
  city: 'San Francisco',
  state: 'California',
  country: 'USA',
  experience: 3.5,
  industry: 'Information Technology (IT)',
  jobType: 'Full Time',
};

// Handle delete action
export const handleDelete = (jobId) => {
  console.log(`Deleting job post with ID: ${jobId}`);
  // Add API call or state update logic here
};

export const currentUser = { id: 1, email: 'test@gmail.com', employer: true };

export const handleUpdateJobPost = (jobId) => {
  console.log(`Update job post with ID: ${jobId}`);
  // Add API call or state update logic here
};

export const handleCancelEdit = (jobId) => {
  console.log(`Edit job post with ID: ${jobId}`);
  // Add API call or state update logic here
};
