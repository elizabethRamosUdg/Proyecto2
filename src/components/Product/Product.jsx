import React from 'react';
import sampleImage from '../../images/camisa_01.jpg';

import "../../pages/style/product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="col-md-2">
        <img src={sampleImage} alt="Sample Image" height="150" />
      </div>
      <div className="col-md-8 product-detail">
        <h4 className='ProductName'>Blue T-Shirt</h4>
        <p className='ProductDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="col-md-2 product-price">
        $19.99
      </div>
    </div>
  );
}

export default Product;