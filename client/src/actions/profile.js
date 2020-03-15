import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPLOAD_SUCCESS,
  UPLOAD_FAIL
} from './types';

//Get current user profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/me');
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create or Update profile
export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    console.log(formData);

    const res = await axios.post('/api/profile', formData, config);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

    if (!edit) {
      history.push('/profile');
    }
  } catch (err) {
    const errors = err.response.data.error;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Upload Image to Cloudinary
export const uploadImage = imageUpload => async dispatch => {
  try {
    delete axios.defaults.headers.common['x-auth-token'];

    const formData = new FormData();
    formData.append('file', imageUpload);
    formData.append('api_key', 419438315981267);
    formData.append('timestamp', Date.now());
    formData.append('upload_preset', 'zuwvnv9u');

    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/frank/image/upload',
      formData
    );

    axios.defaults.headers.common['x-auth-token'] = localStorage.getItem(
      'token'
    );

    dispatch({
      type: UPLOAD_SUCCESS,
      payload: res.data.secure_url
    });
  } catch (err) {
    const errors = err.response.data.error;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: UPLOAD_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
