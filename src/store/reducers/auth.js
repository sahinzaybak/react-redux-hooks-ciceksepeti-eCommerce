const initialState = {
  isSıgnIn:''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SIGN_IN_PERMISSION":
      return{
        ...state,
        isSıgnIn: action.payload
      }
    default:
      return state;
  }
}