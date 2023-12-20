import React from "react";
import './login.css'

const Newpassword = () => {
  return (
    <>   
     <div className="body">
      <div class="wrapper w-25 mx-auto">
        <div class="">
            <img src="/assets/TRADO-logo.png" class="logo3" alt="logo"/>
        </div>
       
        <form class="p-3 mt-3">
        <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password"/>
            </div>

            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Confirm Password"/>
            </div>
            <button class="btn mt-3">Proceed</button>
        </form>
        
    </div>
    </div>
    </>

)}

export default Newpassword;