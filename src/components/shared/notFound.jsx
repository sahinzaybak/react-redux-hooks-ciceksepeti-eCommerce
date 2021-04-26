import React from 'react';
import { Result, Button } from 'antd';
import {Link} from 'react-router-dom';
const notFound = () => {
  return (
    <Result status="404" title="404" subTitle="Üzgünüz. Böyle bir ürün veya sayfa bulunamadı." 
    extra={
      <Link to="/">
        <Button type="primary">Anasayfa'ya Yönlendir</Button>
      </Link>
    }
  />
  );
};

export default notFound;