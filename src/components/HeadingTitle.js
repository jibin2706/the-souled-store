import React from "react";
import "./heading-title.scss";

function HeadingTitle({ title }) {
  return (
    <div className="heading__title col-12">
      <span className="text-uppercase pl-5 pr-5">{title}</span>
    </div>
  );
}

export default HeadingTitle;
