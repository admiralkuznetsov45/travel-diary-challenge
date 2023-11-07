import { call, put, takeLatest } from "redux-saga/effects";
import { REGISTER_USER } from "./constants";
import { registerUser } from "../../domain/api";
import { setNewUser } from "./actions";

export function* doRegisterUser({ userData }) {
  try {
    const response = yield call(registerUser, userData);
    yield put(setNewUser(response));
    alert('Register Berhasil Ditambahkan')
  } catch (error) {
    console.log(error, "<<< ERROR");
  }
}

export default function* registerSaga() {
    yield takeLatest(REGISTER_USER , doRegisterUser)
}