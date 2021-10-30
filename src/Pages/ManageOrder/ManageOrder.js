import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Nav from '../Navbar/Nav';

const ManageOrder = () => {

    const [ orders, setOrders ] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/carts`)
          .then(res => res.json())
          .then(data => setOrders(data))
    },[])

    return (

    //     <thead>
    //     <tr>
    //       <th>#</th>
    //       <th>First Name</th>
    //       <th>Last Name</th>
    //       <th>Username</th>
    //     </tr>
    //   </thead>
     
        <section style={{height:"100vh"}}>
          <Nav/>
            <h3 className="text-center mb-5 mt-5 pt-3">Manage All Orders </h3>
            <div className="d-flex flex-wrap justify-content-center gap-5">
            {
                orders.map( order => <article className="d-flex gap-3 shadow align-items-center" style={{width:"32rem"}}>

                        <aside>
                            <img width="160" src={order?.image} alt="" />
                        <i className="fas fs-3 fa-trash-alt position-absolute" style={{marginLeft:"18rem",marginTop:"20px",zIndex:'999'}}></i>
                        </aside>
                        <aside>
                            <h5>{order?.title}</h5>
                            <span><b>Price:</b> ${order?.price}</span><br />
                            <span className="d-block mt-2"><b>User Email:</b> {order?.email}</span>
                        </aside>



                </article>
                    
                    
                    )
            }
            </div>
        </section>
    );
};

export default ManageOrder;