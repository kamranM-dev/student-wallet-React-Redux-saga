import {ACTION_TYPES} from '../constants/action-types';

const {TOGGLE_HEADER_LINKS_VISIBILITY, SET_HEADER_LINKS, DISPLAY_SIGNUP_MODAL, DISPLAY_LOGIN_MODAL} = ACTION_TYPES;

export default function (isVisible = false, action) {
  switch (action.type) {
    case TOGGLE_HEADER_LINKS_VISIBILITY: {
      return !isVisible;
    }
    case DISPLAY_SIGNUP_MODAL: {
      return false;
    }
    case DISPLAY_LOGIN_MODAL: {
      return false;
    }
    case SET_HEADER_LINKS: {
      return action.visibility;
    }
    default:
      return isVisible;
  }
}
