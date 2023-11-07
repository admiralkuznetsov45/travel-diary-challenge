import { produce } from 'immer';
import { SET_NEW_USER } from './constants';

export const initialState = {
    users: [], // Represents the newly registered user
  };
  
  const registerReducer = (state = initialState, action) =>
    produce(state, (draft) => {
      switch (action.type) {
        case SET_NEW_USER:
          draft.users = action.userData;
          break;
        // Add other cases for registration-related actions if needed
      }
    });
  
  export default registerReducer;