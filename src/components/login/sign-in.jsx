import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from "react-router";
import { store } from 'react-notifications-component';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

//Actions
import {fetchSignIn} from '../../store/actions/auth'
import { useState } from 'react';
 
let isSignInPermission;
const SignIn = (props) => {
  const dispatch = useDispatch()
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  isSignInPermission = useSelector(state => state.auth.isSıgnIn)
 
  const validateMessages = {
    required: 'E-mail alanı boş bırakılmaz!',
    types: { email: 'Lütfen email formatında bir mail adresi giriniz.' },
  };

  const onSignIn = async (values) => { //Kullanıcı Girişi
    await dispatch(fetchSignIn(values.email, values.password))
    if(isSignInPermission) {
      setLoading(true)
      store.addNotification({
        message: "Giriş başarılı, yönlendiriliyorsunuz...",
        type: "success",
        insert: "top",
        width:300,
        showIcon:true,
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2500,
          onScreen: false
        },
      })
      setTimeout(() => {
          history.push("/products")
          localStorage.setItem('login', values.email)
      }, 2800);
    }
    else{
      store.addNotification({
        message: "Lütfen doğru bilgileri girdiğinizden emin olun!",
        type: "danger",
        insert: "top",
        width:350,
        showIcon:true,
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: false
        },
      })
    }
  };

  return (
    <div className="login-form__sign-in">
      <h1 className="login-form__title mb-3">Giriş yapın.</h1>
      <p className="login-form__desc text-left mb-4">Sistemimize üyeyseniz hemen giriş yapabilirsiniz.</p>
      <Form name="basic" initialValues={{ remember: true }} onFinish={onSignIn} validateMessages={validateMessages}>
        <Form.Item  name="email" rules={[{ required: true, type: 'email'}]}>
          <Input prefix={<UserOutlined className="login-form__icon" />} placeholder="E-mail adresiniz"/>
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Lütfen şifrenizi giriniz.' }]}>
          <Input prefix={<LockOutlined className="login-form__icon" />}  type="password" placeholder="Şifreniz" />
        </Form.Item>
        <Form.Item className="d-flex justify-content-end">
        <div className="d-flex-center">
          <div className={`spinner-border position-absolute color-white ${!loading ? "d-none" : ""}`} role="status"></div>
            <Button className="button-ant green" type="primary" htmlType="submit">
              {!loading && "Giriş Yap"}
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn