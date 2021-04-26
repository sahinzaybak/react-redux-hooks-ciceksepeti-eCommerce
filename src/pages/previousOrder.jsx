import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { Modal } from 'antd';
import '../assets/scss/basket.scss'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import basketImg from "../assets/images/shopping-cart.svg";
import {Link} from 'react-router-dom';

//Components
import PreviousOrder from '../components/previous-order/previousOrderList'
const { confirm } = Modal;

class previousOrder extends PureComponent {
  orderComplete(){
    const vm = this.props;
    confirm({
      title: 'Siparişi tamamlamak istediğinizden emin misiniz?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Evet',
      okType: 'success',
      cancelText: 'Hayır',
      confirmLoading:true,
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 1000 ? resolve  : reject, 1000);
          setTimeout(() => {
            vm.history.push("/basket/payment")
          }, 1000);
        }).catch(() =>false);
      },
    });
  }
  render() {
    return (
      <div className="basket mt-0 mt-md-5 previous">
        <div className="custom-container">
        {this.props.previousOrderList.length == 0 && 
          <div className="d-flex justify-content-between align-items-center basket-no-product flex-column flex-md-row mt-4 mt-md-0">
            <div className="d-flex mb-4 mb-md-0">
              <img className="mr-4" src={basketImg} alt="" />
              <h5>Önceden yaptığınız alışverişiniz bulunmamaktadır.</h5>
            </div>
            <div>
            <Link to="/">
              <button className="button start-shopping">Hemen Alışverişe Başla</button>
            </Link>
            </div>
          </div>      
        }
        {this.props.previousOrderList.length != 0 && 
          <>
           <div className="d-flex align-items-center">
              <img className="mr-2" src={basketImg} alt=""/>
               <h3>Siparişlerim</h3>
            </div>
          <div className="row mt-4">
            <div className="col-md-8">
              {this.props.previousOrderList.map((prevOrderList) => (
                <PreviousOrder prevOrder={prevOrderList}/>
              ))}
            </div>
          </div>
          </>
      }
       </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    previousOrderList: state.previousOrder.previousOrderList
  };
};

export default connect(mapStateToProps)(previousOrder);
