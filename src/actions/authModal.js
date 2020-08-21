import {ACTION_TYPES} from '../constants/action-types';

const { DISPLAY_SIGNUP_MODAL, DISPLAY_LOGIN_MODAL, HIDE_AUTH_MODAL } = ACTION_TYPES;


export const displaySignupModal = () => {
  return {
    type: DISPLAY_SIGNUP_MODAL
  };
};

export const displayLoginModal = () => {
  return {
    type: DISPLAY_LOGIN_MODAL
  };
};

export const hideAuthModal = () => {
  return {
    type: HIDE_AUTH_MODAL
  };
};

