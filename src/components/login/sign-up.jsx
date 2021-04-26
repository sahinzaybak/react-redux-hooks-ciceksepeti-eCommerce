import React, {useState} from 'react';
import { Form, Input, Button } from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router";
import { store } from 'react-notifications-component';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

//Actions
import {fetchSignUp} from '../../store/actions/auth'
import {fetchSignIn} from '../../store/actions/auth'
import {fetchSameUserControl} from '../../store/actions/auth'

let loginUserInfo;
const SignUp= () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  loginUserInfo = useSelector(state => state.auth.loginUserInfo)

  const validateMessages = {
    required: 'E-mail alanı boş bırakılmaz!',
    types: {
      email: 'Lütfen email formatında bir mail adresi giriniz.',
    },
  };

  const onFinish = async (values) => {
    let isSameUser;
    setLoading(true)
    //aynı mail adresi ile başka üye var mı kontrol
    await dispatch(fetchSameUserControl(values.email)).then(value =>{ isSameUser = value}) 
    if(!isSameUser){
      await dispatch(fetchSignUp(values.username, values.email, values.password)).then(value => {
        if(value == "Created"){
          store.addNotification({
            message: "Üye işlemi başarılı, yönlendiriliyorsunuz...",
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
          dispatch(fetchSignIn(values.email, values.password)) //üye olduktan sonra sisteme otomatik giriş.
          if(loginUserInfo != null){
            localStorage.setItem('login', JSON.stringify({
              id:loginUserInfo.id,
              name:loginUserInfo.name,
              email:loginUserInfo.email
            }))
          }
          setTimeout(() => {
            history.push("/urunler")
          }, 2800);
        }
        else{
          store.addNotification({
            message: "Bir sorun oluştu, lütfen tekrar deneyin.",
            type: "danger",
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
        }
      })
    }
    else{
      store.addNotification({
        message: "Bu mail adresi ile bir üyemiz mevcut. Lütfen başka bir mail adresi ile üye olmayı deneyin.",
        type: "danger",
        insert: "top",
        width:300,
        showIcon:true,
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: false
        },
      })
      setTimeout(() => {
        setLoading(false)
      }, 3000);
    }
   
  };

  return (
    <div className="login-form__sign-up h-100">
      <h1 className="login-form__title mb-2">Üye olun.</h1>
      <p className="login-form__desc text-left mb-4">Sistemimize üye olmak için formu doldurun.</p>
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item  name="username" rules={[{ required: true, message: 'Lütfen adınızı ve soyadınızı giriniz.' }]}>
          <Input prefix={<UserOutlined className="login-form__icon" />} placeholder="Adınız Soyadınız"/>
        </Form.Item>
        <Form.Item  name="email" rules={[{ required: true, type: 'email'}]}>
          <Input prefix={<UserOutlined className="login-form__icon" />} placeholder="E-mail adresiniz"/>
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Lütfen şifrenizi giriniz.' }]}>
          <Input  prefix={<LockOutlined className="login-form__icon" />}  type="password" placeholder="Şifreniz" />
        </Form.Item>
        <Form.Item className="d-flex justify-content-end">
        <div className="d-flex-center">
          <div className={`spinner-border position-absolute color-white ${!loading ? "d-none" : ""}`} role="status"></div>
            <Button className="button-ant green" type="primary" htmlType="submit">
              {!loading && "Üye Ol"}
            </Button>
          </div>
        </Form.Item>

       
      </Form>
   </div>
  );
};

export default SignUp