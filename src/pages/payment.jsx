import React, { PureComponent } from "react";
import { connect } from "react-redux"; 
import productListIco from '../assets/images/product-list-ico.svg'
import '../assets/scss/basket.scss'

//Components
import Payments from '../components/payment/form'
import BasketSummary from '../components/basket/basket-summary'

class Payment extends PureComponent {
  render() {
    return (
    <div className="basket mt-3"> 
      <div className="custom-container">
        <div className="d-flex align-items-center">
          <img className="mr-2" src={productListIco} alt=""/>
          <h3>Ödeme Yap</h3>
        </div>
        <div className="row mt-4">
          <div className="col-md-8">
          <Payments />
           
          </div>
          <div className="col-md-4">
           <BasketSummary />
          </div>
        </div>
      </div>
    </div>
  );
    
  }
}

const mapStateToProps = (state) => {
  return {
    basketList: state.basket.basketList
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
