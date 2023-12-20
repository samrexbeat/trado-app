import React, {useRef, useState, useEffect} from "react";

export default function Register(){
    return(
        <div>
           <div className="bodyreg">
           <div>  <img src="/assets/pngaaa.com-608157.png" class="bg-image" alt=""/></div> 
      <div class="wrapper w-50 mx-auto">
        <div class="">
            <img src="/assets/TRADO-logo.png" class="logo2" alt="logo"/>
        </div>
       
        <form class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" autoComplete="off" placeholder="Email"/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Fullname"/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"/>
            </div>

            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Confirm Password"/>
            </div>
            <button class="btn mt-3">Register</button>
        </form>
        <div class="text-center fs-6 d-flex">
            <p className="xsm-in-box">Already have an account please </p><a href="/login">Login</a>
        </div>
    </div>
    </div>
        </div>
    )
};