import { combineReducers } from "redux";
import registerReducer from "../src/pages/Register/reducer";
import loginReducer from "./pages/Login/reducer";
import profileReducer from './pages/Profile/reducer'
import homeReducer from './pages/Home/reducer'
import postReducer from "./pages/AddNewPost/reducer";
import articleReducer from "./pages/Article/reducer";
import bookmarkReducer from "./pages/Bookmark/reducer";
const rootReducer = combineReducers({
  registerReducer: registerReducer,
  loginReducer: loginReducer,
  homeReducer: homeReducer,
  profileReducer: profileReducer,
  postReducer:postReducer,
  articleReducer:articleReducer,
  bookmarkReducer:bookmarkReducer
  
});

export default rootReducer;