import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <Row xs={12}>
                <Col xs={6} lg={4}>
                    <aside className="footer-item" style={{paddingLeft:"220px"}}>
                    <h5>Need Help </h5>
                    <p> <b>Call Us:</b> <a href>+9823472384</a></p>
                    <p><b>Email Us:</b> <a href>liucky@gamil.com</a></p>
                    <p><b>Join our twiter</b> <a href>@loc</a></p>
                    <p><b>Joinour instagram</b> <a href>liuckydelivery</a></p>
                    </aside>
                    {/* */}
                </Col>
                <Col  xs={6} lg={2}>
                  <aside >
                    <h5>Get to Know Us</h5>
                    <p>About Us</p>
                    <p>Blog</p>
                    <p>Socialize</p>
                    <p>Quickmunch</p>
                    <p>Perks</p>
                   </aside>
                  
                </Col>
                <Col xs={6} lg={2}>
                   <aside className="ms-3 ms-md-0">
                    <h5>Let Us Help You</h5>
                    <p>Account Details</p>
                    <p>Order History</p>
                    <p>Find restaurant</p>
                    <p>Login</p>
                    <p>Track order</p>
                    </aside>
                </Col>
                <Col xs={6} lg={2}>
                    <aside >
                      <h5>Doing Business</h5>
                      <p>Suggest an Idea</p>
                      <p>Be a Partner restaurant</p>
                      <p>Create an Account</p>
                      <p>Help</p>
                    </aside>
                </Col>
                <Col className="ms-3 ms-md-0 my-3 my-0 " xs={6} lg={2}>
                    <h5>DownLoad App</h5>
                    <aside style={{height:"50px",width:"160px"}} className="bg-dark d-flex align-items-center text-light p-3 mb-4 mt-4">
                        <h6><i className="fab fa-google-play"></i> Google Play</h6>
                    </aside>
                    <aside style={{height:"50px",width:"160px"}} className="bg-dark d-flex align-items-center text-light p-3">
                        <h6><i className="fab fs-4 fa-app-store-ios"></i> Google Play</h6>
                    </aside>
                </Col>
            </Row>

            <h3 className="text-center mt-4 text-light mb-2">LUCKEY DELIVERIES</h3>

                  <h6 className="text-center text-light">Follow Us !</h6>
                   <aside className="d-flex gap-4 pb-4 pb-md-0 justify-content-center">
                       <i className="fab fa-facebook-square fs-3"></i>
                       <i className="fab fa-twitter-square fs-3"></i>
                       <i className="fab fa-invision fs-3"></i>
            </aside>
        </footer>
            
        
    );
};

export default Footer;