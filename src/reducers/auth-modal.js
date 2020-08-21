import {ACTION_TYPES} from '../constants/action-types';
import {SIGNUP_MODE, LOGIN_MODE} from '../constants/signup-modes';

const {DISPLAY_LOGIN_MODAL, DISPLAY_SIGNUP_MODAL, HIDE_AUTH_MODAL} = ACTION_TYPES;

const defaultState = {
  mode: SIGNUP_MODE,
  signUpOpen: false,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case DISPLAY_SIGNUP_MODAL: {
      return {
        mode: SIGNUP_MODE,
        signUpOpen: true,
      };
    }
    case DISPLAY_LOGIN_MODAL: {
      return {
        mode: LOGIN_MODE,
        signUpOpen: true,
      };
    }
    case HIDE_AUTH_MODAL: {
      return {
        mode: SIGNUP_MODE,
        signUpOpen: false,
      };
    }
    default:
      return state;
  }
}
