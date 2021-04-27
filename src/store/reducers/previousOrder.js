import {
  FETCH_PREVIOUS_ORDER, 
  FETCH_PREV_ORDER_STORAGE,
  FETCH_PREV_CLEAR
} 
from '../constans';

const initialState = {
  previousOrderList:[],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PREVIOUS_ORDER:
      return{
        ...state,
        previousOrderList: [...state.previousOrderList, action.payload]
      }

    case FETCH_PREV_ORDER_STORAGE:
      return{
        ...state,
        previousOrderList: action.payload
      }

    case FETCH_PREV_CLEAR:
      return{
        ...state,
        previousOrderList: action.payload
    }
    default:
      return state;
  }
}