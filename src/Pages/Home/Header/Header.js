import React, { useEffect } from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Nav from '../../Navbar/Nav';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

    useEffect(()=>{
        AOS.init({
            offset:100,
            duration:500,
            easing: 'ease',
        });
    },[]);

    return (

        <header >
             <Nav />
            <Container>
               <Row className="d-flex header-banner align-items-center pt-5">
                   <Col  lg={6} >
                       <h1 data-aos="fade-right" className="text-light" style={{fontSize:"70px"}}>Express <br /> Home Delivery</h1>
                       <p data-aos="fade-right" className="text-light mt-3 mb-4 fs-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum quibusdam alias ipsam, magnam libero praesentium. Aperiam, odio cupiditate harum aliquam.</p>
                       <button data-aos="fade-right" className="btn btn-warning px-4 py-2">Read More</button>
                   </Col>
                   <Col lg={6}>
                         <img data-aos="fade-left" style={{marginTop:"100px"}}  src="https://www.luckydeliveries.com/assets_front/img/slider-courier-mask.png" alt="" />
                   </Col>
               </Row>
            </Container>
            
           
        </header>
    );
};

export default Header;