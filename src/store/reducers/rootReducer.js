import {combineReducers} from 'redux'
import auth from './auth'
import products from './products'
import categories from './categories'
import basket from './basket'
import previousOrder from './previousOrder'

export default combineReducers({
  auth,
  products,
  categories,
  basket,
  previousOrder
})