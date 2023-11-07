// reducer.js
import { FETCH_POST_BY_ID_REQUEST, FETCH_POST_BY_ID_SUCCESS, FETCH_POST_BY_ID_FAILURE} from './constants';

const initialState = {
  post: {},
  loading: false,
  error: null,
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_POST_BY_ID_SUCCESS:
    console.log(action , 'Hasil Action')
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case FETCH_POST_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        post: {},
      };
    default:
      return state;
  }
};

export default articleReducer;
