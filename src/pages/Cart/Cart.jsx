import React, { useState,useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import LoginPopup from "../../components/LoginPopup/LoginPopup";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
    const [bhowLogin,betShowLogin]=useState(false);

  const navigate = useNavigate();

  return (
    <>
    {bhowLogin ? <LoginPopup setShowLogin={betShowLogin}/> : <></>}
      <div className="cart">
        <div className="cart-to-home navbar">
          <Link to="/">
            {" "}
            <img src={assets.logo} alt="" className="logo" />
          </Link>
          <div className="navbar-right">
            <div className="navbar-search-icon">
              <Link to="/cart">
                <img src={assets.basket_icon} alt="" />
              </Link>
              <div className={!getTotalCartAmount() ? "" : "dot"}></div>
            </div>
            <button onClick={() => betShowLogin(true)}>sign in</button>
            <button onClick={() => navigate("/")}>Back To Home</button>
          </div>
        </div>
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <p
                      onClick={() => removeFromCart(item._id)}
                      className="cross"
                    >
                      x
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>SubTotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{getTotalCartAmount() == 0 ? "0" : "$2"}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <b>
                  {getTotalCartAmount() === 0
                    ? 0
                    : "$" + (getTotalCartAmount() + 2)}
                </b>
              </div>
            </div>
            <button onClick={() => navigate("/order")}>
              Proceed To Checkout
            </button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If You Have a Promocode, Enter It Here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
