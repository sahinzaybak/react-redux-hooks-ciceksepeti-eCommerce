import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Link,useLocation} from 'react-router-dom';

let basketList;
const BasketSummary  = () => {
  const location = useLocation();
  const [totalPrice, setTotalPrice] = useState(0)
  const [cargoTotalPrice, setCargoTotalPrice] = useState(0)
  basketList = useSelector(state => state.basket.basketList)

  useEffect(() => { 
    setTotalPrice(basketList.reduce((a,v) =>  a + v.product.price, 0).toFixed(2)) //Ürün toplamı
    setCargoTotalPrice(basketList.reduce((a,v) =>  a = (a + v.product.price) + 4.95, 0 ).toFixed(2)) //+ 9,90
    totalPrice >= 500 ? localStorage.setItem('totalPrice', totalPrice) : localStorage.setItem('totalPrice', cargoTotalPrice)
  })
  return (
    <>
    <div className="basket-summary">
      <h3 className="mb-3">Sipariş Özeti</h3>
      <div className="basket-summary__wrp">
        <div className="basket-summary__item d-flex justify-content-between">
          <p className="basket-summary__label">Ürün Toplamı:</p>
          <p className="basket-summary__value">{totalPrice} ₺</p>
        </div>
        <div className="basket-summary__item d-flex justify-content-between">
          <p className="basket-summary__label">Ürün Adedi:</p>
          <p className="basket-summary__value">{basketList.length}</p>
        </div>
        <div className={`basket-summary__item d-flex justify-content-between ${totalPrice >= 500 ? "disabled" : ""}`}>
          <p className="basket-summary__label">Kargo Ücreti:</p>
          <p className="basket-summary__value">9,90 ₺</p>
        </div>
        <div className="basket-summary__item d-flex justify-content-between">
          <p className="basket-summary__label">Toplam Fiyat:</p>
          {totalPrice >= 500 ?  <p className="basket-summary__value">{totalPrice} ₺</p>
          :
          <p className="basket-summary__value">{cargoTotalPrice} ₺</p>
          }
        </div>
      </div>
    </div>
    {location.pathname != "/odeme" && 
        <Link to="/odeme" className="button green flex-center w-100 text-center mt-3">Satın Al</Link>
    }

    </>
  );
};

export default BasketSummary;