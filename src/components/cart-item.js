import React from "react";
import { useContext,useState } from 'react'
import { CartContext } from '../context/cartfn.jsx'
import "./style.css";
import axios from "axios";
import { baseUrl } from "./constant";
import { NavLink } from "react-router-dom";
import Navbarlog from "./Navbar-login.jsx";


const CartItem = ()=>{
 
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
 

  // const addItemToOrder = async(item) =>{
  //   const InputValue = {userId:"0", orderNo:item.quantity, totalOrder:item.getCartTotal}
  //   console.log(InputValue)
  //   let res = await fetch(`${baseUrl}api/Order`, {
  //       method: "POST",
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify(InputValue)
  //   });
  //   let resjson = await res.json();
  //   console.log(resjson)

  // }


    return(
        <>
        <Navbarlog/>
        <div className="cart-top">
        <h1 className="display-6 fw-bolder text-center text-success">Cart</h1>
        <hr />
        <div>
    {cartItems.map((item) => (
       <div className="flex-gap-4">
      <div className="items-center" key={item.id}>
        <div className="flex-gap">
          <img src={item.imagePath} alt={item.name} className="rounded-mdh" />
          <div className="d-flex flex-column name-case">
            <h1 className="fs-2 fw-bold">{item.name}</h1>
            <p className=" fs-4 text-black-50">₦{item.price}</p>
          </div>
        </div>
        <div className="btn-case ">
          <button
            className="cart-btn bg-success"
            onClick={() => {
              addToCart(item)
            }}
          >
            +
          </button>
          <p className="qyt-box fs-4 mt-3">{item.quantity}</p>
          <button
            className="cart-btn bg-danger px-2"
            onClick={() => {
              removeFromCart(item)
            }}
          >
            -
          </button>
        </div>
      </div>
      </div>
    ))}
  </div>
  
  <hr />
  {
    cartItems.length > 0 ? (
      <div className=" items-center total-case">
    <h1 className="text-xl font-bold text-black-50">Total: ₦{getCartTotal()}</h1>

    <NavLink to="/checkout" >
              <button className="btn btn-warning">Checkout</button>
            </NavLink>
    <button
      className="btn btn-outline-success clr-btn"
      onClick={() => {
        clearCart()
      }}
    >
      Clear cart
    </button>
  </div>
    ) : (
      <h1 className="text-lg font-bold text-success">Your cart is empty</h1>
    )
  }
</div>
        
                    
      
        </>
    )
}


export default CartItem;