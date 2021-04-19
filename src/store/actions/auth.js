import axios from 'axios'
const BASE_URL = process.env.REACT_APP_API_URL

export const fetchSignIn = (email,password) => {
  return async dispatch => {
    await axios.get(`${BASE_URL}/users`).then(value => {
      const isPermission = value.data[0].users.some(x => x.email == email && x.password == password);
      dispatch({
        type: "FETCH_SIGN_IN_PERMISSION",
        payload: isPermission
      });
    });
  };
}

