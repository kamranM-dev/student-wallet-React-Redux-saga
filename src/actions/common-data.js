import {ACTION_TYPES} from '../constants/action-types';

const { FETCH_COMMON_DATA, FETCH_CATEGORIES_SUCCESS, FETCH_SUBCATEGORIES_SUCCESS, FETCH_GENDERS_SUCCESS } = ACTION_TYPES;

export const fetchCommonData = () => {
  return {
    type: FETCH_COMMON_DATA
  };
};

export const fetchGendersSuccess = (genders) => {
  return {
    type: FETCH_GENDERS_SUCCESS,
    payload: genders
  };
};

export const fetchCategoriesSuccess = (categories) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories
  };
};

export const fetchSubCategoriesSuccess = (subcategories) => {
  return {
    type: FETCH_SUBCATEGORIES_SUCCESS,
    payload: subcategories
  };
};
