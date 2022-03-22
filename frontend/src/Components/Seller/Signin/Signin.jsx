import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { DataContext } from '../../../Context/Context';
import './Signin.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import logo1 from './../../../loginq.jfif';
import useForm from '../../Validation/Validation';
import './Signin.css'

function Signin() {
    //Final submit function
    const formLogin = () => {
        console.log('Callback function when form is submitted!');
        console.log('Form Values ', values);
    };

    //Custom hook call
    const { handleChange, values, errors, handleSubmit } = useForm(formLogin);

    const history = useHistory();
    const { State, AdminTrue, Sellers, IsLoaged } = useContext(DataContext);
    const LoginSuccess = () => toast('Login Success');
    const [adminTrue, setadminTrue] = AdminTrue;
    const [isLoaged, setisLoaged] = IsLoaged;
    const [state, setstate] = State;

    const [seller, setseller] = Sellers;
    const [error, seterror] = useState();
    const [reload, setreload] = useState(false);
    const [input, setinput] = useState({
        Email: '',
        Password: '',
    });
    const [message, setmessage] = useState();

    const formdata = new FormData();

    const handleChane = (e) => {
        setmessage('');

        setinput({ ...input, [e.target.name]: e.target.value });
    };
    const handleClick = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:8008/seller/signin', input)
            .then((response) => {
                const vname = response.data.session?.seller;
                console.log('chh', vname);
                const vvname = response.data.session?.seller.Name;
                // response&& toast(response.data.user)

                // console.log('resq',response.data.session.user.Name);

                // setuser(response.data.session.user)
                setseller(vname);

                setmessage(response.data.message);

                localStorage.setItem('seller', vvname);
                setreload(true);
                setreload(false);
                if (response.data.session?.signedIn) {
                    LoginSuccess();
                    setisLoaged(true);
                    history.push('/seller');
                } else alert('Login failed');
            });
    };
    useEffect(() => {
        setadminTrue(false);
        localStorage.getItem('seller');
    }, [reload]);
    return (
        // <div className='login'>
        //     <div className='login-wrapper'>
        //         <h3>Welcome Back</h3>
        //         <p>please signin to continue</p>
        //     </div>
        //     <form className='login-form'>
        //         {error ? <h2 style={{ color: 'red' }}>{error}</h2> : ''}
        //         <h2>{message}</h2>
        //         <input
        //             onChange={handleChane}
        //             name='Email'
        //             value={input.Email}
        //             placeholder='Username'
        //             class='input'
        //             autoComplete='on'
        //             type='email'
        //             required
        //         />
        //         <input
        //             onChange={handleChane}
        //             name='Password'
        //             value={input.Password}
        //             placeholder='Password'
        //             class='input'
        //             type='password'
        //             required
        //         />
        //         <center>
        //             <button onClick={handleClick} type='submit' class='button'>
        //                 Login{' '}
        //             </button>
        //         </center>

        //         <Link style={{ textDecoration: 'none' }} to='/seller-signup'>
        //             <Button className='btn btn-primary text-dark'>
        //                 SignUp
        //             </Button>
        //         </Link>

        //         {/* <p className='login-form-bottontext'>Don't have an account? <span>Signup</span></p> */}
        //     </form>
        // </div>


        // try
        <div>
            <div>
      <div class="container">
        <div class="c1">
          <div class="c11">
            <h1 class="mainhead">PICK YOUR SPOT</h1>
            <p class="mainp">
              Just click the buttons below to toggle between SignIn & SignUp
            </p>
          </div>
          <div id="left">
            <h1 class="s1class">
              <span>SIGN</span>
              <span class="su">IN</span>
            </h1>
          </div>
          <div id="right">
            <h1 class="s2class">
              <span>SIGN</span>
              <span class="su">UP</span>
            </h1>
          </div>
        </div>
        <div class="c2">
          <form class="signup">
            <h1 class="signup1">SIGN UP</h1>
            <br />
            <br />
            <br />
            <br />
            <input
              name="username"
              type="text"
              placeholder="Username*"
              class="username"
            />

            <input
              name="email"
              type="text"
              placeholder="Email*"
              class="username"
            />

            <input
              name="password"
              type="password"
              placeholder="Password*"
              class="username"
            />

            <button class="btn">Sign Up</button>
          </form>
          <form class="signin">
            <h1 class="signup1">SIGN IN</h1>
            <br />
            <br />
            <br />
            <br />
            <input
              name="username"
              type="text"
              placeholder="Username*"
              class="username"
            />

            <input
              name="password"
              type="password"
              placeholder="Password*"
              class="username"
            />

            <button class="btn">Get Started</button>

            <br />
            <br />
            <br />
            <br />
            <a href="">
              <p class="signup2">Forget Password?</p>
            </a>
          </form>
        </div>
      </div>
    </div>
        </div>
    );
}

export default Signin;
