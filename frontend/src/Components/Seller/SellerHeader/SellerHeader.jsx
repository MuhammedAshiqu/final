import React from "react";
import { Link } from "react-router-dom";
import "./SellerHeader.css";

function SellerHeader() {
  return (
    <div>


      <header>
        <nav>
          <div class="logo">
            <span>Pas_Seller</span>{" "}
          </div>
          <div class="menu">
            <ul>
              <li>
                <Link to="/seller-viewprod">View products</Link>
              </li>
              <li>
                <Link to="/seller-addprod">Add products</Link>
              </li>
              <li>
                <Link to="/seller-addshop">Add Shop</Link>
              </li>
              <li>
                <Link to="/seller-shop/:id">Shops</Link>
              </li>
              <li>
                <Link to="/seller-orders">Orders</Link>
              </li>
            </ul>
          </div>
          <div class="login">
            <ul>

              <li>
                <div className="button"><Link to="/seller-signin">Sign In</Link></div>
              </li>


              <li>
                <div className="button"><Link to="/seller-signup">Sign Up</Link></div>
              </li>

            </ul>
          </div>
          <input type="checkbox" name="" id="hamburger" />

          <div class="toogle">
            <label for="hamburger">
              <span></span>
            </label>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default SellerHeader;
