import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderComponent from "../Component/HeaderComponent";
import DashboardComponent from "../Component/DashboardComponent";
import WomenProduct from "../Component/WomenProduct";
import Header from "../Component/Header";
import ProductDetails from "../Component/ProductDetails";
import CartComponent from "../Component/CartComponent";
const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HeaderComponent} />
      <Route path="/dashboard" component={DashboardComponent} />
      <Route path="/header" component={Header} />
      <Route path="/header/womenProduct" component={WomenProduct} />
      <Route path="/header/productDetails" component={ProductDetails} />
      <Route path="/header/cartList" component={CartComponent} />
    </BrowserRouter>
  );
};

export default Router;
