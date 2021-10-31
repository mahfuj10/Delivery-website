import React, { createContext, useContext, useEffect, useState } from 'react';
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import './Products.css';
import { useHistory } from 'react-router';
import UseAuth from '../../../UseAuth';
import { Card, Spinner } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';


export const productsContext =  createContext();
export const cartContext =  createContext();


const Products = () => {

    const history = useHistory();
    const { isLoading, setIsloading } = UseAuth();
    const [ items, setItems ] = useState([]);
    const [ products, setProducts ] = useContext(productsContext);
    const [ cartItems, setCartItems ] = useContext(cartContext);
    const [ carts, setCart ]  = useState([]);

    useEffect(()=>{

        setIsloading(true)
        fetch(`https://mighty-plains-84607.herokuapp.com/products`)
           .then(res => res.json())
           .then(data => {
                setItems(data);
                setIsloading(false)
           })
    },[])
   
if(isLoading){
    return <Spinner style={{marginLeft:"50%"}} animation="border" variant="primary" />
}

    const HandaleAddToCart = id => {
       history.push(`/products/${id}`)
    }

    return (
        <section  data-aos="fade-up">
            <h3 className="text-center" style={{marginTop:"130px"}}>Popular Products</h3>
            <h6 className="text-center" >Order Now</h6>
        
      <article className="products-container">
      {
          items.map(product => <Card key={product._id} className="product" style={{ width: '21rem',border:"none" }}>
               <Button className="details-button" onClick={ () => HandaleAddToCart(product._id)} variant="primary">Book Now</Button>
          <Card.Img style={{width:"220px",marginLeft:"auto",marginRight:"auto"}} variant="top" src={product.image}/>
          <Card.Body>
            <Card.Title style={{fontSize:"19px",textAlign:"center"}}>{product.title}</Card.Title>
            <Card.Text className="text-center">
            {product.descrition}
            </Card.Text>
           
          </Card.Body>
        </Card> )
    
      }
      {/* <article className="product" style={{width:"360px"}}>
              <button className="details-button" onClick={ () => HandaleAddToCart(product._id)}>Book Now</button>
              <img width="220" style={{marginLeft:"70px"}} src={product.image} alt="" />
              <h6 className="text-center">{product.title}</h6>
              <p className="text-center">{product.descrition}</p>
              <h6 className="text-center">${product.price}</h6>
          </article> */}
    </article>
        </section>
    );
};

export default Products;