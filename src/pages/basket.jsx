import React, { PureComponent } from "react";
import { connect } from "react-redux"; 
import productListIco from '../assets/images/product-list-ico.svg'
import '../assets/scss/basket.scss'
import {Link} from 'react-router-dom';
import basketImg from "../assets/images/shopping-cart.svg";

//Components
import BasketList from '../components/basket/basket-list'
import BasketSummary from '../components/basket/basket-summary'

class basket extends PureComponent {
  render() {
    return (
      <div className="basket mt-0 mt-md-5"> 
        <div className="custom-container">
          {this.props.basketList.length > 0 ?
          <>
            <div className="d-flex align-items-center">
              <img className="mr-2" src={productListIco} alt=""/>
              <h3>Sepetim({this.props.basketList.length})</h3>
            </div>
            <div className="row mt-4">
              <div className="col-md-8">
              {this.props.basketList.map((basket,index) => 
                <BasketList basketList={basket} key={index} />
              )}
              </div>
              <div className="col-md-4">
              <BasketSummary />
              </div>
            </div>
          </>
          :
          <div className="d-flex justify-content-between align-items-center basket-no-product flex-column flex-md-row mt-4 mt-md-0">
            <div className="d-flex mb-4 mb-md-0">
              <img className="mr-4" src={basketImg} alt="" />
              <h5>Sepetinizde ürün bulunmamaktadır.</h5>
            </div>
           <div>
            <Link to="/urunler">
             <button className="button start-shopping">Hemen Alışverişe Başla</button>
            </Link>
           </div>
          </div> 
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(basket);
