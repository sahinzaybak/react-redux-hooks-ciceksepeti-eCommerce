const initialState = {
  basketList:[],
  activeBasketList:false,
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

    case "BASKET_LIST_OPEN":
      return{
        ...state,
        activeBasketList: action.payload
    }

    case "BASKET_ITEM_DELETE":
      const newBasketList = [...state.basketList]
      newBasketList.splice(action.payload, 1);
      return{
        ...state,
        basketList: newBasketList 
    }

    case "FETCH_BASKET_ACTION_COUNT_ITEM":
      const defaultBasketList = [...state.basketList]
      defaultBasketList.forEach(element => {
        if(element.product.id == action.payload.productId){
          element.count = action.payload.productCount
          element.product.price = action.payload.newPrice
        } 
      });
      return{
        ...state,
        basketList: [...state.basketList] 
      }

    default:
      return state;
  }
}