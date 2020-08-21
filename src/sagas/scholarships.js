import {getScholarships, getTopScholarships} from '../api/scholarships';
import {ACTION_TYPES} from '../constants/action-types';
import {fetchScholarshipsSuccess, fetchTopScholarshipsSuccess} from '../actions/scholarships';
import {put, takeLatest, call, select} from 'redux-saga/effects';

const {FETCH_SCHOLARSHIPS} = ACTION_TYPES;

export function* getScholarshipsAsync({options = {}}) {
  const state = yield select();
  try {
    const scholarships = yield call(getScholarships, options);
    if (!options.category) {
      const topScholarships = yield call(getTopScholarships, state.user.data);
      yield put(fetchTopScholarshipsSuccess(topScholarships));
    }
    yield put(fetchScholarshipsSuccess(scholarships.slice(0, 50)));
  } catch (err) {
    // abhi-todo Handle error
    console.log(err);
  }
}

export function* setScholarshipsAsync() {
  yield takeLatest(FETCH_SCHOLARSHIPS, getScholarshipsAsync);
}
