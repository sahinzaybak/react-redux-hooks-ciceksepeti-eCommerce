import React,{useState} from "react";
import '../../assets/scss/product-detail-comments.scss'
import Avatar from 'react-avatar';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { Modal } from 'antd';
import { Input } from 'antd'
const { TextArea } = Input;

const ProductComments = ({productComments}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };


  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = e => {
    console.log('Change:', e.target.value);
  };


  return (
    <div className="comments mt-4 pt-3">
      <div className="d-block text-center mb-4">
        <h2>Yorumlar ({productComments.length})</h2>
        <p onClick={showModal}>Sende Yorum Yap</p>
      </div>
      <Modal title="Merhaba Şahin, ürüne yorum yapabilir ve puan verebilirsin." visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <div className="text-center">
          <h5>Ürüne Puan Ver</h5>
          <Rater total={5} rating={3} />
        </div>
        <div className="text-center mt-4">
          <h5 className="mb-3"> Ürüne Yorum Yap</h5>
          <TextArea showCount maxLength={100} onChange={onChange} />
        </div>
        <a className="button-ant button-modal green mt-4">Yorum Yap</a>
      </Modal>
    
      <div className="comments-wrp">
        {productComments.map((comment) => 
          <div className="comments-item">
            <div className="d-flex">
              <Avatar className="comments-item__avatar mr-3" name={comment.commentOwner} round={true} />
              <div className="d-flex flex-column w-100">
                <div className="d-flex align-items-center justify-content-between w-100">
                  <p className="comments-item__name mb-2">{comment.commentOwner}</p>
                  <Rater total={5} rating={comment.star} interactive={false} />
                </div>
                <p className="comments-item__text">{comment.comment}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductComments;
