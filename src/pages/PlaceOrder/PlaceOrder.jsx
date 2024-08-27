import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import { Link,useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const PlaceOrder = () => {

    const {getTotalCartAmount} =useContext(StoreContext);
     const navigate = useNavigate(); 
  return (
    <>
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
            <button onClick={() => navigate("/")}>Back To Home</button>
          </div>
        </div>
    <form className="place-order" action="">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First-Name" />
          <input type="text" placeholder="Last-Name" />
        </div>
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
      <div className="multi-fields">
        <input type="text" placeholder="City" />
        <input type="text" placeholder="State" />
      </div>
      <div className="multi-fields">
        <input type="text" placeholder="Zip-code" />
        <input type="text" placeholder="Country" />
      </div>
      <input type="text" placeholder="phone" />
      </div>

      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="yogi1">
          <div className="cart-total-details">
              <p>SubTotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount()==0?'0':'₹50'}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <b>{getTotalCartAmount()===0?0:'₹'+(getTotalCartAmount()+50)}</b>
            </div>
          </div>
          <button onClick={() => navigate("/")}>Proceed To Payment</button>
        </div>
      </div>
    </form>
    </>
  );
};

export default PlaceOrder;
