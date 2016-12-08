/**
 * Created by acer on 11/29/2016.
 */
import {call, put, select} from "redux-saga/effects";
import ApiUsers from "../api/user";
import { browserHistory } from 'react-router';

export function* userSignin(action) {
  try{
    const user = yield call(ApiUsers.signin,action);
    yield put({
          type: 'SIGNIN_SUCCESS',
          payload: user.data,
    });
  }
  catch(error) {
    alert("your password or email incorrect! please try agian.");
    browserHistory.push('/');
  }
}

export function* loadUsers(action){
  try{
    console.log("saga receive action", action);
    const users = yield call(ApiUsers.fetchUsers,action);
    yield put({
      type: 'LOAD_USER_SUCCESS',
      payload: users.data,
    });
  }
  catch(error){
    alert("Please check your internet connection");
  }
}

export function* findOneUser(action){
  try{
    console.log("saga receive action", action);
    const user = yield call(ApiUsers.fetchOneUser, action);
    yield put({
      type: 'FIND_ONE_USER_SUCCESS',
      payload: user.data,
    });
  }
  catch(error){
    alert("Please check your internet connection");
  }
}

export function* editUser(action){
  console.log("saga receive action", action);
  const update = yield call(ApiUsers.modidifyUser, action);
  const users = yield call(ApiUsers.fetchUsers,action);
  yield put({
    type: 'LOAD_USER_SUCCESS',
    payload: users.data,
  });
}
