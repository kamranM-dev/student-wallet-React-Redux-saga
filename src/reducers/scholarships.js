import {ACTION_TYPES} from '../constants/action-types';

const {FETCH_SCHOLARSHIPS_SUCCESS, FETCH_TOP_SCHOLARSHIPS_SUCCESS} = ACTION_TYPES;

const defaultState = {
  all: [],
  top: [],
  initialLoad: true
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_SCHOLARSHIPS_SUCCESS: {
      return {
        ...state,
        all: action.payload,
        initialLoad: false
      };
    }
    case FETCH_TOP_SCHOLARSHIPS_SUCCESS: {
      return {
        ...state,
        top: action.payload
      };
    }
    default:
      return state;
  }
}
