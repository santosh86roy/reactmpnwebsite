import React from 'react'
import "./Products.css"

function Products() {
  return (
    <>

<section className="products">
      <div className="container">
         <div className="row">
            <div className="col-sm-11 offset-sm-1 secHead">
               <h2>Products: </h2>
            </div>
         </div>
         <div className="row">
            <div className="col-sm-11 offset-sm-1">
               <ul>
                  <li className="product">
                     <img src="images/product.svg"/>  
                     <p>Product 01</p>
                  </li>
                  <li className="product">
                     <img src="images/product.svg"/>  
                     <p>Product 02</p>
                  </li>
                  <li className="product">
                     <img src="images/product.svg"/>  
                     <p>Product 03</p>
                  </li>
                  <li className="product">
                     <img src="images/product.svg"/>  
                     <p>Product 04</p>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </section>
    
    
    
    
    </>
  )
}

export default Products