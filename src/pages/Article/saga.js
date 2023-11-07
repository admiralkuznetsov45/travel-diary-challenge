import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchPostById } from '../../domain/api';
import { FETCH_POST_BY_ID_REQUEST } from './constants';
import { fetchPostSuccess, fetchPostFailure } from './actions';

function* fetchPostSaga(action) {
  try {
    console.log(action , 'action fetch by id ')
    const post = yield call(fetchPostById, action.payload);
    console.log(post , 'Hasil Post nya')
    yield put(fetchPostSuccess(post));
  } catch (error) {
    yield put(fetchPostFailure(error.toString()));
  }
}

export default function* watchPostSaga() {
  yield takeEvery(FETCH_POST_BY_ID_REQUEST, fetchPostSaga);
}
