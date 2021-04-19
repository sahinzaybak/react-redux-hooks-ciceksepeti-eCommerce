import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

const signIn = (props) => {
  const validateMessages = {
    required: 'E-mail alanı boş bırakılmaz!',
    types: {
      email: 'Lütfen email formatında bir mail adresi giriniz.',
    },
  };

  const onFinish = (values) => {
    console.log('Success:', values);
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
          <Button className="button-ant green" type="primary" htmlType="submit">Üye Ol</Button>
        </Form.Item>
      </Form>
   </div>
  );
};

export default signIn