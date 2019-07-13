import React, { useState, useEffect } from "react";
import Layout from "../src/components/Layout";
import Product_Card from "../src/components/Product_Card";
import Product_Banner from "../src/components/Product_Banner";

import "../src/styles/styles.scss";

function Index() {
  const [products, loadProducts] = useState([]);
  const [isLoading, changeLoadingStatus] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await fetch("/static/api/tshirts.json");
    const jsonData = await data.json();
    loadProducts(jsonData);
    changeLoadingStatus(false);
  };

  return (
    <Layout>
      <Product_Banner />
      <div className="row mt-5 mb-5 w-100">
        <div className="d-none d-md-block col-md-3">
          <li>Put filter content here</li>
        </div>
        {!isLoading && (
          <div className="col-md-9">
            <div className="row">
              {products.products.map((product, index) => (
                <Product_Card
                  key={index}
                  primaryImg={product.primary_image}
                  secondaryImg={product.secondary_image}
                  product_name={product.product_name}
                  prodcut_type={product.prodcut_type}
                  regular_price={product.normal_price}
                  excl_price={product.exclusive_price}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Index;
