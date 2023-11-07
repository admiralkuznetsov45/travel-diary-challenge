import {REGISTER_USER} from './constants'
import { SET_NEW_USER } from './constants'; // Update the constant name


export const registerUser = (userData) => ({
    type:REGISTER_USER,
    userData
})

export const setNewUser = (userData) => ({ // Change the action creator name
    type: SET_NEW_USER,
    userData
  });