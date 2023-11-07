// actions.js
import { GET_ALL_POSTS, SET_ALL_POSTS } from './constants'; // Import the new constants

// Action to get all posts
export const getAllPosts = () => ({
  type: GET_ALL_POSTS,
});

// Action to set all posts
export const setAllPosts = (posts) => ({
  type: SET_ALL_POSTS,
  posts,
});


