import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Row, Toast } from 'react-bootstrap';
import UseFirebase from '../../Firebase/UseFirebase';
import './AddService.css';

const AddService = () => {

    // const [img , setImg] = useState('');
    // const [title , setTitle] = useState('');
    // const [date , setDate] = useState('');
   
    // const [desc , setDesc] = useState('');
    const { user } = UseFirebase();
    const [show, setShow] = useState(false);

    
    
    const image = document.getElementById('customFile')
    const title = document.getElementById('titleInput')
    const dateInput = document.getElementById('dateInput')
    const descInput = document.getElementById('descInput')
    // setImg(image.value);
    // setTitle(titleInput.value);
    // setDate(dateInput.value);    
    // setDesc(descInput.value);  
    const handaleSetEvent = e => {

        const  service = {image:image.value, title:title.value, price:dateInput.value, descrition:descInput.value }
        // console.log(event);
        service.email = user?.email;
        console.log(service);
       
        fetch(`http://localhost:5000/addservice`,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                setShow(true)
            }
        })     
        
        
        e.preventDefault();
    }



    return (
        <section className="event-section">

        {/* <EventNav /> */}
        <article style={{height:"70px"}}>

        <Row>
                <Col className="position-absolute" xs={12} style={{marginLeft:"10%"}}>
                  <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                      <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                      />
                      <strong className="me-auto">{title.value} added on home page</strong>
                      <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                  </Toast>
                </Col>
                {/* <Col xs={6}>
                  
                </Col> */}
              </Row>
        </article>

    <form onSubmit={handaleSetEvent}  className='d-flex mt-5 addevent-box justify-content-center gap-5'>

           <article>
               <h6> Title</h6>
               <input required id="titleInput" type="text" /><br /><br />
               <h6>Description</h6>
               <textarea required id="descInput" cols="45" rows="4"></textarea>
            </article>

            <article>
                  <h6>Price</h6>
                   <input required id="dateInput" type="number" name="" /><br /><br />
                   <h6>Image Link</h6>
                   <input required type="text" id="customFile" />
                   <input  className="btn  mt-4 btn-primary" type="submit" />
                  
            </article>
            </form>
          
        </section>
    );
};

export default AddService;