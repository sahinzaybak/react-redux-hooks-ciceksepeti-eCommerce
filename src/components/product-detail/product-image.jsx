import React, {useState} from "react";

const ProductImage = ({productImage}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  return (
    <div className="col-md-6">
      <div className="product-detail__image d-flex-center">
        {imageLoaded ? null :
            <img src="https://blog.ciceksepeti.com/wp-content/uploads/2020/05/CS_Logo.png" style={{
              width: "300px",
              height: "300px",
              objectFit:'cover',
            }}/>
          }
          <img src={productImage} alt={productImage} onLoad={() => 
            setImageLoaded(true)} 
            style={imageLoaded ? {} : {display: 'none'}
          }/>  

       
      </div>
    </div>
  );
};

export default ProductImage;
