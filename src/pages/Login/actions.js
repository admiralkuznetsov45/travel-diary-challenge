import {LOGIN_USER, SET_LOGGED_IN_USER} from './constants'

export const loginUser = (email , password , callback) => ({
    type : LOGIN_USER,
    email,
    password,
    callback
})

// Action to set the logged-in user
export const setLoggedInUser = (userData) => ({
    type: SET_LOGGED_IN_USER, // You need to define this action type
    userData,
  });
  
  // Action to set the isLogged flag
  export const setIsLogged = (isLogged) => ({
    type: SET_LOGGED_IN_USER,
    isLogged,
  });