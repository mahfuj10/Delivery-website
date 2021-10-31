import React, { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
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
        fetch(`https://mighty-plains-84607.herokuapp.com/carts/${email}`)
          .then(res => res.json())
          .then(data => {
            setCartTotal(data)
            setProducts(data)
           
          } )
    }, [products])


    const handaleDelete = id => {

      
      const uri = `https://mighty-plains-84607.herokuapp.com/carts/${id}`;
      const exist = window.confirm("Are You sure want to delete ??")

      if(exist){
        fetch( uri ,{
          method: "DELETE"
      })
      .then()
      .then(data =>{
      

       if(data.deleteCount > 0) {
            alert("Delete Successfuly");
              const remainingProduct = products.filter(product => product._id !== id)
              setProducts(remainingProduct);
          }
          
          

      })
      }
    }

    return (
        <section className="container mt-5 pt-5">

<article className="cart-container gap-4 row">
    
{
                products.map(product => <article className="card mb-3 shadow" style={{maxWidth: "420px"}}>
              
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={product?.image} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{product?.title}</h5>
                      <h6 className="card-text text-muted my-3 mb-3">Price: ${product?.price}</h6>
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