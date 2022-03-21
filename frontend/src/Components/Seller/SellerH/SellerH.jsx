// import React, { useState } from 'react'
// import {Link} from 'react-router-dom'
// import { BsBasket, BsCart4 } from "react-icons/bs";
// import { useContext, useEffect } from 'react'
// import { DataContext } from '../../../Context/Context'
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';

// import './SellerH.css'

// function SellerH () {
//     // const { Sellers, Cartcount, AdminTrue,IsLoaged } = useContext(DataContext)
//     // const [cartCount, setcartCount] = Cartcount

//     const [isSidebarOpen, setIsSidebarOpen] = useState(false)
//     // const [isLoaged,setisLoaged]=IsLoaged

//     const { Sellers, Cartcount, AdminTrue,IsLoaged } = useContext(DataContext)
//     // const [adminTrue, setadminTrue] = AdminTrue
//     const history= useHistory()
//     const [seller, setseller] = Sellers
//     const [cartCount, setcartCount] = Cartcount
//     const [isLoaged,setisLoaged]=IsLoaged
//     const [refresh, setrefresh] = useState(false)
//     const [currentSeller, setcurrentSeller] = useState()
//     const notify = () => toast("successfuly Logout");

//     // const logout = () => {
//     //     notify()
//     //     axios.get('http://localhost:8008/seller/signout').then((res) => {
//     //         console.log(res);
//     //         if (res.data.message = 'logout success') {
//     //             localStorage.removeItem('seller')
//     //             setisLoaged(false)
//     //             history.push('seller/Login')

//     //         } else {
//     //             alert('something went wrong')
//     //         }

//     //         // res.data.message = 'logout success' ?  localStorage.removeItem('seller') : alert('something went wrong')

//     //     })
//     // }
//     const reload = () => {
//         setrefresh(true)
//         setrefresh(false)
//     }

//     useEffect(() => {
//         const it =localStorage.getItem('seller')
//         it ? setisLoaged(true) :setisLoaged(false)
//         setcurrentSeller(it);
//     }, [refresh,isLoaged])

//   return (
//     <div className='navbar'>
//         <div>
//             <Link to='/'><img src="C:\Sellers\seller\Downloads\logo.png" alt="" /></Link>
//         </div>
//         <div className='navbar-nav'>
//             <ul>
//                 <Link to='/'><li>Home</li></Link>
//                 <Link to='/productview'><li>Products</li></Link>
//                {isLoaged &&
//                 <>
//                 <Link to='/messages'><li>Chat</li></Link>
//                 <Link to='/profile'> <li>Profile</li></Link>
//                 </>

// }
//                 {/* <Link to='/cart'><li>Cart</li></Link> */}
//                 <li>
//                      <img src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-seller-png-default-seller-image-png-png.png" alt="" onMouseOver={() => {
//                          setIsSidebarOpen(!isSidebarOpen)
//                      }} />
//                      {isSidebarOpen && (
//                          <div className='navbar-nav-dropdown'>
//                          <button>{isLoaged ? <h5 onClick={logout}> Logout </h5> : <Link style={{ textDecoration: 'none' }} to='/Login' > <h5 onClick={reload}  >Login</h5></Link>}</button>
//                         <Link to='/signup'><button>Signup</button></Link>
//                         <Link to='/admin'><button>Admin panel</button></Link>
//                       </div>
//                      )}
//                 </li>

//             </ul>
//         </div>
//     </div>
//   )
// }

// export default SellerH;
