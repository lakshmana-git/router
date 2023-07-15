import React from 'react'
import { Link } from 'react-router-dom';

const Products = () => {

   const x = ['1','2','3',"apple"];
   const Delivery = x.map((value)=>(
    <div className='Product-main'>
    <Link to={'/products/:id'}>


    <div>
        <div className='products'>

        </div>
        <button>View More {value}</button>
    </div>
    </Link>

  </div>
   ));

  return (
    <div>
      {Delivery}
    
      kdvdf vkjf vjfd vjdf v 
    </div>
    
      
      
    

    
  )
}

export default Products