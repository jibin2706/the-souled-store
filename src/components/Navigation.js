import React, { useState, useEffect } from "react";
import "./navigation.scss";

function Navigation() {
  return (
    <div className="position-relative">
      <div className="nav__top text-right">
        <span>Track Order</span>
      </div>
      <div className="navbar-nav navbar-expand-md">
        <a className="navbar-brand" href="/">
          <img src="/static/logo.png" alt="logo" />
        </a>
        <div className="navbar-nav">
          <div className="nav">
            <ShopNavList />
            <OfficalMerchList />
            <NavItem href="/" title="Game of thrones" isNew={false} />
            <NavItem href="/" title="Exclusive" isNew={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ href, title, isNew }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>
        {title}
        {isNew && <sup className="nav-item--new">new</sup>}
      </a>
    </li>
  );
}

function ShopNavList() {
  const [dropListStatus, changeDropStatus] = useState(false);

  return (
    <div className="nav-item" onMouseOver={() => changeDropStatus(true)}>
      <a className="nav-link" href="/">
        Shop
      </a>
      {dropListStatus && (
        <div class="dropdown-menu" onMouseLeave={() => changeDropStatus(false)}>
          <a class="dropdown-item" href="#">
            Action
          </a>
          <a class="dropdown-item" href="#">
            Another action
          </a>
          <a class="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      )}
    </div>
  );
}

function OfficalMerchList() {
  const [dropListStatus, changeDropStatus] = useState(false);

  return (
    <div className="nav-item" onMouseOver={() => changeDropStatus(true)}>
      <a className="nav-link" href="/">
        Official Merch
      </a>
      {dropListStatus && (
        <div className="nav__drop__list" onMouseLeave={() => changeDropStatus(false)}>
          {/* <h1>Merch list</h1> */}
        </div>
      )}
    </div>
  );
}

export default Navigation;
