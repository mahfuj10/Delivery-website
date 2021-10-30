import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import UseFirebase from '../../Firebase/UseFirebase';
import orderBanner from '../../Images/orderBanner.jpg';
import { userContext } from '../Login/Login';
import Nav from '../Navbar/Nav';
import './Order.css';

const Order = () => {

    // const { user } = UseFirebase();
    const [ signUser, setSingUser] = useContext(userContext);
    const { id } = useParams();
    const [ item , setItem] = useState({})
    // const [ cartItems, setCartItems  ] = useState([]);

    useEffect( () => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    },[])

const handaleAddToCart = () => {

    // const newArr = [...cartItems, item];
    // setCartItems(newArr);
    item.email = signUser?.email;
    console.log(item);

    fetch(`http://localhost:5000/carts`,{
        method:"POST",
        headers : {
            'content-type' : 'application/json'
        },
        body:JSON.stringify(item)
        })
        .then( res => res.json())
        .then( data => {} )
        // console.log(item);

}



    return (
    
        <section>


<Nav />
<article  style={{backgroundImage:`url(${orderBanner})`,height:"50vh",backgroundSize:"cover"}}>
    <article id="order-banner"></article>
    
        <h1 className="text-center text-light pt-5">{item?.title}</h1>
        <aside className="nav-link">
            <NavLink to="/home">Home |</NavLink>
            <NavLink to="/product">Product |</NavLink>
            <NavLink to="/fastfood">Fastood |</NavLink>
            <span className='item-name'> {item?.title} </span>
            
        </aside>
</article>

            


            <article className="d-flex  gap-5 justify-content-center " style={{marginTop:'100px'}}>

                <aside>
                    <img width="423" src={item?.image} alt="" />
                </aside>
                
                <aside className="mt-5">
                    <h3 className="text-dark mb-4">${item?.price}</h3>
                    <h6 className="mb-4"> {item?.descrition}</h6>
                 
                  <aside className="d-flex gap-4 mb-3">

                        <span className="d-flex gap-3 w-25 justify-content-center" style={{border:"1px solid grey",borderRadius:"10px"}}>
                          <h6 className="mt-2 fs-4">1</h6>
                          <span>
                               <i class="fas fa-arrow-up"></i><br />
                               <i class="fas fa-arrow-down"></i>
                          </span>
                        </span>

                        <button onClick={handaleAddToCart} className="btn px-4 py-2 btn-warning" style={{borderRadius:"20px"}}>Add to cart</button>
                    </aside>
                    <small className="fw-bold">Categeory : {item?.categeory}</small>
                </aside>

            </article>
        </section>
    );
};

export default Order;