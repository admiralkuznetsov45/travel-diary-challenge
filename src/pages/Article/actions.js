import { FETCH_POST_BY_ID_REQUEST, FETCH_POST_BY_ID_SUCCESS, FETCH_POST_BY_ID_FAILURE } from './constants'; // Import the new constants

export const fetchPostRequest = (postId) => ({
    type: FETCH_POST_BY_ID_REQUEST,
    payload: postId,
  });
  
  export const fetchPostSuccess = (post) => ({
    type: FETCH_POST_BY_ID_SUCCESS,
    payload: post,
  });
  
  export const fetchPostFailure = (error) => ({
    type: FETCH_POST_BY_ID_FAILURE,
    payload: error,
  });