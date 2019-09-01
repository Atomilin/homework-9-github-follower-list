import { takeLatest, select, put, call, fork } from 'redux-saga/effects';

import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getApiKey } from '../Auth';
import { getFollowersInfo } from './api';

function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest, fetchFollowersFlow); // Замените вопросительный знак на подходящий экшен
}

export function* fetchFollowersFlow(action) {
  // Реализуйте загрузку данных
  // Используйте экшены FETCH_SUCCESS / FETCH_FAILURE
  try {
    const data = yield call(
      getFollowersInfo,
      yield select(getApiKey),
      action.payload
    );
    yield put(fetchSuccess(data));
  } catch (error) {
    yield put(fetchFailure(error));
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
