import { REGISTER_SUCCESS, REGISTER_FAIL } from '../types';
import axios from 'axios';

export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/api/users', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.error;

    if (errors) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.error
      });
    }
  }
};
