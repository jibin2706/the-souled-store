import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./navigation.scss";

function Navigation() {
  return (
    <div className="position-relative">
      <div className="nav__top text-right">
        <span>Track Order</span>
      </div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <a className="navbar-brand d-none d-md-none d-lg-block" href="/">
            <img src="/static/logo.png" alt="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <ShopNavList />
            <OfficalMerchList />
            <NavItem href="/" title="Game of thrones" isNew={false} />
            <NavItem href="/" title="Exclusive" isNew={true} />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

function NavItem({ href, title, isNew }) {
  return (
    <Nav.Link className="nav-item" href={href}>
      {title}
      {isNew && <sup className="nav-item--new">new</sup>}
    </Nav.Link>
  );
}

function ShopNavList() {
  return (
    <>
      <NavDropdown title="Shop" id="basic-nav-dropdown">
        <NavDropdown.Item href="/product">T-Shirts</NavDropdown.Item>
        <NavDropdown.Item href="/product">Stickers</NavDropdown.Item>
        <NavDropdown.Item href="/product">Backpacks</NavDropdown.Item>
      </NavDropdown>
    </>
  );
}

function OfficalMerchList() {
  return (
    <NavDropdown title="Offical Merch" id="basic-nav-dropdown">
      <NavDropdown.Item href="/product">Film Tv</NavDropdown.Item>
      <NavDropdown.Item href="/product">Bollywood</NavDropdown.Item>
      <NavDropdown.Item href="/product">Music</NavDropdown.Item>
    </NavDropdown>
  );
}

export default Navigation;
