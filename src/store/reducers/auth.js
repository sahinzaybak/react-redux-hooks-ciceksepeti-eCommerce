import {FETCH_SIGN_IN_PERMISSION} from '../constans';
const initialState = {
  loginUserInfo:[],
  isAuth:''
}

export default (state = initialState, action) => {
  let _isAuth;
  switch (action.type) {
    case FETCH_SIGN_IN_PERMISSION:
      if(action.payload != null) _isAuth = true
      return{
        ...state,
        loginUserInfo: action.payload,
        isAuth:_isAuth
      }
    default:
      return state;
  }
}