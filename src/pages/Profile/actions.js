// actions.js
import { GET_ALL_POSTS_PROFILE, SET_ALL_POSTS_PROFILE } from './constants'; // Import the new constants

// Action to get all posts
export const getAllPostsProfile = () => ({
  type: GET_ALL_POSTS_PROFILE,
});

// Action to set all posts
export const setAllPostsProfile = (posts) => ({
  type: SET_ALL_POSTS_PROFILE,
  posts,
});
