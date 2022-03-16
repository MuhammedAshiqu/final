import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import './Card.css'
import { DataContext } from '../../../Context/Context'
import { useContext } from 'react'
// import productd from '../productdescription/productd'
function CardS({i,setres}) {
  const {IsLoaged } = useContext(DataContext)

  const [isLoaged,setisLoaged]=IsLoaged

    const addItem = (itm) => {
         console.log(itm);
        axios.get(`http://localhost:8008/add-to-cart/${itm}`).then((resp) => {
            console.log(resp);
            resp&& toast(resp.data.message)
            setres(true)
            setres(false)
        })

    }

    const wishList =(itm)=>{
        
        axios.post(`http://localhost:8008/add-to-wishlist/${itm}`).then((response)=>{
            console.log(response);
           response&& toast(response.data.message)
            
        })
    }
    const sendChat =(id)=>{
      console.log(id);
      // axios.get(`http://localhost:8008/chat${id}`)
    }
    useEffect(() => {
      // it ? setisLoaged(true) :setisLoaged(false)
    
  }, [isLoaged])

    
    return (
        
            <div className="card-item">
                <ToastContainer
                    position="top-center"
                    autoClose={2001}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                />
    
    <div  className="photo">
      <div style={{width:'200px',display:'flex',alignItems:'center'}} className="photo-tic">
      <img width='200px' src={i.url} />
      </div>
      
    </div>
    <div className="description">
      <Link to={`/productd/${i._id}`}><h1 style={{color:"blue"}}>{i.Name}</h1></Link>
      <h4>{i.Category}</h4>
      <h1>&#8377; {i.Price}</h1>
      <p style={{color:"green"}}>
       Limited Offer price!!!
      </p>
      <p className='one'>Checkout Now</p>
      <p>upload :{i.CreatedBy}</p>
      {isLoaged &&
                <>
      <Link to={`/chat/${i.CreatedBy}`}> <button >chat</button></Link>
      </>
}
      {/* <button onClick={()=>addItem(i._id)} className=' bg-success' >Add to Cart</button> */}
      {/* <button onClick={()=>wishList(i._id)} className=' bg-warning' >Wishlist</button> */}
    </div>
  </div>
        
    )
}

export default CardS
