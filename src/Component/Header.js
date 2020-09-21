import React from "react";
import "../Css/Header.css";
import { IoIosCart } from "react-icons/io";
import { FormControl, Button } from "react-bootstrap";
import {
  Form,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  NavItem,
  UncontrolledCarousel,
  Carousel,
  CarouselCaption,
  CarouselItem,
  Row,
  Col,
  Card,
  CardImgOverlay,
  CardTitle,
  CardText,
  CardDeck,
  CardImg,
  CardBody,
  Badge,
} from "reactstrap";
import { Image } from "react-bootstrap";
import logo from "../Assets/logo.png";

import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const reduxResult = useSelector((state) => state);
  const reduxDispatch = useDispatch();
  const {
    womenProduct,
    menProduct,
    chooseOption,
    chooseProduct,
    noOfItems,
  } = reduxResult;
  return (
    <div className="main-navBar">
      <Navbar bg="dark" variant="dark" className="nav-bar" expand="xl">
        <div class="div">
          <NavbarBrand>
            <img
              src={logo}
              width="250"
              height="80"
              className="logo"
              alt="Smart shop logo"
            />
          </NavbarBrand>
        </div>
        <div className="nav-link-bar-div">
          <Nav className="nav-link-tag">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#shop" className="nav-link">
              Shop
            </a>
            <a href="#blog" className="nav-link">
              Blog
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="/login" className="nav-link">
              Login
            </a>
            <a href="/header/cartList" className="cart-nav-link">
              <IoIosCart>cart</IoIosCart>
              <Badge className="custom" color="secondary">
                {noOfItems}
              </Badge>
            </a>
          </Nav>
        </div>
        <div className="nav-link-search">
          <Form class="form">
            <FormControl
              type="text"
              placeholder="Search"
              className="search-bar"
            />
            <Button variant="outline-info" className="from-button">
              Search
            </Button>
          </Form>
        </div>
      </Navbar>
    </div>
  );
};
export default Header;
