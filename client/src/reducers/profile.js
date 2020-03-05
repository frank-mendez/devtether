import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPLOAD_SUCCESS,
  UPLOAD_FAIL
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case PROFILE_ERROR:
    case UPLOAD_FAIL:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case UPLOAD_SUCCESS:
      return {
        ...state,
        image: payload,
        loading: false
      };
    default:
      return state;
  }
}
