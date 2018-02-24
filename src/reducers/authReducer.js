import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
} from '../constants/constants';

const INITIAL_STATE = {
  error:'',
  authenticated:false,
  message:'',
  user:{}
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
      case AUTH_USER:
        return { ...state, error: '', authenticated: true, user:action.payload};

      case UNAUTH_USER:
        return { ...state, authenticated: false, error: action.payload };

      case UPDATE_USER_SUCCESS:
        return { ...state, error: '', authenticated: true, user:action.payload};

      case UPDATE_USER_FAILED:
        return { ...state, authenticated: false, error: action.payload };

      case AUTH_ERROR:
      return { ...state, error: action.payload };

      case FETCH_MESSAGE:
      return { ...state, message: action.payload };
  }
  return state;
}