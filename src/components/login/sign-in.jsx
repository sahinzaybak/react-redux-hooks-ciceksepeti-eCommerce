import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

const signUp = props => {
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
    <div className="login-form__sign-in">
      <h1 className="login-form__title mb-3">Giriş yapın.</h1>
      <p className="login-form__desc text-left mb-4">Sistemimize üyeyseniz hemen giriş yapabilirsiniz.</p>
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item  name="email" rules={[{ required: true, type: 'email'}]}>
          <Input prefix={<UserOutlined className="login-form__icon" />} placeholder="E-mail adresiniz"/>
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Lütfen şifrenizi giriniz.' }]}>
          <Input  prefix={<LockOutlined className="login-form__icon" />}  type="password" placeholder="Şifreniz" />
        </Form.Item>
        <Form.Item className="d-flex justify-content-end">
          <Button className="button-ant green" type="primary" htmlType="submit">Giriş Yap</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default signUp