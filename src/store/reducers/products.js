const initialState = {
  productList:[],
  productDetail:[],
  filteredProductList: [],
  searchedProductList:[]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_LIST":
      return{
        ...state,
        productList: action.payload,
        filteredProductList: action.payload
      }
    case "FETCH_PRODUCT_DETAIL":
      return{
        ...state,
        productDetail: action.payload
      }
    case "FETCH_PRODUCT_FILTER":
      const filteredProductList = state.filteredProductList.filter(product => product.category == action.payload)
      return{
        ...state,
        productList: filteredProductList
      }
    case "FETCH_SEARCHED_PRODUCT":
      return{
        ...state,
        searchedProductList: action.payload
      }
      case "SEARCH_LIST_CLEAR":
        return{
          ...state,
          searchedProductList: action.payload
        }
    default:
      return state;
  }
}