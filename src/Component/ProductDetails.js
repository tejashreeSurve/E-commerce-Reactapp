import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Image } from "react-bootstrap";
import { DriveEtaOutlined } from "@material-ui/icons";
import { Button } from "reactstrap";
import "../Css/WomenProduct.css";

const ProductDetails = (props) => {
  const reduxResult = useSelector((state) => state);
  const reduxDispatch = useDispatch();
  const {
    womenProduct,
    menProduct,
    chooseOption,
    chooseProduct,
    noOfItems,
    cartList,
  } = reduxResult;
  console.log(chooseProduct);
  const addItems = () => {
    const nu = noOfItems + 1;
    reduxDispatch({
      type: "SET_NOOFITEMS",
      payload: nu,
    });
    reduxDispatch({
      type: "SET_CARTLIST",
      payload: chooseProduct,
    });
  };
  console.log("CART LIST", cartList);
  return (
    <div className="main-product-detail-div">
      <div className="product-detail-image">
        <Image
          src={chooseProduct.pImage}
          style={{ width: "400px", height: "500px" }}
          fluid
        />
        <div className="product-detail-button">
          <Button
            className="add-to-cart-button"
            color="secondary"
            onClick={() => addItems()}
          >
            ADD TO CART
          </Button>
          <Button className="buy-button" color="secondary">
            BUY NOW
          </Button>
        </div>
      </div>
      <div>
        <h2>{chooseProduct.pName}</h2>
        <h1>{chooseProduct.pPrice}</h1>
        <h3>{chooseProduct.pColor}</h3>
      </div>
    </div>
  );
};

export default ProductDetails;
