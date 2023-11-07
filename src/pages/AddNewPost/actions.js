import { ADD_NEW_POST_REQUEST , ADD_NEW_POST_SUCCESS , ADD_NEW_POST_FAILURE } from "./content";

// Action Creators
export const addNewPostRequest = (postData) => ({
    type: ADD_NEW_POST_REQUEST,
    payload: postData
  });
  
  export const addNewPostSuccess = (post) => ({
    type: ADD_NEW_POST_SUCCESS,
    payload: post
  });
  
  export const addNewPostFailure = (error) => ({
    type: ADD_NEW_POST_FAILURE,
    payload: error
  });