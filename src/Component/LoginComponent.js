import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import "../Css/LoginComponent.css";
import logo from "../Assets/logo.png";
const LoginComponent = (props) => {
  return (
    <div className="AppBar">
      <AppBar position="static" color="secondry">
        <Toolbar variant="dense">
          {/* <ShoppingCartIcon className="cartLogo" /> */}
          <img src={logo} className="cartLogo"></img>
          <Typography className="title" variant="h6" nowrap>
            Home
          </Typography>
          <Typography className="title" variant="h6" nowrap color="inherit">
            About
          </Typography>
          <Typography className="title" variant="h6" nowrap>
            Blog
          </Typography>
          <Typography className="title" variant="h6" nowrap>
            Contact
          </Typography>
          <div className="search">
            <div className="searchIcon">
              <SearchIcon />
            </div>
            <div>
              <InputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
                className="inputInput"
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default LoginComponent;
