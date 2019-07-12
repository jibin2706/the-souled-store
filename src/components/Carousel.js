import React from "react";
import Carousel from "nuka-carousel";

export default class extends React.Component {
  render() {
    const options = {
      autoplay: true,
      wrapAround: true
    };
    return (
      <Carousel {...options}>
        <img src="/static/slider/slider1.jpg" />
        <img src="/static/slider/slider2.jpg" />
        <img src="/static/slider/slider3.jpg" />
        <img src="/static/slider/slider4.jpg" />
      </Carousel>
    );
  }
}
