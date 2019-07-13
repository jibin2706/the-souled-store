import React from "react";
import "./heading-title.scss";

function HeadingTitle({ title }) {
  return (
    <div className="heading__title col-12 mt-3 mb-3">
      <span className="text-uppercase pl-3 pr-3">{title}</span>
    </div>
  );
}

export default HeadingTitle;
