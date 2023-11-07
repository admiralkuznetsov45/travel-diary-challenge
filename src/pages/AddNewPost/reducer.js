import { produce } from "immer";
import { ADD_NEW_POST_REQUEST, ADD_NEW_POST_SUCCESS , ADD_NEW_POST_FAILURE } from './content';

const initialState = {
  posts: {},
  loading: false,
  error: null
};

const postReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_NEW_POST_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case ADD_NEW_POST_SUCCESS:
        draft.loading = false;
        draft.posts = action.postData; // Assuming action.payload contains the new post data
        break;
      case ADD_NEW_POST_FAILURE:
        draft.loading = false;
        draft.error = action.payload; // Assuming action.payload contains the error message
        break;
      default:
        break;
    }
  });

export default postReducer;
