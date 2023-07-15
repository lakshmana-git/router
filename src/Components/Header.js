import React from 'react'
import { Link,Route,Routes } from 'react-router-dom'

const Header = () => {
  return (
    <div>
    <div className='header1'>
      <h1>React Router</h1>
      
      <nav className='section'>

          <Link className='Link' to='/'>Home</Link>
          <Link className='Link'to='/section1'>Section1</Link>
          <Link className='Link'to='/section2'>Section2</Link>
          <Link className='Link'to='/products'>Products</Link>
      </nav>
    
    </div>
    
     </div>
  )
}

export default Header