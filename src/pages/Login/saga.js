import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN_USER } from './constants';
import { loginUser } from '../../domain/api';
import { setLoggedInUser, setIsLogged } from './actions';
// import data from '../../../data.json'; // Import your data.json file, adjust the path as needed

function* doLoginUser({ email, password, callback }) {
  try {
    console.log(email, password, 'Email dan Password Login Saga');
    
    // Make the API call to log in the user
    const response = yield call(loginUser, email, password);
    
    console.log(response, 'RESPONSE AWAL');

    // Check if the response contains a user with the provided email and password
    const user = response.find((user) => user.email === email && user.password === password);

    if (user) {
      // Dispatch action to set the logged-in user
      yield put(setLoggedInUser(user));
      localStorage.setItem('user' , JSON.stringify(user))
      // Dispatch action to set the isLogged flag to true
      yield put(setIsLogged(true));
      
      // Use the navigate function to redirect after successful login
      if (callback) {
        callback();
      }
    } else {
      // Handle the case when email and password do not match any user
      alert('Invalid email or password');
      // You can dispatch an action or handle the error in another way
    }
  } catch (error) {
    console.error('Error during login:', error);
    // Handle any unexpected errors here
    // You can dispatch an action to handle error states if needed
  }
}

export default function* loginSaga() {
  yield takeLatest(LOGIN_USER, doLoginUser);
}
