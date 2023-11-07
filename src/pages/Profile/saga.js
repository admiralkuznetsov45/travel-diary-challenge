import { call, put, takeLatest } from "redux-saga/effects";
import { GET_ALL_POSTS_PROFILE } from "./constants"; // Update the action constant
import { fetchAllPostsProfile } from "../../domain/api"; // Import the fetchAllPosts function
import { setAllPostsProfile } from "./actions"; // Update the action to set all posts

export function* doGetAllPostsProfile() { // Update the generator function name
  try {
    const response = yield call(fetchAllPostsProfile); // Use fetchAllPosts to get all posts
    yield put(setAllPostsProfile(response)); // Update the action to set all posts
  } catch (error) {
    console.log(error, "<<< ERROR");
  }
}

export default function* allProfilePostsSaga() { // Update the saga function name
    yield takeLatest(GET_ALL_POSTS_PROFILE , doGetAllPostsProfile); // Update the action constant and generator function name
}
