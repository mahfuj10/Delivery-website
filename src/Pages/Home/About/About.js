import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (

        <section className="about-section">

       

        <Row style={{  backgroundColor: "#282932"}}>
            <Col lg={6} className="p-0">
                <img className="img-fluid" src="https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="" />
            </Col>

            <Col lg={6} className="">

                <article style={{padding:"70px"}}>

                     <h1 className="pt-5 mb-4"><span className="text-light">Stay at Home </span><br /> <span className="text-warning">We will Take Care</span></h1>

                     <p style={{fontSize:"17px",fontWeight:"500",lineHeight:"1.7em",color:"whitesmoke"}}>There are numerous benefits of the food delivery service — it expands your customer base, increases your revenue, gives your customers a variety of options, and it also offers unparalleled convenience.</p>

                     <aside className="d-flex flex-wrap mt-4 font-icon">
                         <span>
                            <h2> <i className="fas fa-history ms-5"></i></h2>
                            <h6 className="w-75">Fast Delevery in 1 hour</h6>
                         </span>
                         <span>
                            <h2> <i className="fas fa-mobile-alt ms-5"></i></h2>
                            <h6 className="w-75"> Amzzing Mobile App</h6>
                         </span>
                         <span>
                            <h2><i className="fas fa-map-marked-alt " style={{marginLeft:"39px"}}></i></h2>
                            <h6 className="w-75">Wide Coverage Map</h6>
                         </span>
                         <span>
                            <h2><i className="fas fa-user" style={{marginLeft:"39px"}}></i></h2>
                            <h6 className="w-75 ">138 Delevery Men </h6>
                         </span>
                     </aside>

                     <button className="btn mt-5 btn-warning px-5 py-3" style={{borderRadius:"30px"}}>Read More</button>
                </article>
            </Col>
        </Row>

        </section>
    );
};

export default About;