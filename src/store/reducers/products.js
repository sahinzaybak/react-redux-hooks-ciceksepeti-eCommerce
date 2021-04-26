import {
  FETCH_PRODUCT_LIST, 
  FETCH_PRODUCT_DETAIL,
  FETCH_PRODUCT_FILTER,
  IS_CATEGORY_FILTERED, 
  FETCH_SEARCHED_PRODUCT,
  SEARCH_LIST_CLEAR,
  PRODUCT_LIST_CLEAR,
  PRODUCT_DETAIL_CLEAR
} 
from '../constans';

const initialState = {
  productList:[],
  productDetail:[],
  filteredProductList: [],
  searchedProductList:[],
  isFilterProduct:false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_LIST:
      return{
        ...state,
        productList: action.payload,
        filteredProductList: action.payload
      }
    case FETCH_PRODUCT_DETAIL:
      return{
        ...state,
        productDetail: action.payload
      }
    case FETCH_PRODUCT_FILTER:
      let filteredProductList
      action.payload == "AllCategories" ?  filteredProductList = state.filteredProductList 
      :      
      filteredProductList = state.filteredProductList.filter(product => product.category == action.payload)
      return{
        ...state,
        productList: filteredProductList,
      }
      case IS_CATEGORY_FILTERED:
      return{
        ...state,
        isFilterProduct: action.payload
      }
    case FETCH_SEARCHED_PRODUCT:
      return{
        ...state,
        searchedProductList: action.payload
      }
    case SEARCH_LIST_CLEAR:
      return{
        ...state,
        searchedProductList: action.payload
      }
    case PRODUCT_LIST_CLEAR:
      return{
        ...state,
        productList: action.payload
      }
    case PRODUCT_DETAIL_CLEAR:
      return{
        ...state,
        productDetail: action.payload
      }
    default:
      return state;
  }
}