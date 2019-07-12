import React from "react";
import Layout from "../src/components/Layout";
import Carousel from "../src/components/Carousel";
import SocialMedia from "../src/components/SocialMedia";
import HeadingTitle from "../src/components/HeadingTitle";

import "../src/styles/styles.scss";
import ProductCatalog from "../src/components/ProductCatalog";

function Index() {
  return (
    <Layout>
      <Carousel />
      <ExclusiveOffer />
      <ProductCatalog />
      <SocialMedia />
    </Layout>
  );
}

export default Index;

function ExclusiveOffer() {
  return (
    <div className="container">
      <HeadingTitle title="Exculsive Membership" />
      <img className="w-100" src="/static/index/exclusive-desktop.jpg" />
    </div>
  );
}
