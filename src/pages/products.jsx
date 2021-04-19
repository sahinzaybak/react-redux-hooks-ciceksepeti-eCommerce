import React, { PureComponent } from "react";
import { connect } from "react-redux"; 

//Components
import BlueTitle from '../components/products/blue-title'
import BreadCrumb from '../components/products/bread-crumb'
import Categories from '../components/products/categories'
import ProductList from '../components/products/product-list'

class products extends PureComponent {
  render() {
    return (
      <div>
        <BlueTitle text="Çiçek Sepeti" />
        <BreadCrumb />
        <Categories />
        <ProductList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(products);
