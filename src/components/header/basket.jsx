import React, {useEffect}from 'react';
import {useSelector, useDispatch} from 'react-redux'
import shoppBag from '../../assets/images/shop-bag.svg'

//Actions
import {getBasketStorage} from '../../store/actions/basket'

let basketList;
const Basket = () => {
  const dispatch = useDispatch() 
  basketList = useSelector(state => state.basket.basketList)

  useEffect(() => {
    if(JSON.parse(localStorage.getItem("basket")) != null)
      dispatch(getBasketStorage());
  }, []);
 
  return (
    <div className="button header-bag cursor-pointer flex-shrink-0 d-flex-center">
      <img src={shoppBag} className="mr-1" alt=""/>
      <p className="header-bag__text">Sepetim</p>
      <span className="header-bag__count position-absolute d-flex-center">
        {basketList != null ? basketList.length : "0"} 
      </span>
    </div>
  );
};

export default Basket;