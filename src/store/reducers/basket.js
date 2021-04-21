const initialState = {
  basketList:[]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ADD_BASKET":
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

    case "GET_BASKET_STORAGE":
      return{
        ...state,
        basketList: action.payload
    }
    default:
      return state;
  }
}