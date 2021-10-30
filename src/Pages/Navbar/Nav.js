import React, { createContext, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory} from 'react-router';
import UseFirebase from '../../Firebase/UseFirebase';
import { addCartContext } from '../Cart/Cart';
import { cartContext } from '../Home/Products/Products';
import './Nav.css'
import { userContext } from '../Login/Login';

// export const userContext = createContext();

const Nav = () => {

    const history = useHistory();
    const { user, logOut } = UseFirebase();
    const [signUser,setSingUser] = useContext(userContext);
    setSingUser(user);
    console.log(signUser);
    // const [ cart, setCart ] = useState([]);
    // const [ cartItems ] = useContext(cartContext);
    // const [ signUser, setSingUser ] = useContext(userContext);

    const [ cartTotal, setCartTotal ] = useContext(addCartContext);
    // console.log(cartTotal);
    // useEffect(()=>{
    //   fetch(`http://localhost:5000/carts`)
    //      .then(res => res.json())
    //      .then(data => setCart(data))
    // },[])

    // setSingUser(user);
    // console.log(cart.length);
  const handaleHistory  = () => {
    history.push(`/carts/${user.email}`)
  }

    const handaleSignOut = () => {
      logOut();
      // setLogUser({});
    }

    return (
    
    <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" style={{paddingLeft:"16%"}} to="/home">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

          </button>

<span className="text-warning">{user.displayName}</span>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-5 pe-5 ms-auto mb-2 mb-lg-0">
                
            <aside  className="me-5 position-relative">
           <i  className="fas fa-cart-plus pt-2 fs-2 text-light" onClick={handaleHistory}></i>
  <span className="position-absolute mt-2 ms-0 translate-middle badge rounded-pill bg-danger">
   {cartTotal?.length}
    <span className="visually-hidden">unread messages</span>
  </span>


</aside>
  {user?.email ?<button className="singout-btn" onClick={handaleSignOut}>Sign Out</button>:<span></span>}
            {/* <i className="fas fa-cart-plus fs-2 text-light me-5"></i> */}
              <li className="nav-item">
                  <i className="icofont-cart-alt"></i>
                <Link className="nav-link active"  aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
             {user.email && <li className="nav-item">
                <Link className="nav-link" to="/manageOrder">Manage Order</Link>
              </li>}
             {user.email && <li className="nav-item">
                <Link className="nav-link" to="/addservice">Add a service</Link>
              </li>}
              <li className="nav-item">
                <a className="nav-link" href>Link</a>
              </li>
             
            </ul>
          
          </div>
        </div>
      </nav>
    );
};

export default Nav;