import React, { PureComponent } from "react";
import { connect } from "react-redux"; 
import '../assets/scss/product-detail.scss'

//Components
import ProductImage from '../components/product-detail/product-image'
import ProductDetail from '../components/product-detail/product-info'
import ProductStickyAddBasket from '../components/product-detail/product-sticky-add-basket'

class products extends PureComponent {
  render() {
    return (
      <div className="product-detail">
        <div className="custom-container">
          <div className="row">
            <ProductImage />
            <ProductDetail />
          </div>
        </div>
        <ProductStickyAddBasket />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(products);
