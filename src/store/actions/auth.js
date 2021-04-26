import axios from 'axios'
import {FETCH_SIGN_IN_PERMISSION } from '../constans';
const BASE_URL = process.env.REACT_APP_API_URL

export const fetchSignIn = (email,password) => {
  return async dispatch => {
    await axios.get(`${BASE_URL}/users`).then(value => {
      const isLoginUserInfo = value.data.find(x => x.email == email && x.password == password);
      dispatch({
        type: FETCH_SIGN_IN_PERMISSION,
        payload: isLoginUserInfo
      });
    });
  };
}

export const fetchSameUserControl = (email) => {
  let isSameUserControl;
  return async function () {
    await axios.get(`${BASE_URL}/users`).then(value => {
      isSameUserControl = value.data.some(x => x.email == email); // Girilen mail adresi ile başka üye var mı kontrol et varsa üye olmaya izin verme..
    });
    return isSameUserControl 
  };
}

export const fetchSignUp = (userName,email,password) => {
  let returnValue;
  return async function() {
    await axios.post(`${BASE_URL}/users`, {
      name: userName,
      email: email,
      password: password
    }).then(value => {
      if(value.status == 201)
        returnValue = value.statusText
    })
    return returnValue
  }
}


