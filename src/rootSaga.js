import { all } from 'redux-saga/effects'
import registerSaga from '../src/pages/Register/saga'
import loginSaga from './pages/Login/saga'
import homeSaga from './pages/Home/saga'
import allProfilePostsSaga from './pages/Profile/saga'
import watchAddNewPost from './pages/AddNewPost/saga'
import watchPostSaga from './pages/Article/saga'
import bookmarksSaga from './pages/Bookmark/saga'

export default function* rootSaga() {
  yield all([
    registerSaga(),
    loginSaga(),
    homeSaga(),
    allProfilePostsSaga(),
    watchAddNewPost(),
    watchPostSaga(),
    bookmarksSaga()
  ])
}