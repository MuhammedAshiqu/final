import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../../../Context/Context'
import { useContext } from 'react'
import './SingleProd.css'
import { toast, ToastContainer } from 'react-toastify'



function Productd() {
  const [detail, setdetails] = useState('')
  const { Users, AdminTrue, Cartcount } = useContext(DataContext)
  const [cartCount, setcartCount] = Cartcount


  const [adminTrue, setadminTrue] = AdminTrue

  const { id } = useParams()

  const addItem = (itm) => {
    console.log(itm);
    axios.get(`http://localhost:8008/add-to-cart/${itm}`).then((resp) => {
      console.log(resp);
      resp && toast(resp.data.message)
      alert("Product Added ,Checkout Cart")
      //  setres(true)
      //  setres(false)
    })
  }





  const description = () => {
    console.log("product id", id)
    axios.get(`http://localhost:8008/describ/${id}`).then((response) => {
      console.log("product details", response.data)
      setdetails(response.data);
    })
  }
  useEffect(() => {
    setadminTrue(false)
    description()


  }, [])
  return (
    <div>
      <div className='body'>
        <div className="container">
          <div className='prod-items'>
            <div className='left-img'>
              <img src={detail.url} />

            </div>
            <div className='center-img'>
              <img src={detail.url} />
            </div>


            <div className='desc'>
              <h1 style={{ color: "blue" }}>{detail.Name}</h1>
              <h4>{detail.Category}</h4>
              <u className='price'><h2>&#x20B9;{detail.Price}</h2></u>

              <button onClick={() => addItem(detail._id)} className=' bg-success' >Add to Cart</button>
              <br />
              <br />




              <h3>Description:{detail.Description}</h3>
              <h6 style={{ color: "GrayText" }}>uploaded by: {detail.CreatedBy}</h6>

            </div>

          </div>
        </div >




      </div >
    </div>
  )
}

export default Productd