export function previousOrder(basketList, todayDate, totalPrice) {
  return async dispatch => {
    dispatch({
      type: "FETCH_PREVIOUS_ORDER",
      payload:  {
        orderList: basketList,
        totalPrice: totalPrice,
        orderDate: todayDate, 
      }
    });
  };
}

export function previousOrderStorage() {
  return async dispatch => {
    dispatch({
      type: "FETCH_PREV_ORDER_STORAGE",
      payload: JSON.parse(localStorage.getItem("previous-order"))
    });
  };
}
