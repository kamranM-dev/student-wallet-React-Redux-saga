import {put, takeLatest, select, call} from 'redux-saga/effects';
import {ACTION_TYPES} from '../constants/action-types';
import {deleteUserAccount, getLoggedInUser, updateAdditionalInfo} from '../api/user';
import {getLoggedInUserSuccess, updateAdditionalInfoSuccess} from '../actions/user';
import {fetchScholarships} from "../actions/scholarships";
import {logout} from "../actions/auth";

const {FETCH_LOGGED_IN_USER, FETCH_LOGGED_IN_USER_ERROR, UPDATE_USER_ADDITIONAL_INFO, UPDATE_USER_ADDITIONAL_INFO_ERROR, DELETE_USER} = ACTION_TYPES;

export function* fetchUser(action) {
  const {token} = action;
  try {
    const response = yield getLoggedInUser(token);
    yield put(getLoggedInUserSuccess(response.user, token));
  } catch (err) {
    console.log(err);
    yield put({type: FETCH_LOGGED_IN_USER_ERROR});
  }
}

export function* userAsync() {
  yield takeLatest(FETCH_LOGGED_IN_USER, fetchUser);
}


export function* updateUserAdditionalData(action) {
  const {payload} = action;
  try {
    const state = yield select();
    const response = yield updateAdditionalInfo(payload, state.user.token);
    yield put(updateAdditionalInfoSuccess(response.user));
    yield put(fetchScholarships({}))
  } catch (err) {
    yield put({type: UPDATE_USER_ADDITIONAL_INFO_ERROR});
  }
}

export function* additionalDataAsync() {
  yield takeLatest(UPDATE_USER_ADDITIONAL_INFO, updateUserAdditionalData);
}

export function* deleteUserFlow() {
  try {
    const state = yield select();
    yield call(deleteUserAccount, state.user.token);
    yield put(logout());
  } catch (err) {
    yield put({type: UPDATE_USER_ADDITIONAL_INFO_ERROR});
  }
}

export function* deleteUserAsync() {
  yield takeLatest(DELETE_USER, deleteUserFlow);
}

