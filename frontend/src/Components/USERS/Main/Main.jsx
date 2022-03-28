import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { DataContext } from "../../../Context/Context";
import "./Main.css";
import { Card, Carousel, Dropdown, DropdownButton } from "react-bootstrap";

import CardS from "../Card/Card";

function Main() {
  const history = useHistory();

  const { State, AdminTrue, Users, Cartcount } = useContext(DataContext);
  // const [state,setstate]=State
  const [adminTrue, setadminTrue] = AdminTrue;
  const [state, setstate] = useState([]);
  const [user, setuser] = Users;
  // const [contact,setcontact]=Users
  const [cUser, setcUser] = useState("");
  const [cartCount, setcartCount] = Cartcount;
  const [res, setres] = useState(false);

  const getcurrentUser = () => {
    const currentUser = localStorage.getItem("user");
    setcUser(currentUser);
  };
  const getData = () => {
    console.log("getdata working");
    axios.get(process.env.REACT_APP_API_URL).then((response) => {
      console.log(response.data);
      setcartCount(response.data.cartCount);
      setstate(response.data.products);
    });
  };

  useEffect(() => {
    setadminTrue(false);
    getData();
    getcurrentUser();
  }, [res]);

  return (
    <div className="parent">
      <div className="Hero">
        <div className="hero-img">
          <img src="https://emarsys.com/app/uploads/fly-images/83576/GettyImages-1198383207-1110x9999.jpg" alt="" />
        </div>
        <div className="hero-content">
          <div className="title">
            <h2>
              {" "}
              <b>Welcome to Goods and Services! </b>{" "}
            </h2>
            <br />
            <h5>
              {" "}
              <b>Sell and Buy anytime for anything! </b>
            </h5>
            <h5>
              <b>
                Trade products or services for other products
                <br />
                or services!
              </b>{" "}
            </h5>
            <p>Bag Quality Products From Most Trusted Sellers</p><br />
            <button className="shopbtn"><Link to="/productview"><div className="btntxt">Shop Now</div></Link></button>
          </div>
        </div>
      </div>

      <div className="holder">
        {/* <Link to='/add-product' > <button>Add Product</button></Link> */}

        <div className="menu">
          {/* {OpenModal && <Modal OpenModal={OpenModal} setOpenModal={setOpenModal} />} */}
        </div>

        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="hr"
        >
          <h1 className="menuTitle">Products</h1>
          <hr width="15%" />
        </div>
        <div className="mid">
          <div className="mid-content">
            {/* <Carousel   style={{height:"300px" , width:"300px"}}>
                {
                        state.map((i) => {
                            return (
                                <Carousel.Item interval={1000}>
                               <Link to={`/productd/${i._id}`}> <img
                                  className="d-block w-100"
                                  src={i.url}
                                  alt="First slide"

                                  />
                                  </Link>

                                  </Carousel.Item>
                            )
                        })
                    }
                    </Carousel> */}

            {/* <h4>Special for buyers! Because of our barter trade platform, you can buy and sell any type of product and service at your price and conditions. With the option of chat and calls, you can connect with the seller easily and get the kind information you want from the seller for satisfaction.</h4> */}
          </div>

          <div className="rightmar">
            {/* <Carousel   style={{height:"300px" , width:"300px"}}>
                {
                        state.map((i) => {
                            return (
                                <Carousel.Item interval={2000}>
                                 <Link to={`/productd/${i._id}`}><img
                                  className="d-block w-100"
                                  src={i.url}
                                  alt="First slide"
                                  />
                                  </Link>
                                  </Carousel.Item>
                            )
                        })
                    }
                    </Carousel> */}
          </div>
        </div>
        <div className="map-items">
          {state.map((i) => {
            return <CardS setres={setres} i={i} />;
          })}
        </div>
      </div>

      <div className="mid">
        <div className="mid-content"></div>
        {/* <Carousel   style={{height:"300px" , width:"300px"}}>
                {
                        state.map((i) => {
                            return (
                                <Carousel.Item interval={1000}>
                                <Link to={`/productd/${i._id}`}><img
                                  className="d-block w-100"
                                  src={i.url}
                                  alt="First slide"
                                  />
                                  </Link>
                                  </Carousel.Item>
                            )
                        })
                    }
                    </Carousel> */}

        {/* <h4>Special for buyers! Because of our barter trade platform, you can buy and sell any type of product and service at your price and conditions. With the option of chat and calls, you can connect with the seller easily and get the kind information you want from the seller for satisfaction.</h4> */}
        <div
          className="mid-hero"
          style={{ padding: "100px", height: "50px", width: "50px" }}
        ></div>
      </div>
    </div>
  );
}

export default Main;
