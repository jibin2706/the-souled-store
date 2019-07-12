import React, { useState } from "react";
import "./product_card.scss";

function Product({ primaryImg, secondaryImg, product_name, prodcut_type, regular_price, excl_price }) {
  const [imagehovered, changeHoverStatus] = useState(false);

  return (
    <div className="col-6 col-lg-4">
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
        <div className="d-flex justify-content-between">
          <span>{prodcut_type}</span>
          <span>Rs. {regular_price}</span>
        </div>
        <div className="text-secondary d-flex justify-content-between">
          <span>For Excl. member</span>
          <span>Rs. {excl_price}</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
