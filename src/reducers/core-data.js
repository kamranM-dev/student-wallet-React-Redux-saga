import {ACTION_TYPES} from '../constants/action-types';

const {FETCH_GENDERS_SUCCESS, FETCH_SUBCATEGORIES_SUCCESS, FETCH_CATEGORIES_SUCCESS} = ACTION_TYPES;

const defaultState = {
  genders: [],
  subcategories: [],
  categories: []
};

const mapping = {
  [FETCH_GENDERS_SUCCESS]: 'genders',
  [FETCH_SUBCATEGORIES_SUCCESS]: 'subcategories',
  [FETCH_CATEGORIES_SUCCESS]: 'categories'
};

export default function (state = defaultState, action) {
  const prop = mapping[action.type];
  if (prop && action.payload) {
    return {
      ...state,
      [prop]: action.payload
    };
  }
  return state;
}
