import React, {useEffect}from 'react';
import {useSelector, useDispatch} from 'react-redux'
import shoppBag from '../../assets/images/shop-bag.svg'

//Actions
import {getBasketStorage} from '../../store/actions/basket'
import {previousOrderStorage} from '../../store/actions/previousOrder'

let basketList,previousOrderList
const Basket = () => {
  const dispatch = useDispatch() 
  basketList = useSelector(state => state.basket.basketList)
  previousOrderList = useSelector(state => state.previousOrder.previousOrderList)

  if(basketList.length != 0)
    localStorage.setItem("basket", JSON.stringify(basketList)) // state basketList yenilendiğinde localStorage'de yenilenir.

  if(previousOrderList.length != 0)
     localStorage.setItem("previous-order", JSON.stringify(previousOrderList)); //state prevOrderList yenilendiğinde localStorage'de yenilenir.

  useEffect(() => {
    if(JSON.parse(localStorage.getItem("basket")) != null) //localStorge basket bilgilerini al ve basketList state'ni doldur.
      dispatch(getBasketStorage());

    if(JSON.parse(localStorage.getItem("previous-order")) != null) //localStorge basket bilgilerini al ve basketList state'ni doldur.
      dispatch(previousOrderStorage());
  }, []);
 
  return (
    <div className={`button header-bag flex-shrink-0 d-flex-center ${basketList.length == 0 ? "disabled" : ""}`} onClick={() => {
      dispatch({ type: 'BASKET_LIST_OPEN', payload: true })
      dispatch({ type: 'ACTIVE_SHADOW', payload: true })
    }}>
      <img src={shoppBag} className="mr-1" alt=""/>
      <p className="header-bag__text">Sepetim</p>
      <span className="header-bag__count position-absolute d-flex-center">
        {basketList != null ? basketList.length : "0"} 
      </span>
    </div>
  );
};

export default Basket;