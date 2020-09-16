import { ButtonBase } from "@material-ui/core";
import React from "react";
import { FormControl, Button } from "react-bootstrap";
import { Form, Nav, Navbar, NavbarBrand, NavLink, NavItem } from "reactstrap";
import logo from "../Assets/logo.png";
import "../Css/Header.css";
const HeaderComponenet = () => {
  return (
    <div className="main-navBar">
      <Navbar bg="dark" variant="dark" className="nav-bar" expand="xl">
        <NavbarBrand>
          <img
            src={logo}
            width="250"
            height="80"
            className="logo"
            alt="Smart shop logo"
          />
        </NavbarBrand>
        <div className="nav-link-search">
          <Nav className="nav-link">
            <div className="navbar-nav">
              <a href="#home">Home</a>
              <a href="#shop">Shop</a>
              <a href="#blog">Blog</a>
              <a href="#about">About</a>
            </div>
          </Nav>
          <Form>
            <FormControl type="text" placeholder="search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </div>
      </Navbar>
    </div>
  );
};

export default HeaderComponenet;
