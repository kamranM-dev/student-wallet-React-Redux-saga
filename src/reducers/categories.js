import {ACTION_TYPES} from '../constants/action-types';

const {FETCH_CATEGORIES_SUCCESS} = ACTION_TYPES;

const defaultState = {
  data: []
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS: {
      return {
        data: action.payload
      };
    }
    default:
      return state;
  }
}
