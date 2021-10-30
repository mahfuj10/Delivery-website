import React, { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import UseFirebase from '../../Firebase/UseFirebase';
import { productsContext } from '../Home/Products/Products';

export const addCartContext = createContext();

const Cart = () => {

  const { user } = UseFirebase();
    // const { id } = useParams();
    const [ cartTotal, setCartTotal ] = useContext(addCartContext);

    const [ products, setProducts ] = useState([]);
    const { email } = useParams();


    useEffect(()=>{
        fetch(`http://localhost:5000/carts/${email}`)
          .then(res => res.json())
          .then(data => {
            setCartTotal(data)
            setProducts(data)
           
          } )
    }, [products] )


    const handaleDelete = id => {

      
      const uri = `http://localhost:5000/carts/${id}`;
      console.log(uri);
      fetch( uri ,{
            method: "DELETE"
        })
        .then()
        .then(data =>{
            if(data.deleteCount > 0){
                const remainingProduct = products.filter(product => product._id !== id)
                setProducts(remainingProduct);
            }
        })
    }

    return (
        <section className="container mt-5 pt-5">

<article className="cart-container gap-4 row ">
    
{
                products.map(product => <article class="card mb-3" style={{maxWidth: "420px"}}>
              
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={product?.image} class="img-fluid rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{product?.title}</h5>
                      <h6 class="card-text text-muted my-3 mb-3">Price: ${product?.price}</h6>
                    <button className="btn btn-warning" onClick={()=> handaleDelete(product?._id)}>REMOVE</button>
                    </div>
                  </div>
                </div>
              </article>)
            }
</article>

            
        </section>
    );
};

export default Cart;