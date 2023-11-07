import { call, put, takeLatest } from 'redux-saga/effects';
import { addNewPostSuccess, addNewPostFailure } from './actions'; // Import addNewPostFailure action creator
import { ADD_NEW_POST_REQUEST } from './content';
import { addNewPost } from '../../domain/api.js';

function* doaddNewPostSaga(action) {
  try {
    const response = yield call(addNewPost, action.payload);
    yield put(addNewPostSuccess(response.data));
    alert('Data Berhasil Ditambah')
  } catch (error) {
    yield put(addNewPostFailure(error.message)); // Dispatch the failure action with the error message
    alert('Gagal Berhasil Ditambah')

  }
}

function* watchAddNewPost() {
  yield takeLatest(ADD_NEW_POST_REQUEST, doaddNewPostSaga);
}

export default watchAddNewPost;
