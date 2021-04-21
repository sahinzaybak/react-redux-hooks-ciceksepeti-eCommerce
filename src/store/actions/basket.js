export const fetchAddBasket = (product) => {
  return async dispatch => {
    dispatch({
      type: "FETCH_ADD_BASKET",
      payload: product
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

