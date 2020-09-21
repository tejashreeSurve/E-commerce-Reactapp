import React from "react";
import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import "../Css/WomenProduct.css";
import ProductDetails from "../Component/ProductDetails";
import { Redirect, withRouter } from "react-router";
const ProductList = (props) => {
  // const reduxResult = useSelector((state) => state);
  // const { womenProduct } = reduxResult;
  const reduxResult = useSelector((state) => state);
  const reduxDispatch = useDispatch();
  const { womenProduct, menProduct, chooseOption, chooseProduct } = reduxResult;
  const onClickHandle = (pro) => {
    console.log("onclick", pro);
    reduxDispatch({
      type: "SET_CHOOSEPRODUCT",
      payload: pro,
    });
    props.history.push("/header/productDetails");
  };

  return (
    <div>
      {props.product.map((pro, i) => (
        <Card className="cardstyle" onClick={() => onClickHandle(pro)}>
          <CardImg
            className="cardIm"
            top
            src={pro.pImage}
            alt="Card image cap"
          ></CardImg>
          <CardBody className="cardBody">
            <CardTitle className="cardTitle">{pro.pName}</CardTitle>
            <CardText className="cardText">{pro.pColor}</CardText>
            <CardText className="cardText">{pro.pPrice}</CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default withRouter(ProductList);
