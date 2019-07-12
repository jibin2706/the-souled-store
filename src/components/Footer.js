import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer pt-5 pb-5">
      <div className="row container m-auto">
        <div className="col-lg-3 col-sm-6 col-xs-6 mt-3">
          <h4 className="footer__header">Need help</h4>
          <div className="footer__links">
            <a href="">Contact Us</a>
            <a href="">FAQ</a>
            <a href="">Shipping & Tracking</a>
            <a href="">Return & Exchange</a>
            <a href="">T&Cs</a>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-xs-6 mt-3">
          <h4 className="footer__header">Company</h4>
          <div className="footer__links">
            <a href="">About Us</a>
            <a href="">Schools & College</a>
            <a href="">Bulk Orders</a>
            <a href="">Careers</a>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-xs-6 mt-3">
          <h4 className="footer__header">More info</h4>
          <div className="footer__links">
            <a href="">My Account</a>
            <a href="">Gift Vouchers</a>
            <a href="">Souled Army</a>
            <a href="">Sell your artwork</a>
            <a href="">Sitemap</a>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-xs-6 mt-3">
          <div>
            <p className="footer__info">COD Available</p>
            <p className="footer__info">15 Day Easy Returns</p>
          </div>
        </div>
      </div>
      <div className="text-center">The Souled Store 2018-19</div>
    </footer>
  );
}

export default Footer;
