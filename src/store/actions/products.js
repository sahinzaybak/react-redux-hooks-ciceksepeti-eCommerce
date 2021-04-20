import axios from 'axios'
const BASE_URL = process.env.REACT_APP_API_URL

export const fetchProductList = () => {
  return async dispatch => {
    await axios.get(`${BASE_URL}/products`).then(value => {
      dispatch({
        type: "FETCH_PRODUCT_LIST",
        payload: value.data
      });
    });
  };
}

export const fetchProductDetail = (slug) => {
  return async dispatch => {
    await axios.get(`${BASE_URL}/product-detail?slug=${slug}`).then(value => {
      dispatch({
        type: "FETCH_PRODUCT_DETAIL",
        payload: value.data
      });
    });
  };
}

