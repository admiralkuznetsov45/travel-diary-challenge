// reducer.js
import {
  ADD_BOOKMARKS,
  GET_BOOKMARKS,
  REMOVE_BOOKMARKS,
  BOOKMARKS_FETCHED,
  BOOKMARKS_ADDED,
  BOOKMARKS_REMOVED,
} from './constants';

const initialState = {
  bookmarks: [], // Store bookmarks as an array of journey objects
  loading: false,
  error: null,
};

const bookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKMARKS:
    case REMOVE_BOOKMARKS:
    case GET_BOOKMARKS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case BOOKMARKS_FETCHED:
      return {
        ...state,
        loading: false,
        bookmarks: action.payload,
      };
    case BOOKMARKS_ADDED:
      return {
        ...state,
        loading: false,
        bookmarks: [...state.bookmarks, action.payload.journey], // Add the bookmarked journey
      };
    case BOOKMARKS_REMOVED:
      return {
        ...state,
        loading: false,
        bookmarks: state.bookmarks.filter(
          (journey) => journey.id !== action.payload.journeyId
        ), // Remove the bookmarked journey
      };
    default:
      return state;
  }
};

export default bookmarkReducer;
