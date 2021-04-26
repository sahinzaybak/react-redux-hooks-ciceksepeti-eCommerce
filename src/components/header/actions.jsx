import React from 'react';
import {ShoppingOutlined, FrownOutlined,ExclamationCircleOutlined } from '@ant-design/icons';
import { useHistory } from "react-router";
import {useSelector, useDispatch} from 'react-redux'
import { Modal } from 'antd';
import {Link} from 'react-router-dom';

const { confirm } = Modal;
const Actions = () => {
  const dispatch = useDispatch() 
  const history = useHistory();
  function signOut(){
    confirm({
      title: 'Çıkış yapmak istediğinizden emin misiniz?',
      icon: <ExclamationCircleOutlined />,
      centered:true,
      okText: 'Evet',
      okType: 'danger',
      cancelText: 'Hayır',
      confirmLoading:true,
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 1000 ? resolve  : reject, 1000);
          setTimeout(() => {
            localStorage.clear();
            dispatch({ type: 'FETCH_BASKET_CLEAR' , payload: []})
            history.push("/giris")
          }, 1000);
        }).catch(() =>false);
      },
    });
  }
  return (
    <div className="header-actions d-flex">
      <Link to="/siparislerim" className="header-actions__item">
        <ShoppingOutlined className="header-actions__user" />
        <p>Siparişlerim</p>
      </Link>
      <div className="header-actions__item mr-4" onClick={signOut}>
        <FrownOutlined className="header-actions__user" />
        <p>Çıkış Yap</p>
      </div>
    </div>
  );
};


export default Actions;