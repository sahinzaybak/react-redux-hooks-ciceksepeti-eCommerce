export const fetchAddBasket = (product) => {
  return async dispatch => {
    dispatch({
      type: "FETCH_ADD_BASKET",
      payload: {
        product,
        count:1
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

export function fetchBasketItemActionCount(productCount, productId) {
  debugger;
  return async dispatch => {
    dispatch({
      type: "FETCH_BASKET_ACTION_COUNT_ITEM",
      payload: {
        productCount:productCount,
        productId:productId
      }
    });
  };
}
