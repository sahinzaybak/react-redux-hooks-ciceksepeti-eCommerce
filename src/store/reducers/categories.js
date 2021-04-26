import {FETCH_CATEGORY_LIST} from '../constans';
const initialState = {
  categoryList:[]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_LIST:
      return{
        ...state,
        categoryList: action.payload
      }
    default:
      return state;
  }
}