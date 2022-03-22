import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Stripe from "../Stripe/Stripe";
import {
  FaCcVisa,
  FaCcAmazonPay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcStripe,
} from "react-icons/fa";
import "./Placeorder.css";
import { DataContext } from "../../../Context/Context";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { result } from "lodash";
import GooglePayButton from "@google-pay/button-react";

function Placeorder() {
  const navigate = useHistory();
  const [data, setdata] = useState();
  const [val, setval] = useState();
  const { AdminTrue } = useContext(DataContext);
  const [adminTrue, setadminTrue] = AdminTrue;
  const [input, setinput] = useState({
    name: "",
    email: "",
    address: "",
  });
  const placeOrder = () => {
    axios.get("http://localhost:8008/place-order").then((response) => {
      console.log("hAA", response);
      setdata(response.data);
      console.log("yes", response.data);
    });
  };
  const placeOrders = (meth) => {
    axios
      .post("http://localhost:8008/place-order", { meth, order: input })
      .then((response) => {
        console.log("AAh", response);
        // response.data.codSuccess && navigate.push('/order-success')
        setval(response.data.codSuccess);
        alert("clear cart now");

        console.log("no", response.data);
      });
  };
  const delet = () => {
    axios.post("http://localhost:8008/delete").then((result) => {
      console.log("deleted", result.data);
      navigate.push("/order-success");
    });
  };
  const handleChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    placeOrder();
    setadminTrue(false);
  }, []);

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}
async function displayRazorpay() {
  const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
  );

  if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
  }

  

  const options = {
      key:"rzp_test_Z rDhS62F5xMNjrZ4yn8ESMeyG", // Enter the Key ID generated from the Dashboard
      amount: data?.total?.toString(),
      currency: "INR",
      name: "shop",
      description: "Purchase",
      image:"",
      order_id: "order_DBJOWzybf0sJbb",
      handler: async function (response) {
        placeOrders("online")
        
          
      },
      prefill: {
          name: "shop",
          email: "something@gamil.com",
          contact: "99999999",
      },
      notes: {
          address: "address here",
      },
      theme: {
          color: "#61dafb",
      },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}

  return (
    <div className="">
      {/* <div class="order-container">
  <div class="order-title">
      <h2>Product Order Form</h2>
  </div>
<div class="d-flex">
  <form action="" method="">
    <label>
      <span class="fname">First Name <span class="required">*</span></span>
      <input type="text" name="fname" onChange={handleChange}/>
    </label>
    <label>
      <span class="lname">Last Name <span class="required">*</span></span>
      <input type="text" name="lname" onChange={handleChange}/>
    </label>
    <label>
      <span>Company Name (Optional)</span>
      <input type="text" name="cn" onChange={handleChange}/>
    </label>
    <label>
      <span>Country <span class="required">*</span></span>
      <select name="selection">
        <option value="IND" onChange={handleChange}>India</option>
      </select>
    </label>
    <label>
      <span>Street Address <span class="required">*</span></span>
      <input type="text" name="houseadd" placeholder="House number and street name" required onChange={handleChange}/>
    </label>
    <label>
      <span>&nbsp;</span>
      <input type="text" name="apartment" placeholder="Apartment, suite, unit etc. (optional)" onChange={handleChange}/>
    </label>
    <label>
      <span>Town / City <span class="required">*</span></span>
      <input type="text" name="city" onChange={handleChange}/> 
    </label>
    <label>
      <span>State / County <span class="required">*</span></span>
      <input type="text" name="city" onChange={handleChange}/> 
    </label>
    <label>
      <span>Postcode / ZIP <span class="required">*</span></span>
      <input type="text" name="city"onChange={handleChange}/> 
    </label>
    <label>
      <span>Phone <span class="required">*</span></span>
      <input type="tel" name="city"onChange={handleChange}/> 
    </label>
    <label>
      <span>Email Address <span class="required">*</span></span>
      <input type="email" name="city"onChange={handleChange}/> 
    </label>
  </form>
  <div class="Yorder">
    <table>
      <tr>
        <th colspan="2">Your order</th>
      </tr>
      <tr>
        <td>Product Name</td>
        <td>{data && data.Name}</td>
      </tr>
      <tr>
        <td>Subtotal</td>
        <td>{data && data.total}</td>
      </tr>
      <tr>
        <td>Shipping</td>
        <td>Free shipping</td>
      </tr>
    </table><br />
   
    <div>
      <input type="radio" name="dbt" value="cd" onClick={() => placeOrders("COD")}/> Cash on Delivery
    </div>
    <div>
      <input type="radio" name="dbt" value="cd" onClick={() =>displayRazorpay() } / > Pay Online <span>
      <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width="50"/>
      </span>
    </div>
  </div>
 </div>
</div> */}
jfif    </div>
  );
}

export default Placeorder;
