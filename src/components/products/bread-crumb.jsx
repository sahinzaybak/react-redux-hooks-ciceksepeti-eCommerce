import React from 'react';
import '../../assets/scss/layout/bread-crumb.scss'

const BreadCrumb = () => {
  return (
    <div className="bread-crumb d-flex align-items-center">
      <div className="custom-container">
        <p className="bread-crumb__text">Çiçeksepeti {'>'} <span className="bread-crumb__text--active"> Ürünler</span></p>
      </div>
    </div>
  );
};

export default BreadCrumb;