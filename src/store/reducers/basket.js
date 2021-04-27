import {
  FETCH_ADD_BASKET, 
  BASKET_ITEM_DELETE,
  FETCH_BASKET_ACTION_COUNT_ITEM,
  FETCH_BASKET_CLEAR, 
  GET_BASKET_STORAGE,
  ACTIVE_SHADOW,
  BASKET_LIST_OPEN,
  SEARCH_LIST_RESULT_OPEN
} 
from '../constans';
const initialState = {
  basketList:[],
  activeBasketList:false,
  activeShadow:false,
  searchListOpen:false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADD_BASKET:
      if(JSON.parse(localStorage.getItem("basket") == null)){
        return{
          ...state,
          basketList: [...state.basketList, action.payload] 
        }
      }
      else{
        return{
          ...state,
          basketList: [...JSON.parse(localStorage.getItem("basket")), action.payload]
        }
      }
    case BASKET_ITEM_DELETE:
      const newBasketList = [...state.basketList]
      debugger;
      newBasketList.splice(action.payload, 1);
      return{
        ...state,
        basketList: newBasketList 
    }
    case FETCH_BASKET_ACTION_COUNT_ITEM:
      const defaultBasketList = [...state.basketList]
      defaultBasketList.forEach(_basketList => {
        if(_basketList.product.id == action.payload.productId){
          _basketList.count = action.payload.productCount
          _basketList.product.price = action.payload.newPrice
        } 
      });
      return{
        ...state,
        basketList: [...state.basketList] 
      }

    case FETCH_BASKET_CLEAR:
      return{
        ...state,
        basketList: action.payload
    }

    case GET_BASKET_STORAGE:
      return{
        ...state,
        basketList: action.payload
      }
    case ACTIVE_SHADOW:
      return{
        ...state,
        activeShadow: action.payload
      }
    case BASKET_LIST_OPEN:
      return{
        ...state,
        activeBasketList: action.payload
      }
    case SEARCH_LIST_RESULT_OPEN:
      return{
        ...state,
        searchListOpen: action.payload
    }

    default:
      return state;
  }
}