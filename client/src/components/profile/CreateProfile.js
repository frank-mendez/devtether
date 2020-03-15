import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from '../layouts/Sidebar';
import Navbar from '../layouts/Navbar';
import { createProfile, uploadImage } from '../../actions/profile';
import { setAlert } from '../../actions/alert';
import Alert from '../layouts/Alert';

const CreateProfile = ({
  profile: { image },
  setAlert,
  uploadImage,
  history,
  createProfile
}) => {
  const [formData, setFormData] = useState({
    photo: '',
    imgURL: '',
    title: '',
    company: '',
    website: '',
    status: '',
    skills: '',
    bio: '',
    imagePreview: ''
  });

  const {
    imgURL,
    title,
    company,
    website,
    status,
    skills,
    bio,
    imagePreview
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onChangeImage = e => {
    const imageFile = e.target.files[0];
    if (!imageFile) {
      setAlert('Please select image.', 'danger');
      return false;
    }

    if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      setAlert('Please select valid image.', 'danger');
      return false;
    }

    if (imageFile.size / 1024 / 1024 > 2) {
      setAlert('Please select image not more than 2MB.', 'danger');
      return false;
    }

    uploadImage(imageFile);

    setFormData({
      ...formData,
      imgURL: imageFile.name,
      imagePreview: URL.createObjectURL(imageFile)
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
    createProfile(formData, history);
  };

  useEffect(() => {
    setFormData({ ...formData, photo: image });
  }, [image]);

  return (
    <Fragment>
      <div id='wrapper'>
        <Sidebar />
        <div id='content-wrapper' className='d-flex flex-column'>
          <Navbar />
          <div className='container-fluid'>
            <div className='row'>
              <div className='card col'>
                <div className='card-header'>Create Profile</div>
                <div className='card-body'>
                  <Alert />
                  <form onSubmit={e => onSubmit(e)}>
                    {imagePreview && (
                      <div className='col center'>
                        <img
                          className='img-fluid'
                          width='100'
                          alt='Preview'
                          src={imagePreview}
                        />
                      </div>
                    )}
                    <div className='form-group'>
                      <label>Profile Picture</label>
                      <div className='custom-file'>
                        <input
                          type='file'
                          className='custom-file-input'
                          onChange={e => onChangeImage(e)}
                        />
                        <label className='custom-file-label'>
                          {imgURL !== '' ? imgURL : 'Choose File'}
                        </label>
                      </div>
                    </div>
                    <div className='form-group'>
                      <label>Title</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Ex. Senior Web Developer'
                        name='title'
                        value={title}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className='form-group'>
                      <label>Company</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Company'
                        name='company'
                        value={company}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className='form-group'>
                      <label>Website</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Online Portfolio'
                        name='website'
                        value={website}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className='form-group'>
                      <label>Skills</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Ex. ReactJS, JavaScript'
                        name='skills'
                        value={skills}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className='form-group'>
                      <label>Status</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Ex. ReactJS, JavaScript'
                        name='status'
                        value={status}
                        onChange={e => onChange(e)}
                      />
                    </div>
                    <div className='form-group'>
                      <label>Bio</label>
                      <textarea
                        className='form-control'
                        placeholder='Introduce yourself'
                        name='bio'
                        value={bio}
                        onChange={e => onChange(e)}
                      ></textarea>
                    </div>
                    <button type='submit' className='btn btn-primary'>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, {
  createProfile,
  setAlert,
  uploadImage
})(withRouter(CreateProfile));
