import React, {useState, useEffect} from "react";
import {useDispatch} from 'react-redux'
import { Modal,Input } from 'antd';
import 'react-rater/lib/react-rater.css'
import { store } from 'react-notifications-component';
import Avatar from 'react-avatar';
import Rater from 'react-rater'
import { Form, Button} from 'antd';
import '../../assets/scss/product-detail-comments.scss'

//Actions
import {fetchProductAddComment, fetchProductDetail } from '../../store/actions/products'

const { TextArea } = Input;
let userInfo; 
const ProductComments = ({product, productComments}) => {
  const dispatch = useDispatch()
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(3)
  userInfo = JSON.parse(localStorage.getItem("login"))
  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  function onRate (value) { //Puan ver
    setRating(value.rating)
  };

  async function addComment(values) { // Yorum Yap
    setLoading(true);
    await dispatch(fetchProductAddComment(values.comment, rating, product, productComments, userInfo.name));
    setTimeout(() => {
      store.addNotification({
        message: "Yorumunuz gönderildi.",
        type: "success",
        insert: "top",
        width:300,
        showIcon:true,
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: false
        },
      })
      setIsModalVisible(false);
      dispatch(fetchProductDetail(product.slug));
      setLoading(false);
      form.resetFields();
    }, 2500);
  };
  
  return (
    <div id="comments" className="comments mt-4 pt-3">
      <div className="d-block text-center mb-4">
        <h2>Yorumlar ({productComments.length})</h2>
          <p className="comments__add-comment" onClick={showModal}>
            {productComments.length != 0 ?  "Ürün Hakkında Yorum Yap" : "İlk yorum yapan sen ol!" }
          </p>
      </div>
      
      <Modal title="Merhaba Şahin, ürüne yorum yapabilir ve puan verebilirsin." visible={isModalVisible} onCancel={closeModal} footer={null}>
        <Form onFinish={addComment}>
          <div className="text-center">
            <h5>Ürüne Puan Ver</h5>
            <Form.Item>
              <Rater total={5} rating={rating} onRate={onRate} />
            </Form.Item>
            </div>
            <div className="text-center mt-4">
              <h5 className="mb-3"> Ürüne Yorum Yap</h5>
              <Form.Item name="comment" rules={[{ required: true, message: 'Lütfen bir yorum giriniz.' }]}>
                <TextArea className="w-100" showCount maxLength={100} />
              </Form.Item>
            </div>
            <div className="d-flex-center">
              <div className={`spinner-border position-absolute color-white ${!loading ? "d-none" : ""}`} role="status"></div>
                <Button className="button-ant green" type="primary" htmlType="submit">
                  {!loading && "Yorum Yap"}
                </Button>
            </div>
        </Form>
      </Modal>
    
    {productComments.length != 0 &&
      <div className="comments-wrp">
        {productComments.map((comment,index) => 
          <div className="comments-item" key={index}>
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
    }
  </div>
  );
};

export default ProductComments;
