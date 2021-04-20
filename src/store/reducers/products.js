const initialState = {
  productList:[],
  productDetail:[]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_LIST":
      return{
        ...state,
        productList: action.payload
      }
    case "FETCH_PRODUCT_DETAIL":
      return{
        ...state,
        productDetail: action.payload
      }
    default:
      return state;
  }
}