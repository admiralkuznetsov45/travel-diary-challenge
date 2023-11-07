import { produce } from 'immer';
import { LOGIN_USER , SET_LOGGED_IN_USER} from './constants';

export const initialState = {
    loggedInUser: null
  };
  
  const loginReducer = (state = initialState, action) =>
    produce(state, (draft) => {
      switch (action.type) {
        case SET_LOGGED_IN_USER:
            console.log(action.userData , 'action userData')
            draft.loggedInUser = action.userData;
        break;
        // Add other cases for registration-related actions if needed
      }
    });
  
  export default loginReducer;