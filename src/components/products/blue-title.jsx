import React from 'react';
import '../../assets/scss/layout/blue-title.scss'

const BlueTitle = ({text}) => {
  return (
    <div class="blue-title d-flex align-items-center">
      <div className="custom-container">
        <h1 className="blue-title__text color-white">{text}</h1>
      </div>
    </div>
  );
};


export default BlueTitle;