import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Resturants.css';

const Resturants = () => {
    
    
    
    return (
        <section className="retirants-section" style={{marginTop:"200px"}}>
<h6 className="text-center mb-1">Our Recommendations</h6>
<h1 className="text-center mb-5">Cafes & Restaurants</h1>

            <Container style={{marginRight:"24em"}}>
    
            <Row xs={12} lg={12}>
                <Col xs={12} lg={6} >
                       <article className="resturant-card" >
                           <img  width="740" height="860" src="https://i.ibb.co/3vfxCjD/image1.jpg" alt="" />
                           <aside style={{width:"740px",borderRadius:"0 0 40px 40px",backgroundColor: "#ffca2c"}} className=" px-5 py-2">
                               <h1>Burger House</h1>
                               <p className="fs-5">Monday - Saturday</p>
                               <span className="d-flex justify-content-between align-items-center">
                                   <p className="fs-5">07:00AM - 11.00Pm</p>
                                   <h6><i className="fas fa-chevron-circle-right fs-5"></i></h6>
                               </span>
                           </aside>
                       </article>
                </Col>
                <Col lg={6}>
                    <Row lg={12} className="resturant-card" style={{marginLeft:"120px"}}>
                        <Col lg={6}>
                           <article className="resturant-card">
                             <img width="350" height="350" src=" https://i.ibb.co/P5ffSYf/image5.jpg" alt="" />
                             <aside style={{width:"350px",height:"150px",borderRadius:"0 0 20px 20px"}} className="resturant-details p-3">
                               <h3>Kafin Kabab</h3>
                               <p>Monday - Saturday</p>
                               <span className="d-flex justify-content-between align-items-center">
                                   <p>07:00AM - 11.00Pm</p>
                                   <h6><i class="fas fa-chevron-circle-right"></i></h6>
                               </span>
                           </aside>
                          </article>
                        </Col >
                        <Col lg={6}>
                           <article className="resturant-card" style={{marginLeft:"120px"}}>
                             <img width="350" height="350" src="https://i.ibb.co/sRWX3y6/image4.jpg" alt="" />
                             <aside style={{width:"350px",height:"150px",borderRadius:"0 0 20px 20px"}} className=" resturant-details p-3">
                               <h3>Zermatt Spa</h3>
                               <p>Monday - Saturday</p>
                               <span className="d-flex justify-content-between align-items-center">
                                   <p>07:00AM - 11.00Pm</p>
                                   <h6><i class="fas fa-chevron-circle-right"></i></h6>
                               </span>
                           </aside>
                          </article>
                        </Col>
                        <Col lg={6} >
                           <article className="resturant-card" style={{marginTop:"30px"}}>
                             <img width="350" height="350" src="https://i.ibb.co/9HjMm2Z/image3.jpg" alt="" />
                             <aside style={{width:"350px",height:"150px",borderRadius:"0 0 20px 20px"}} className="resturant-details p-3">
                               <h3>KFC Caffe</h3>
                               <p>Monday - Saturday</p>
                               <span className="d-flex justify-content-between align-items-center">
                                   <p>07:00AM - 11.00Pm</p>
                                   <h6><i class="fas fa-chevron-circle-right"></i></h6>
                               </span>
                           </aside>
                          </article>
                        </Col>
                        <Col lg={6} >
                           <article className="resturant-card" style={{marginLeft:"120px",marginTop:"30px"}}>
                             <img width="350" height="350" src="https://i.ibb.co/n0kZFvP/image2.jpg" alt="" />
                             <aside  className="resturant-details p-3">
                               <h3>Western Resturant</h3>
                               <p>Monday - Saturday</p>
                               <span className="d-flex justify-content-between align-items-center">
                                   <p>07:00AM - 11.00Pm</p>
                                   <h6><i class="fas fa-chevron-circle-right"></i></h6>
                               </span>
                           </aside>
                          </article>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Container>
            </section>
    );
};

export default Resturants;