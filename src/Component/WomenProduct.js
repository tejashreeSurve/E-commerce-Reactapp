import { Container, Breadcrumb, BreadcrumbItem } from "reactstrap";
import React, { useEffect } from "react";
import "../Css/WomenProduct.css";
import Header from "./Header";
import product from "../db";
import ProductList from "./ProductList";
import { getAllProduct } from "../Services/UserServices";
import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getwomenProduct, getmenProduct } from "../Services/UserServices";
const WomenProduct = (props) => {
  const reduxResult = useSelector((state) => state);
  const reduxDispatch = useDispatch();
  const { womenProduct, menProduct, chooseOption } = reduxResult;
  console.log("PRODUCT FROM HEEADER", chooseOption);
  return (
    <div className="product-div">
      <div className="filter-container">
        <Container className="side-container" fluid="lg">
          <h2>Filter</h2>
        </Container>
      </div>
      <div className="product-container">
        <Container className="middle-container">
          <div className="middle-container-header">
            <div>
              <div>
                <h3>T-Shirt</h3>
              </div>
              <div className="sortBydiv">
                <span className="sortBy">Sort By</span>
                <div className="sortBy-option">Popularity</div>
                <div className="sortBy-option">Price --> Low to High</div>
                <div className="sortBy-option">Price --> High to Low</div>
              </div>
            </div>
            <div class="product-List">
              <ProductList product={chooseOption} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WomenProduct;
