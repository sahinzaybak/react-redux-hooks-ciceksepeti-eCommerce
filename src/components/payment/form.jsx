import React, {useEffect } from "react";
// import '../assets/scss/payment.scss'
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from "react-router";
import { Form, Input, InputNumber, Select, Modal} from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';

// Actions
import {previousOrder} from '../../store/actions/previousOrder'

const { Option } = Select;
const validateMessages = {
  required: "Bu alan zorunludur!",
  types: {
    email: "Doğru format değil!",
    number: "Numara giriniz!",
  },
};

let totalPrice;
let today = new Date()
let basketList
const { confirm } = Modal;
const Payment = () => {
  const history = useHistory();
  const dispatch = useDispatch() 
  basketList = useSelector(state => state.basket.basketList)

  useEffect(() => {
    totalPrice = localStorage.getItem('totalPrice')
  }, []);

  function completePayment(){ // Ödemeyi Tamamla
    const todayDate = today.getDate() + '-' + "0" + (today.getMonth() +1) + '-' + today.getFullYear();
    confirm({
      title: 'Ödeme yapmak istediğinizden emin misiniz?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Evet',
      centered:true,
      okType: 'success',
      cancelText: 'Hayır',
      confirmLoading:true,
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 1000 ? resolve  : reject, 1000);
          setTimeout(() => {
            dispatch(previousOrder(basketList, todayDate, totalPrice))//Önceki siparişler state kaydet.
            Modal.success({
              centered:true,
              title: 'Ödemeniz Başarılı!',
              okText: 'Kapat',
              okType: 'success',
              content: `${totalPrice} TL ödemeniz başarıyla yapıldı. Teşekkür ederiz!`,
              onOk() {
                localStorage.removeItem('basket')
                localStorage.removeItem("totalPrice")
                localStorage.removeItem('selectedCategory')
                localStorage.removeItem("totalPrice")
                localStorage.setItem('previous-order', JSON.stringify(basketList))
                dispatch({ type: 'FETCH_BASKET_CLEAR', payload: [] })
                dispatch({ type: 'IS_CATEGORY_FILTERED', payload: false })
                history.push("/urunler")
              },
            });
          }, 1000);
        }).catch(() =>false);
      },
    });  
  };

  return (
    <div className="payment basket-page">
        <Form name="nest-messages" validateMessages={validateMessages} onFinish={completePayment.bind(this)}>
        <div className="row">
          <div className="col-md-12 mr-0 pr-md-5">
            <div className="d-flex justify-content-between flex-column flex-md-row">
              <Form.Item name="number" label="Telefon No" rules={[{required: true,type: "number"}]}>
                <InputNumber placeholder="Telefon No" />
              </Form.Item>
              <Form.Item name="email"label="E-posta Adresi" rules={[{required: true,type: "email"}]}>
                <Input placeholder="E-posta Adresi"/>
              </Form.Item>
            </div>
            <div className="d-flex justify-content-between flex-column flex-md-row">
            <Form.Item name="iban" label="IBAN Numaranız" rules={[{required: true,type: "number"}]}>
                <InputNumber placeholder="IBAN Numaranız" />
              </Form.Item>

              <Form.Item name="country" label="Yaşadığınız İl" rules={[{required: true}]}>
                <Select placeholder="İl Seçiniz" allowClear>
                  <Option value="istanbul">İstanbul</Option>
                  <Option value="ankara">Ankara</Option>
                  <Option value="izmir">İzmir</Option>
                  <Option value="antalya">Antalya</Option>
                  <Option value="muğla">Muğla</Option>
                </Select>
              </Form.Item>
            </div>
            <div className="d-flex justify-content-end">
              <button className="button green mt-1 mb-4 mb-md-0 mt-md-3">Ödemeyi Tamamla</button>
            </div>
           
          </div>
    
        </div>
        </Form>  
    </div>
  );
}

export default Payment
