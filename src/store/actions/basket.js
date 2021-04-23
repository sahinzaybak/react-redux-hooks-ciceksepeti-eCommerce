export const fetchAddBasket = (product, defaultPrice) => {
  return async dispatch => {
    dispatch({
      type: "FETCH_ADD_BASKET",
      payload: {
        product,
        defaultPrice:defaultPrice,
        count:1,
      }
    });
  };
}

export function getBasketStorage() {
  return async dispatch => {
    dispatch({
      type: "GET_BASKET_STORAGE",
      payload: JSON.parse(localStorage.getItem("basket"))
    });
  };
}

export function fetchBasketItemActionCount(newPrice, productCount, productId, defaultPrice) {
  return async dispatch => {
    dispatch({
      type: "FETCH_BASKET_ACTION_COUNT_ITEM",
      payload: {
        newPrice:newPrice,
        productCount:productCount,
        productId:productId,
      }
    });
  };
}
