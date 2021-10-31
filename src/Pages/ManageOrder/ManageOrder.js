import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import UseAuth from '../../UseAuth';
import Nav from '../Navbar/Nav';

const ManageOrder = () => {

    const [ orders, setOrders ] = useState([]);
    const { isLoading, setIsloading } = UseAuth();
    const [ staus, setStatus ] = useState('updated');

    // fetch the api
    useEffect(()=>{
        fetch(`https://mighty-plains-84607.herokuapp.com/carts`)
          .then(res => res.json())
          .then(data => setOrders(data))
    },[orders]);

// update status code

    const handelupdate = id =>{
        
        
        const url=(`https://mighty-plains-84607.herokuapp.com/carts/${id}`);
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(staus)

        })
        .then(res=>res.json())
        .then(data =>{
            if( data.modifiedCount > 0 ){
                alert('update successfully')
            }
        })

    
    }


  
// delete singel api
    const handaleDelete = id => {
   
        const uri = `https://mighty-plains-84607.herokuapp.com/carts/${id}`;
        const exist = window.confirm("Are You sure want to delete ??");
        if(exist){
            fetch( uri ,{
                method: "DELETE",
                
            })
           
            .then()
            .then(data =>{
                if(data.deleteCount > 0){
                    alert('Delete sucessfully');
                    const remainingProduct = orders.filter(product => product._id !== id)
                    setOrders(remainingProduct);
                }
            })
        }
   
    }


    return (

        <section style={{height:"100vh"}}>

          <Nav/>
            
            <h3 className="text-center mb-5 mt-5 pt-3">Manage All Orders </h3>
            <div className="d-flex flex-wrap justify-content-center gap-5">
            {
                orders.map( order => <article className="d-flex gap-3 shadow align-items-center" style={{width:"36rem",height:"13rem"}}>

                        <aside>
                            <img width="160" src={order?.image} alt="" />
                        <i onClick={()=>handaleDelete(order._id)} className="fas fs-3 fa-trash-alt position-absolute" style={{marginLeft:"19rem",marginTop:"20px",zIndex:'999'}}></i>
                        </aside>
                        <aside>
                            <h5>{order?.title}</h5>
                            <span><b>Price:</b> ${order?.price}</span><br />
                            <span className="d-block mt-2"><b>User Email:</b> {order?.email}</span>
                            <span className="d-block mt-2"><b>Address:</b> {order?.location}</span>
                            <span className="d-block mt-2"><b>Number:</b> {order?.phoneNumber}</span>
                            <button className="btn btn-dark" onClick={()=>handelupdate(order?._id)} >Pending</button>
                        </aside>



                </article>
                    
                    
                    )
            }
            </div>
        </section>
    );
};

export default ManageOrder;