import React from "react";
import HeadingTitle from "./HeadingTitle";

function ProductCatalog() {
  return (
    <div className="container m-auto mt-5">
      <HeadingTitle title="products" />
      <div className="row no-gutters ">
        <div className="row no-gutters ">
          <Product size="col-12 col-md-6" src="/static/products/t-shirts.jpg" name="T-Shirt" />
          <div className="col-12 col-md-6">
            <div className="row no-gutters ">
              <Product size="col-12 col-md-12" src="/static/products/notebooks.jpg" name="notebooks" />
              <Product size="col-6 col-md-6" src="/static/products/mugs.jpg" name="mugs" />
              <Product size="col-6 col-md-6" src="/static/products/stickers.jpg" name="Stickers" />
            </div>
          </div>
        </div>

        <div className="row no-gutters ">
          <div className="col-12 col-md-6">
            <div className="row no-gutters ">
              <Product size="col-6 col-md-6" src="/static/products/caps.jpg" name="Caps" />
              <Product size="col-6 col-md-6" src="/static/products/badges.jpg" name="Badges" />
              <Product size="col-12 col-md-12" src="/static/products/boxers.jpg" name="Boxers" />
            </div>
          </div>
          <Product size="col-12 col-md-6" src="/static/products/dress.jpg" name="Dress" />
        </div>

        <div className="row no-gutters ">
          <Product size="col-12 col-md-6" src="/static/products/vests.jpg" name="Tank Tops & Vests" />
          <div className="col-12 col-md-6">
            <div className="row no-gutters ">
              <Product size="col-12 col-md-12" src="/static/products/notebooks.jpg" name="Notebooks" />
              <Product size="col-6 col-md-6" src="/static/products/socks.jpg" name="Socks" />
              <Product size="col-6 col-md-6" src="/static/products/monc.jpg" name="Mobile Covers" />
            </div>
          </div>
        </div>

        <div className="row no-gutters ">
          <Product size="col-6 col-md-3" src="/static/products/pins.jpg" name="Pins" />
          <Product size="col-6 col-md-3" src="/static/products/flipflopsBox.jpg" name="Flip Flops Box" />
          <Product size="col-12 col-md-6" src="/static/products/backpacks.jpg" name="Bags" />
        </div>
      </div>
    </div>
  );
}

function Product({ src, name, size }) {
  return (
    <div className={`product position-relative product ${size}`}>
      <img src={src} alt={name} className="img-fluid " />
      <h3 className="product__catalog__name">{name}</h3>
    </div>
  );
}

export default ProductCatalog;
