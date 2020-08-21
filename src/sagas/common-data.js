import { getCategories, getSubCategories, getGenders } from '../api/common-data';
import {ACTION_TYPES} from '../constants/action-types';
import { fetchCategoriesSuccess, fetchSubCategoriesSuccess, fetchGendersSuccess } from '../actions/common-data';
import {put, takeEvery, all} from 'redux-saga/effects';

const { FETCH_COMMON_DATA } = ACTION_TYPES;

export function* getCommonDataAsync () {
  try {
    const [categories, subcategories, genders] = yield all([getCategories(), getSubCategories(), getGenders()]);
    yield put(fetchCategoriesSuccess(categories));
    yield put(fetchSubCategoriesSuccess(subcategories));
    yield put(fetchGendersSuccess(genders));
  } catch (err) {
    // abhi-todo Handle error
    // console.log(err);
  }
}

export function* setCommonDataAsync () {
  yield takeEvery(FETCH_COMMON_DATA, getCommonDataAsync);
}
