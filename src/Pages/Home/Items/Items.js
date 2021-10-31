import React from 'react';
import '../Products/Products.css';

const Items = () => {
    return (
        <section className="d-flex flex-wrap 
        gap-4 justify-content-center items-container" style={{top:"96%",left:'17%'}}>

            <aside className="d-flex  align-items-center gap-4  p-3 " style={{width:"16em",borderRadius:"5px"}}>
               <span className="bg-warning p-3 rounded-circle">
                   <i className="fas fa-hamburger fs-1"></i>
               </span>
                    <h5>Fastfood</h5>
            </aside>

            <aside className="d-flex align-items-center gap-4 p-3 " style={{width:"16em",borderRadius:"5px"}}>
               <span className="bg-warning p-3 rounded-circle">
                      <i className="fas fa-pizza-slice fs-1"></i>
               </span>
                    <h5>Pizzaa</h5>
            </aside>

            <aside className="d-flex align-items-center gap-4 p-3" style={{width:"16em",borderRadius:"5px"}}>
               <span className="bg-warning p-3 rounded-circle">
                   <i className="fas fa-hamburger fs-1"></i>
               </span>
                    <h5>Fastfood</h5>
            </aside>
            
            <aside className="d-flex align-items-center gap-4 p-3" style={{width:"16em",borderRadius:"5px"}}>
               <span className="bg-warning p-3 rounded-circle">
                   <i className="fas fa-hamburger fs-1"></i>
               </span>
                    <h5>Fastfood</h5>
            </aside>
        
        </section>
    );
};

export default Items;