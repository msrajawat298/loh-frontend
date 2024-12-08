import React, { useState } from 'react';
import Navbar from './Navbar';

// Skill Fields component to handle dynamic skill input fields
const SkillFields = ({ skills, onSkillChange, onAddSkill }) => {
  return (
    <div id="skills">
      {skills.map((skill, index) => (
        <div key={index} className="mb-3">
          <input
            type="text"
            name={`skills[${index}]`}
            value={skill}
            onChange={(e) => onSkillChange(index, e.target.value)}
            className="form-control"
          />
        </div>
      ))}
      <div className="links">
        <button
          type="button"
          onClick={onAddSkill}
          className="btn btn-secondary"
        >
          Add Skill
        </button>
      </div>
    </div>
  );
};

const ProfileUpdateForm = ({ candidate, onUpdateProfile, errorMessages }) => {
  const [formData, setFormData] = useState({
    firstName: candidate.firstName || '',
    lastName: candidate.lastName || '',
    country: candidate.country || '',
    state: candidate.state || '',
    city: candidate.city || '',
    lookingFor: candidate.lookingFor || '',
    yearsOfExperience: candidate.yearsOfExperience || '',
    profileHeadline: candidate.profileHeadline || '',
    shortDescription: candidate.shortDescription || '',
    phoneNumber: candidate.phoneNumber || '',
    skills: candidate.skills || [''],
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    setFormData((prevState) => ({
      ...prevState,
      skills: newSkills,
    }));
  };

  const handleAddSkill = () => {
    setFormData((prevState) => ({
      ...prevState,
      skills: [...prevState.skills, ''],
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      photo: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile(formData);
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      {/* Error messages */}
      {errorMessages && errorMessages.length > 0 && (
        <div className="alert alert-danger">
          <h4>There were errors:</h4>
          <ul>
            {errorMessages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="container mt-5">
        <div className="row">
          <h2 className="text-center signin_form_header">
            Update your profile!
          </h2>
        </div>
        <div className="row">
          <div className="col-md-5">
            <h2>About You</h2>
            <p>
              We value your presence in our community and want to ensure your
              profile reflects the best of what you have to offer. Please take a
              moment to update your profile, including your personal details and
              professional experience. This helps us connect you with the right
              opportunities and showcase your unique strengths. Let’s make sure
              your story is told accurately and effectively!
            </p>
          </div>
          <div className="col-md-7">
            <div className="mb-3">
              <div className="row">
                <div className="col-md-2">
                  {candidate.photo && (
                    <img
                      src={
                        URL.createObjectURL(formData.photo) || candidate.photo
                      }
                      alt="Profile"
                      className="card-img-top rounded-circle"
                      style={{ width: '80px', height: '80px' }}
                    />
                  )}
                </div>
                <div className="col-md-10">
                  <label htmlFor="photo" className="form-label">
                    Photo
                  </label>
                  <input
                    type="file"
                    name="photo"
                    onChange={handleFileChange}
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lookingFor" className="form-label">
                Looking For
              </label>
              <input
                type="text"
                name="lookingFor"
                value={formData.lookingFor}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="yearsOfExperience" className="form-label">
                Years of Experience
              </label>
              <input
                type="number"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="profileHeadline" className="form-label">
                Profile Headline
              </label>
              <input
                type="text"
                name="profileHeadline"
                value={formData.profileHeadline}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="shortDescription" className="form-label">
                Short Description
              </label>
              <textarea
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                rows="3"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="skills" className="form-label">
                Skills
              </label>
              <SkillFields
                skills={formData.skills}
                onSkillChange={handleSkillChange}
                onAddSkill={handleAddSkill}
              />
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                Update Profile
              </button>
              <button
                type="button"
                onClick={() => (window.location.href = '/candidate')}
                className="btn btn-secondary ml-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const ProfileUpdatePage = () => {
  const [errorMessages, setErrorMessages] = useState([]);
  const [candidate, setCandidate] = useState({
    firstName: 'John',
    lastName: 'Doe',
    country: 'USA',
    state: 'California',
    city: 'Los Angeles',
    lookingFor: 'Developer',
    yearsOfExperience: 5,
    profileHeadline: 'Software Developer',
    shortDescription: 'Passionate about coding',
    phoneNumber: '123-456-7890',
    skills: ['JavaScript', 'React'],
    photo: '',
  });

  const handleProfileUpdate = (updatedData) => {
    // Handle form submission, for example, send to an API
    console.log('Profile updated:', updatedData);
    setErrorMessages([]); // Clear any previous error messages

    // Simulate an error for demonstration purposes
    setErrorMessages(['There was an issue with your update']);
  };

  const currentUser = { id: 1, email: 'test@gmail.com' };

  return (
    <>
      <Navbar userSignedIn currentUser={currentUser} />
      <div className="container">
        <ProfileUpdateForm
          candidate={candidate}
          onUpdateProfile={handleProfileUpdate}
          errorMessages={errorMessages}
        />
      </div>
    </>
  );
};

export default ProfileUpdatePage;
