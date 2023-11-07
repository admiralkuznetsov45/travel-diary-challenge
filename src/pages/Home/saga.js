import { call, put, takeLatest } from "redux-saga/effects";
import { GET_ALL_POSTS } from "./constants"; // Update the action constant
import { fetchAllPosts } from "../../domain/api"; // Import the fetchAllPosts function
import { setAllPosts } from "./actions"; // Update the action to set all posts

export function* doGetAllPosts() { // Update the generator function name
  try {
    const response = yield call(fetchAllPosts); // Use fetchAllPosts to get all posts

    yield put(setAllPosts(response)); // Update the action to set all posts
  } catch (error) {
    console.log(error, "<<< ERROR");
  }
}

export default function* allPostsSaga() { // Update the saga function name
    yield takeLatest(GET_ALL_POSTS , doGetAllPosts); // Update the action constant and generator function name
}
