import React, { useState } from "react";
import "./product_card.scss";

function Product({ primaryImg, secondaryImg, product_name, prodcut_type, regular_price, excl_price }) {
  const [imagehovered, changeHoverStatus] = useState(false);

  return (
    <div className="product__card col-6 col-lg-4 mb-5">
      <div
        className="product__image"
        onMouseOver={() => changeHoverStatus(true)}
        onMouseOut={() => changeHoverStatus(false)}
      >
        {imagehovered ? (
          <img className="img-fluid" src={secondaryImg} />
        ) : (
          <img className="img-fluid" src={primaryImg} />
        )}
      </div>

      <h2 className="product__name">{product_name}</h2>
      <hr className="product__divider" />
      <div className="product__details">
        <div className="product__price d-flex justify-content-between">
          <span>T-Shirt</span>
          <span>Rs. {regular_price}</span>
        </div>
        <div className="product__price--blue d-flex justify-content-between">
          <span>For Excl. member</span>
          <span>Rs. {excl_price}</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
