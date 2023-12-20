import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./login";
import Register from "./register";
import Dashboard from "./dashboard";
import Product from "./product";
import Cart from "./cart";
import Order from "./Order";
import Adminpage from "./admin";
import Home from "./Home";
import AddItem from "./addProduct";
import EditProduct from "./editproduct";
import CartItem from "./cart-item";
import ForgetPassword from "./forget-password";
import Newpassword from "./new-password";
import Checkout from "./checkout";

export default function Router(){
    return(
        <Router>
            
            <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/reset-password" element={<ForgetPassword/>} />
                    <Route path="/new-password" element={<Newpassword/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/product/:id" element={<Product/>} />
                    <Route path="/cart" element={<CartItem/>} />
                    <Route path="/checkout" element={<Checkout/>} />
                    <Route path="/order" element={<Order/>} />
                    <Route path="/adminpage" element={<Adminpage/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/addproducts" element={<AddItem/>} />
                    <Route path="/edit/:id" element={<EditProduct/>} />
                   
            </Routes>
        </Router>
    
        
    )
}; 