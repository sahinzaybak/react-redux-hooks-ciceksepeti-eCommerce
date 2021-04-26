import React from 'react';
import {CheckCircleTwoTone } from '@ant-design/icons';
import { Tooltip } from 'antd';

const previousOrderList = ({ prevOrder }) => { 
  return (
    <div className="basket-previous-item position-relative w-100"> 
      <div className="basket-item">
        {prevOrder.orderList.map((orderList) => (  
          <>
          <div className="basket-item__wrp" key={orderList.id}>
            <div className="previous-item d-flex align-items-center flex-column flex-md-row">
                <div className="basket-item__img mr-4">
                <img src={orderList.product.image} alt=""/>
              </div>
              <div className="basket-item__info">
                <h5 className="mb-2 mt-2">{orderList.product.name}</h5>
              
              </div>
              <div className="basket-item__counter text-left text-md-center ml- mr-0 ml-md-5 mr-md-5">
                <p className="mb-1">Adet</p>
                <span>{orderList.count}</span>
              </div>
              <div className="basket-item__price">
                <div className="text-center">
                  <p className="mb-1">Toplam Ürün Fiyatı</p>
                  <h4>{orderList.defaultPrice} ₺</h4>
                </div>
              </div>
            </div>
          </div>  
          </>
        ))}
       <div className="basket-previous-info">
         <div className="d-flex justify-content-between">
         <h6 className="mb-2 d-flex align-items-center">
              <CheckCircleTwoTone twoToneColor="#52c41a" />Sipariş Tarihi: {prevOrder.orderDate}
            </h6>
            <h6 className="mb-2 d-flex align-items-center">
              <CheckCircleTwoTone twoToneColor="#52c41a" />Toplam Fiyat: {prevOrder.totalPrice}
            </h6>
         </div>
           
          </div>
      </div>
    </div>
  );
}
  
export default previousOrderList