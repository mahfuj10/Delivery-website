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
    const [ item , setItem] = useState({});
    const [ address,setAddress ] = useState('');
    const [ number,setNumber ] = useState('');
    // const [ cartItems, setCartItems  ] = useState([]);

    useEffect( () => {
        fetch(`https://mighty-plains-84607.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    },[])

    const userAddress = document.getElementById('userAddress');
    const userNumber = document.getElementById('userNumber');
    const saveUserData = () => {
        setAddress(userAddress.value);
        setNumber(userNumber.value);
        console.log(address,number);
      
        
    }
    item.location = address;
    item.phoneNumber = number;

const handaleAddToCart = () => {

    item.email = signUser?.email;
    // console.log(item);
    item.staus = 'pending';
if(address !== '' && number !== ''){
    fetch(`https://mighty-plains-84607.herokuapp.com/carts`,{
        method:"POST",
        headers : {
            'content-type' : 'application/json'
        },
        body:JSON.stringify(item)
        })
        .then( res => res.json())
        .then( data => {} )
    }
    else{
        alert('fill the form please')
    }
}



    return (
    
        <section>


<Nav />



<article  style={{backgroundImage:`url(${orderBanner})`,height:"50vh",backgroundSize:"cover"}}>
    <article id="order-banner"></article>
    
        <h1  className="text-center deitals-item-name pt-5">{item?.title}</h1>
        <aside className="nav-link">
            <NavLink to="/home">Home |</NavLink>
            <NavLink to="/product">Product |</NavLink>
            <NavLink to="/fastfood">Fastood |</NavLink>
            <span className='item-name'> {item?.title} </span>
            
        </aside>
</article>

<article className="buyer-details ">
     <h3 className="text-center mt-5">Give your details</h3>

<aside>
<input type="text" value={signUser?.displayName} />
  <input type="text" value={signUser?.email}/><br />
  <input type="text" id="userNumber" placeholder="Phone Number"/>
  <input type="text" id="userAddress" placeholder="Address" /><br />
  <input type="submit" onClick={saveUserData} className="bg-warning"/>
  </aside>
 </article>


            <article className="d-flex  gap-5 justify-content-center " style={{marginTop:'100px'}}>

                <aside>
                    <img width="423" src={item?.image} alt="" />
                </aside>
                
                <aside className="mt-5">
                    <h3 className="text-dark mb-4">${item?.price}</h3>
                  
                    <h6 className="mb-4 "> {item?.descrition} </h6>
                    
                 
                  <aside className="d-flex gap-4 mb-3">

                        <span className="d-flex gap-3 w-25 justify-content-center" style={{border:"1px solid grey",borderRadius:"10px"}}>
                          <h6 className="mt-2 fs-4">1</h6>
                          <span>
                               <i className="fas fa-arrow-up"></i><br />
                               <i className="fas fa-arrow-down"></i>
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