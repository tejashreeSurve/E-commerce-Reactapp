import React, { Component } from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  UncontrolledCarousel,
  Row,
  Col,
} from "reactstrap";
import whitebackgroundmen from "../Assets/whitebackgroundmen.jpg";
import mengirl from "../Assets/mengirl.jpg";
import bluebackgroundgirl from "../Assets/bluebackgroundgirl.jpg";
import greyGirl from "../Assets/greyGirl.jpg";
const DashboardComponenet = () => {
  const items = [
    {
      src: greyGirl,
      altText: "Slide 1",
      caption: "Slide 1",
      header: "Slide 1 Header",
      key: "1",
    },
    {
      src: whitebackgroundmen,
      altText: "Slide 1",
      caption: "Slide 1",
      header: "Slide 1 Header",
      key: "1",
    },
    {
      src: mengirl,
      altText: "Slide 1",
      caption: "Slide 1",
      header: "Slide 1 Header",
      key: "1",
    },
    {
      src: bluebackgroundgirl,
      altText: "Slide 1",
      caption: "Slide 1",
      header: "Slide 1 Header",
      key: "1",
    },
  ];
  return (
    <div className="car-block">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
      />
      <Row>
        <Col lg="9" className="mx-auto">
          <UncontrolledCarousel className="uncontroller" items={items} />
        </Col>
      </Row>
    </div>
  );
};

export default DashboardComponenet;
