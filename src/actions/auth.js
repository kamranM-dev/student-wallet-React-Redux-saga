import {ACTION_TYPES} from '../constants/action-types';

const {FACEBOOK_LOGIN, LOGOUT} = ACTION_TYPES;

export const facebookLogin = (code, accessToken) => {
  return {
    type: FACEBOOK_LOGIN,
    payload: {
      code, accessToken
    }
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};
