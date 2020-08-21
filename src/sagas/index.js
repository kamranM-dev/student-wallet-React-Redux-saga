import { all } from 'redux-saga/effects';

import { authAsync } from './auth';
import { userAsync, additionalDataAsync, deleteUserAsync } from './user';
import { setCommonDataAsync } from './common-data';
import { setScholarshipsAsync } from './scholarships';

export default function* rootSaga () {
  yield all([
    authAsync(),
    userAsync(),
    additionalDataAsync(),
    deleteUserAsync(),
    setCommonDataAsync(),
    setScholarshipsAsync(),
  ]);
}
