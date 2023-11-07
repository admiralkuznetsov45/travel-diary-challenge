// homeReducer.js
import { produce } from 'immer';
import { SET_ALL_POSTS_PROFILE } from './constants'; // Import the SET_ALL_POSTS constant

export const initialState = {
  posts: [], // Represents all the posts on the home page
};

const profileReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ALL_POSTS_PROFILE:
        draft.posts = action.posts; // Handle the action to set all posts on the profile page
        break;
      // Add other cases for profile page-related actions if needed
    }
  });

export default profileReducer;
