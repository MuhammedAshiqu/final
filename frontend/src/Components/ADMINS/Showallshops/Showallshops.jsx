import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function Showallshops() {
  const [ref, setref] = useState(false);
  const [allshops, setallshops] = useState([]);
  const getAllShops = () => {
    axios.get("http://localhost:8008/admin/all-shops").then((result) => {
      console.log(result);
      setallshops(result.data.shops);
    });
  };
  const deleteShop = (id) => {
    let it = window.confirm("Are You Sure Delete ?");
    it &&
      axios.get(`http://localhost:8008/admin/remove-shop/${id}`).then((res) => {
        console.log(res);
        setref(true);
        setref(false);
      });
  };

  useEffect(() => {
    getAllShops();
  }, [ref]);
  return (
    <div className="main-i">
      {/* try */}
      <table class="styled-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Seller Id</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {allshops.map((i, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{i.Name}</td>
              <td>{i.SellerId}</td>

              {/* <td>
                <button
                  onClick={() => deleteUser(i._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
      {/* try */}
    </div>
  );
}

export default Showallshops;
