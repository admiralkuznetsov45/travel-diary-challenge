// actions.js
import {
  GET_BOOKMARKS,
  ADD_BOOKMARKS,
  REMOVE_BOOKMARKS,
  BOOKMARKS_FETCHED,
  BOOKMARKS_ADDED,
  BOOKMARKS_REMOVED,
} from './constants';

export const getBookmarks = () => ({
  type: GET_BOOKMARKS,
});

export const addBookmark = (journey) => ({
  type: ADD_BOOKMARKS,
  payload: { journey },
});

export const removeBookmark = (journeyId) => ({
  type: REMOVE_BOOKMARKS,
  payload: { journeyId },
});

export const bookmarksFetched = (bookmarks) => ({
  type: BOOKMARKS_FETCHED,
  payload: bookmarks,
});

export const bookmarkAdded = (journeyId) => ({
  type: BOOKMARKS_ADDED,
  payload: { journeyId },
});

export const bookmarkRemoved = (journeyId) => ({
  type: BOOKMARKS_REMOVED,
  payload: { journeyId },
});
