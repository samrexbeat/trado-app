import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from 'react'
import { CartContext } from '../context/cartfn.jsx'



const Navbarlog = () => {

  const { cartItems } = useContext(CartContext)
 
  return (
    <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

  
    
    <NavLink className="navbar-brand text-success fs-4" to="#"><img src="/assets/TRADO-logo.png" class="logo" alt="..."/></NavLink>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
      <li class="nav-item mx-2">
          <NavLink className="nav-link active no-underline text-success" aria-current="page" to="#">Return Home</NavLink>
        </li>
        <li class="nav-item mx-2">
          <NavLink className="nav-link active no-underline text-success" aria-current="page" to="/">Products</NavLink>
        </li>
        <li class="nav-item mx-2">
          <NavLink className="nav-link no-underline text-success" to="/dashboard">Dashboard</NavLink>
        </li>
        <li class="nav-item mx-2">
          <NavLink className="nav-link no-underline text-success" to="/about">About</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link no-underline text-success" to="/order">Orders</NavLink>
        </li>
       
      </ul>
     <div className="buttons">
      <button className="btn">
        <NavLink to="/login" className="btn btn-success">
          <i className="fa fa-sign-out me-1"></i>
          Logout
        </NavLink>
        <NavLink to="/cart" className="btn btn-success ms-2">
          <i className="fa fa-shopping-cart me-1"></i>
          Cart ({cartItems.length})
        </NavLink>
      </button>

     </div>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbarlog;
