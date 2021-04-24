import React,{useEffect} from "react";
import Rater from 'react-rater'
import {useDispatch} from 'react-redux'
import 'react-rater/lib/react-rater.css'

const ProductInfo = ({productDetail}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    return () => {
      dispatch({ type: 'PRODUCT_DETAIL_CLEAR' , payload: []})
    }
  },[])
  return (
    <div className="col-md-6">
      <div className="product-detail__wrp pl-4">
        <p className="category mb-1">Hediye</p>
        <h1 className="product-detail__name">{productDetail[0].slug}</h1>
        <div className="d-block">
          <Rater total={5} rating={2} interactive={false} />
          <p>(13) Yorum</p>
        </div>
        <div className="d-block mt-3">
          <span className="product-detail__titles">Ürün Açıklaması</span>
          <p className="product-detail__desc mt-2" dangerouslySetInnerHTML={{ __html: productDetail[0].description}}></p>
        </div>

        <div className="d-block mt-4">
          <span className="product-detail__titles">Ödeme Seçenekleri</span>
          <div className="product-detail__payment-system d-flex mt-2">
            <img src="https://cdn03.ciceksepeti.com/payment/150x90-visa.jpg" width={100}/>
            <img src="https://cdn03.ciceksepeti.com/payment/150x90-mastercard.jpg" width={100}/>
            <img src="https://cdn03.ciceksepeti.com/payment/150x90-troy.jpg" width={100}/>
            <img src="https://cdn03.ciceksepeti.com/payment/150x90-amex.jpg" width={100}/>
            <img src="https://cdn03.ciceksepeti.com/payment/150x90-norton.jpg" width={100}/>
          </div>
        </div>

        <div className="d-block mt-4">
          <span className="product-detail__titles">Ürün Sahibi</span>
          <p className="product-detail__desc mt-2">Bu ürün <u>{productDetail[0].company}</u> tarafından gönderilecektir.</p>
        </div>
      </div>
  </div>
  );
};

export default ProductInfo;
