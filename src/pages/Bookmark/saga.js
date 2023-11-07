// saga.js
import { put, takeLatest, call } from 'redux-saga/effects';
import {
  GET_BOOKMARKS,
  ADD_BOOKMARKS,
  REMOVE_BOOKMARKS,
} from './constants';
import {
  getBookmarks,
  addBookmarkAPI,
  removeBookmarkAPI,
} from '../../domain/api';
import {
  bookmarksFetched,
  bookmarkAdded,
  bookmarkRemoved,
} from './actions';

function* getBookmarksSaga() {
  try {
    const bookmarks = yield call(getBookmarks);
    yield put(bookmarksFetched(bookmarks));
  } catch (error) {
    // Handle errors here
  }
}

// saga.js
function* addBookmarkSaga(action) {
  try {
    const { journey } = action.payload;
    yield call(addBookmarkAPI, journey);
    yield put(bookmarkAdded(journey.id));
  } catch (error) {
    // Handle errors here
  }
}

function* removeBookmarkSaga(action) {
  try {
    const { journeyId } = action.payload;
    yield call(removeBookmarkAPI, journeyId);
    yield put(bookmarkRemoved(journeyId));
  } catch (error) {
    // Handle errors here
  }
}

function* bookmarksSaga() {
  yield takeLatest(GET_BOOKMARKS, getBookmarksSaga);
  yield takeLatest(ADD_BOOKMARKS, addBookmarkSaga);
  yield takeLatest(REMOVE_BOOKMARKS, removeBookmarkSaga);
}

export default bookmarksSaga;
