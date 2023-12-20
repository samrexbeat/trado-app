import React from "react";
import Navbarlog from "./Navbar-login";
import { useContext,useState } from 'react'
import { CartContext } from '../context/cartfn.jsx'
import "./style.css";

const Checkout = () => {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)


  return (
    <>   
    <Navbarlog/>
    <div class="container col-8 my-5 br-2 rounded">
    <div class="row g-3">
    <div class="col-4 order-md-last">
                <h4 class="d-flex justify-content-between align-item-center">
                    <span class="text-muted">Your Cart</span>
                    <span class="badge bg-secondary rounded-pill">{cartItems.length}</span>
                </h4>

                <ul class="list-group">
                {cartItems.map((item) => (
                    <li class="list-group-item d-flex justify-content-between">
                        <div>
                            <h6>{item.name}</h6>
                          
                            <img src={item.imagePath} alt={item.name} className="rounded-mdh" />
                        </div>
                        <span class="text-muted">₦{item.price}</span><p className="mx-1">x</p><span class="text-muted mx-1">{item.quantity}</span>
                    </li>
                    ))}
                    {/* <li class="list-group-item d-flex justify-content-between">
                        <div>
                            <h6 class="text-success">Promo Code</h6>
                            <span class="text-muted">Sale10</span>
                        </div>
                        <span class="text-muted">Rs 100</span>
                    </li> */}
                    <li class="list-group-item d-flex justify-content-between">
                        <div>
                            <h6>Total (₦)</h6>
                        </div>
                        <span class="text-muted">₦{getCartTotal()}</span>
                    </li>
                </ul>
                </div>
                



            <div class="col-8">
                <h4>Billing Address</h4>
                <form>
                    <div class="row">
                        <div class="col-6 my-1">
                            <label class="form-label" for="firstname">First Name</label>
                            <input type="text" id="firstname" class="form-control"/>
                        </div>
                        <div class="col-6 my-1">
                            <label class="form-label" for="lastname">Last name</label>
                            <input type="text" id="lastname" class="form-control"/>
                        </div>
                        <div class="col-12 my-1">
                            <label class="from-label" for="username">Username</label>
                            <div class="input-group">
                                <span class="input-group-text">@</span>
                                <input type="text" class="form-control" id="usrname"/>
                            </div>
                        </div>
                        <div class="col-12 my-1">
                            <label class="form-label" for="email">Email
                                <span class="text-muted"> (Optional)</span>
                            </label>
                            <input type="text" id="email" class="form-control"/>
                        </div>
                        <div class="col-12 my-1">
                            <label class="form-label" for="address">Address </label>
                            <input type="text" id="address" class="form-control"/>
                        </div>
                        <div class="col-5 my-1">
                            <label class="form-label" for="country">Country </label>
                            <select class="form-select" id="country">
                                <option>Choose</option>
                              
                            </select>
                        </div>
                        <div class="col-4 my-1">
                            <label class="form-label" for="state">State </label>
                            <select class="form-select" id="state">
                                <option>Choose</option>
                               
                            </select>
                        </div>
                        <div class="col-3 my-1">
                            <label class="form-label" for="zip">Zip </label>
                            <input type="text" id="zip" class="form-control"/>
                        </div>
                    </div>
                    <hr/>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input"/>
                        <small class="form-check-label ">Shipping address is the same as my billing address</small>
                    </div>
                    <hr/>
                    <h4 className="my-3">Payment</h4>
                    <div className="d-flex my-1">
                    <div class="form-check">
                        <input type="radio" class="form-check-input"/>
                        <label class="form-check-label">Credit Card</label>
                    </div>
                    <div class="form-check mx-5">
                        <input type="radio" class="form-check-input"/>
                        <label class="form-check-label">Debit Card</label>
                    </div>
                    </div>
                    <div class="row my-1">
                        <div class="col-6 my-1 ">
                            <label class="form-label" for="cardname">Name on Card </label>
                            <input type="text" id="cardname" class="form-control"/>
                            <small class="text-muted">Full name as displayed on card</small>
                        </div>
                        <div class="col-6 my-1">
                            <label class="form-label" for="creditcard">Credit Card Number </label>
                            <input type="text" id="creditcard" class="form-control"/>
                        </div>
                        <div class="col-3 my-1">
                            <label class="form-label" for="expiration">Expiration </label>
                            <input type="text" id="expiration" class="form-control"/>
                        </div>
                        <div class="col-3 my-1">
                            <label class="form-label" for="cvv">CVV </label>
                            <input type="text" id="cvv" class="form-control"/>
                        </div>
                    </div>
                    <hr/>
                    <button type="submit" class="btn btn-success btn-block mb-4">Continue To Checkout</button>
                    </form>
            </div>
            </div>
            </div>
    </>

)}

export default Checkout;