import React, { createContext, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory} from 'react-router';
import UseFirebase from '../../Firebase/UseFirebase';
import { addCartContext } from '../Cart/Cart';
import { cartContext } from '../Home/Products/Products';
import './Nav.css';
import { userContext } from '../Login/Login';

// export const userContext = createContext();

const Nav = () => {

    const history = useHistory();
    const { user, logOut } = UseFirebase();
    const [signUser,setSingUser] = useContext(userContext);
    setSingUser(user);

    const [ cartTotal, setCartTotal ] = useContext(addCartContext);



  const handaleHistory  = () => {
    history.push(`/carts/${user?.email}`)
  }

    const handaleSignOut = () => {
      logOut();

    }

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand navTitle" to="/home">Lucky Delivery</Link>
        <span className="text-warning">{user?.displayName}</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            
         
{user?.email ?<button className="singout-btn" onClick={handaleSignOut}>Sign Out</button>:<span></span>}

            <li className="nav-item ">
              <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
            </li>
            <li className="nav-item ">
    <Link className="nav-link" to="/login">Login</Link>
               </li>
              {user.email && <li className="nav-item">
                 <Link className="nav-link" to="/manageOrder">Manage Order</Link>
               </li>}
              {user.email && <li className="nav-item">
                 <p className="nav-link text-light me-4" onClick={handaleHistory} >My Order</p>
               </li>}
              {user.email && <li className="nav-item">
                 <Link className="nav-link" to="/addservice">Add a service</Link>
               </li>}
          </ul>
        </div>
      </div>
    </nav>
    
    );
};

export default Nav;