import {ACTION_TYPES} from '../constants/action-types';
const {TOGGLE_HEADER_LINKS_VISIBILITY, SET_HEADER_LINKS} = ACTION_TYPES;

export const toggleHeaderLinksVisibility = () => {
  return {
    type: TOGGLE_HEADER_LINKS_VISIBILITY
  };
};

export const hideHeaderLinks = () => {
  return {
    type: SET_HEADER_LINKS,
    visibility: false
  };
};

export const showHeaderLinks = () => {
  return {
    type: SET_HEADER_LINKS,
    visibility: true
  };
};
