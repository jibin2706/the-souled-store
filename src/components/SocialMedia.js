import React from "react";
import "./social-media.scss";

function SocialMedia() {
  return (
    <div className="d-flex justify-content-around mt-5 mb-5">
      <div className="d-flex flex-column align-items-center social__links">
        <a href="https://twitter.com">
          <img src="/static/twitter.png" alt="twitter page" />
        </a>
        <span>Twitter</span>
      </div>

      <div className="d-flex flex-column align-items-center social__links ">
        <a href="https://facebook.com">
          <img src="/static/facebook.png" alt="facebook page" />
        </a>
        <span>Facebook</span>
      </div>

      <div className="d-flex flex-column align-items-center social__links ">
        <a href="https://instagram.com">
          <img src="/static/instagram.png" alt="instagram" />
        </a>
        <span>Instagram</span>
      </div>
    </div>
  );
}

export default SocialMedia;
