import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'

let basketList;
const BasketSummary  = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const [cargoTotalPrice, setCargoTotalPrice] = useState(0)
  basketList = useSelector(state => state.basket.basketList)

  useEffect(() => { 
    setTotalPrice(basketList.reduce((a,v) =>  a + v.product.price, 0).toFixed(2)) //Ürün toplamı
    setCargoTotalPrice(basketList.reduce((a,v) =>  a = (a + v.product.price) + parseFloat('0.090'), 0 ).toFixed(2))
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
        <div className="basket-summary__item d-flex justify-content-between">
          <p className="basket-summary__label">Kargo Ücreti:</p>
          <p className="basket-summary__value">9,90 ₺</p>
        </div>
        <div className="basket-summary__item d-flex justify-content-between">
          <p className="basket-summary__label">Toplam Fiyat:</p>
          <p className="basket-summary__value">{cargoTotalPrice} ₺</p>
        </div>
      </div>
    </div>
    <a className="button-ant green flex-center w-100 text-center mt-3">Satın Al</a>
    </>
  );
};

export default BasketSummary;