import React from "react";
import { Link } from "react-router-dom";
import "./SellerHeader.css";

function SellerHeader() {
  return (
    <div>
      <Link to="/seller-viewprod">View products</Link>
      <Link to="/seller-addprod">Add products</Link>
      <header>
        <nav>
          <div class="logo">
            <span>Wercel</span>{" "}
          </div>
          <div class="menu">
            <ul>
              <li>
                <a href="">Templates</a>
              </li>
              <li>
                <a href="">Analytics</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
            </ul>
          </div>
          <div class="login">
            <ul>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Login</a>
              </li>
              <li>
                <a id="signup" href="">
                  Sign Up
                </a>
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
