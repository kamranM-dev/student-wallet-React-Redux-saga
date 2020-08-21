import {ACTION_TYPES} from '../constants/action-types';

const {FETCH_LOGGED_IN_USER, FETCH_LOGGED_IN_USER_SUCCESS, UPDATE_USER_ADDITIONAL_INFO, UPDATE_USER_ADDITIONAL_INFO_SUCCESS, DELETE_USER} = ACTION_TYPES;

export const getLoggedInUser = (token) => {
  return {
    type: FETCH_LOGGED_IN_USER,
    token: token
  };
};

export const getLoggedInUserSuccess = (user, token) => {
  return {
    type: FETCH_LOGGED_IN_USER_SUCCESS,
    payload: {user, token}
  };
};


export const updateAdditionalInfo = payload => {
  return {
    type: UPDATE_USER_ADDITIONAL_INFO,
    payload
  };
};

export const updateAdditionalInfoSuccess = payload => {
  return {
    type: UPDATE_USER_ADDITIONAL_INFO_SUCCESS,
    payload
  };
};

export const deleteUser = () => {
  return {
    type: DELETE_USER
  };
};
