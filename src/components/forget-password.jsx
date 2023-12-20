import React from "react";
import './login.css'
import { NavLink } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <>   
     <div className="body">
      <div class="wrapper w-25 mx-auto">
        <div class="">
            <img src="/assets/TRADO-logo.png" class="logo3" alt="logo"/>
        </div>
       
        <form class="p-3 mt-3">
        <p className="mx-4">Enter email to receive reset link</p>
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Email"/>
            </div>
            <NavLink to="/new-password">
            <button class="btn mt-3">Send Link</button>
            </NavLink>
        </form>
        
    </div>
    </div>
    </>

)}

export default ForgetPassword;