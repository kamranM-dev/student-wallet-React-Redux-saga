import { ACTION_TYPES } from '../constants/action-types';

const { FETCH_SCHOLARSHIPS_SUCCESS, FETCH_SCHOLARSHIPS, FETCH_TOP_SCHOLARSHIPS_SUCCESS } = ACTION_TYPES;

export const fetchScholarshipsSuccess = (scholarships) => {
  return {
    type: FETCH_SCHOLARSHIPS_SUCCESS,
    payload: scholarships
  };
};

export const fetchScholarships = (options) => {
  return {
    type: FETCH_SCHOLARSHIPS,
    options
  };
};

export const fetchTopScholarshipsSuccess = (scholarships) => {
  return {
    type: FETCH_TOP_SCHOLARSHIPS_SUCCESS,
    payload: scholarships
  };
};
