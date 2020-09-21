import React from "react";
import "../Css/Cart.css";
import { useSelector, useDispatch } from "react-redux";
const CartComponent = () => {
  const reduxResult = useSelector((state) => state);
  const reduxDispatch = useDispatch();
  const { cartList } = reduxResult;
  return (
    <div className="cart-list-main-div">
      <div className="cart-product-list">
        <h3>My Cart</h3>
        <div>
          {cartList.map((ele, i) => (
            <div className="cart-product-div">
              <div>
                <img
                  src={ele.pImage}
                  style={{ width: "50px", height: "70px" }}
                  alt="product-data"
                />
              </div>
              <div>
                <h4>{ele.pName}</h4>
                <h4>{ele.pPrice}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-total-items"></div>
    </div>
  );
};

export default CartComponent;
