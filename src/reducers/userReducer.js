import {ACTION_TYPES} from '../constants/action-types';

const {LOGOUT, FETCH_LOGGED_IN_USER_SUCCESS, UPDATE_USER_ADDITIONAL_INFO_SUCCESS} = ACTION_TYPES;

export const defaultUser = {
  first_name: '',
  last_name: '',
  user_email: '',
  location: '',
  university: '',
  degree: '',
  fb_login : false
};

const defaultState = {
  data: defaultUser,
  isFetching: false,
  token: null
};
export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_LOGGED_IN_USER_SUCCESS: {
      const user = action.payload.user;
      const loggedInUser = Array.isArray(user) ? user[0] : user;
      return {
        ...state,
        data: {
          ...state.data,
          ...loggedInUser
        },
        isFetching: false,
        token: action.payload.token
      };
    }
    case UPDATE_USER_ADDITIONAL_INFO_SUCCESS: {
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload
        },
      };
    }
    case LOGOUT: {
      return defaultState;
    }
    default:
      return state;
  }
}
