import React, { PureComponent } from "react";
import { connect } from "react-redux"; 
import '../assets/scss/product-detail.scss'

//Components
import ProductImage from '../components/product-detail/product-image'
import ProductDetail from '../components/product-detail/product-info'
import ProductComments from '../components/product-detail/product-comments'
import ProductStickyAddBasket from '../components/product-detail/product-sticky-add-basket'

//Actions
import {fetchProductDetail} from '../store/actions/products'

class productDetail extends PureComponent {
  componentDidMount() {
    const slug = this.props.match.params.slug; 
    this.props.fetchProductDetail(slug);
  }
  render() {
    return (
      <div className="product-detail">
        <div className="custom-container">
          {this.props.productDetail.length != 0 &&
            <>
              <ProductStickyAddBasket 
                productId={this.props.productDetail[0].id} 
                productName={this.props.productDetail[0].slug} 
                productImage={this.props.productDetail[0].image} 
                productPrice={this.props.productDetail[0].price}/>
              <div className="row"> 
                <ProductImage productImage={this.props.productDetail[0].image} />
                <ProductDetail productDetail={this.props.productDetail} />
              </div>
              <ProductComments productComments={this.props.productDetail[0].comments}/>
            </>
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productDetail:state.products.productDetail
  };
};

const mapDispatchToProps = {
  fetchProductDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(productDetail);
