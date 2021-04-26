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
      let filteredProductList
      action.payload == "AllCategories" ?  filteredProductList = state.filteredProductList 
      :      
      filteredProductList = state.filteredProductList.filter(product => product.category == action.payload)
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
    case "PRODUCT_LIST_CLEAR":
      return{
        ...state,
        productList: action.payload
      }
    case "PRODUCT_DETAIL_CLEAR":
      return{
        ...state,
        productDetail: action.payload
      }
    default:
      return state;
  }
}