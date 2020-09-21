import { ButtonBase } from "@material-ui/core";
import React, { useEffect } from "react";
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
} from "reactstrap";
import { Image } from "react-bootstrap";
import logo from "../Assets/logo.png";
import pinkbackgroundgirl from "../Assets/pinkbackgroundgirl.jpg";
import whitebackgroundmen from "../Assets/whitebackgroundmen.jpg";
import mengirl from "../Assets/mengirl.jpg";
import bluebackgroundgirl from "../Assets/bluebackgroundgirl.jpg";
import "../Css/Header.css";
import greyGirl from "../Assets/greyGirl.jpg";
import whitebackgroundgirl from "../Assets/whitebackgroundgirl.jpg";
import girlCard from "../Assets/girlCard.jpg";
import blackbackgroundmen from "../Assets/blackbackgroundmen.jpg";
import men from "../Assets/men.jpg";
import menwomenwhite from "../Assets/menwomenwhite.jpg";
import ButtonBoth from "../Assets/ButtonBoth.jpeg";
import ButtonMen from "../Assets/ButtonMen.jpeg";
import ButtonWomen from "../Assets/ButtonWomen.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getwomenProduct, getmenProduct } from "../Services/UserServices";
import WomenProduct from "../Component/WomenProduct";
const HeaderComponent = (props) => {
  const cardImg = [
    {
      img: ButtonWomen,
    },
    {
      img: ButtonBoth,
    },
    {
      img: ButtonMen,
    },
  ];
  const reduxResult = useSelector((state) => state);
  const reduxDispatch = useDispatch();
  const getList = () => {
    getwomenProduct().then((response) => {
      reduxDispatch({
        type: "SET_WOMENPRODUCTLIST",
        payload: response.data,
      });
    });
    getmenProduct().then((response) => {
      reduxDispatch({
        type: "SET_MENPRODUCTLIST",
        payload: response.data,
      });
    });
  };
  const { womenProduct, menProduct } = reduxResult;
  console.log("women", womenProduct);
  console.log("men", menProduct);
  useEffect(() => {
    getList();
  }, []);
  const getProductFunction = (urlImage) => {
    if ("/static/media/ButtonWomen.28597632.jpeg" === urlImage) {
      reduxDispatch({
        type: "SET_CHOOSEOPTION",
        payload: womenProduct,
      });
      props.history.push("/header/womenProduct");
    }
    if ("/static/media/ButtonBoth.d778f88c.jpeg" === urlImage)
      console.log(true);
    if ("/static/media/ButtonMen.b20364f9.jpeg" === urlImage) {
      reduxDispatch({
        type: "SET_CHOOSEOPTION",
        payload: menProduct,
      });
      props.history.push("/header/womenProduct");
    }
  };
  return (
    <div>
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
      <div>
        <Image
          src={bluebackgroundgirl}
          style={{ width: "100%", height: "550px" }}
          fluid
        />
      </div>
      <div className="card-deck">
        {cardImg.map((element) => (
          <CardDeck className="cardDeck-div">
            <Card
              className="card"
              onClick={() => getProductFunction(element.img)}
            >
              <CardImg top width="100%" src={element.img} alt="card image" />
            </Card>
          </CardDeck>
        ))}
      </div>
    </div>
  );
};

export default HeaderComponent;
