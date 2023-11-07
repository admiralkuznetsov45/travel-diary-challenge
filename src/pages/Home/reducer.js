// homeReducer.js
import { produce } from 'immer';
import { SET_ALL_POSTS  } from './constants'; // Import the SET_ALL_POSTS constant

export const initialState = {
  posts: [], // Represents all the posts on the home page
};

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ALL_POSTS:
        console.log(action, '<<< POSTS')
        draft.posts = action.posts; // Handle the action to set all posts on the home page
        break;

      
      // Add other cases for home page-related actions if needed
    }
  });

export default homeReducer;
