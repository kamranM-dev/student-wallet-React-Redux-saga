import {put, takeLatest, takeEvery, select} from 'redux-saga/effects';
import {push} from 'react-router-redux';
import {facebookLogin} from '../api/auth';
import {getLoggedInUserSuccess} from '../actions/user';
import {fetchCommonData} from '../actions/common-data';
import {ROUTES} from '../constants/routes';
import {ACTION_TYPES} from '../constants/action-types';
import {saveUserToken, removeUserToken} from '../utils/storage';
import {hideAuthModal} from "../actions/authModal";

const {LOGOUT, FACEBOOK_LOGIN, FETCH_LOGGED_IN_USER_SUCCESS, FETCH_LOGGED_IN_USER_ERROR} = ACTION_TYPES;

export function* facebookLoginAsync(action) {
  const {payload: {code, accessToken}} = action;
  try {
    const response = yield facebookLogin(code, accessToken);
    const {token, user} = response;
    yield put(getLoggedInUserSuccess(user, token));
    // yield put(push(ROUTES.DASHBOARD));
  } catch (err) {
    // abhi-todo Handle error
    // console.log(err);
  }
}

function* getUserData(action) {
  yield storeToken(action);
  yield put(fetchCommonData());
  yield put(hideAuthModal());
  yield put(push(ROUTES.DASHBOARD));
}

function* storeToken({payload}) {
  const {token} = payload;
  yield saveUserToken(token);
}

function* logout() {
  const state = yield select();
  const {router: {location: {pathname}}} = state;
  if (pathname === ROUTES.DASHBOARD ||
    pathname === ROUTES.USER_INFO_FORM) {
    yield put(push(ROUTES.LANDING_PAGE));
  }
  yield removeUserToken();
}


export function* authAsync() {

  yield takeLatest(FACEBOOK_LOGIN, facebookLoginAsync);
  yield takeEvery(FETCH_LOGGED_IN_USER_SUCCESS, getUserData);
  yield takeEvery([LOGOUT, FETCH_LOGGED_IN_USER_ERROR], logout);
}
