import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
  <div>
     <ul className="header">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/demo">Demo</Link></li>
      <li><Link to="/about">About</Link></li> 
    </ul>
  </div>  
  )
}

export default Nav;