import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Myorders.css";

function Myorders() {
  const [orders, setorders] = useState([]);
  const [products, setproducts] = useState([]);
  const getMyOrders = () => {
    axios.get("http://localhost:8008/userOrderItems").then((response) => {
      console.log(response);
      setorders(response.data.message);
    });
  };

  useEffect(() => {
    getMyOrders();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table class="styled-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Order placed</th>
            <th>Method</th>
            <th>Price</th>
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <td><h3>Total orders:{orders && orders.length}</h3></td>
          </tr>
          {orders &&
            orders.map((i, index) => (
              <tr style={{ color: "#000" }}>
                
                <td>{index + 1}</td>
                <td>{i.orderObject.date}</td>
                <td>{i.orderObject.paymentMethod}</td>
                <td>{i.orderObject.totalAmount}</td>
                {i.orderObject.products.map((k) => {
                  return (
                    <>
                      <h4> {k.name} </h4>
                      <img
                        src={k.ImageUrl}
                        style={{ height: "50px", width: "50px" }}
                        alt=""
                      />
                    </>
                  );
                })}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Myorders;
