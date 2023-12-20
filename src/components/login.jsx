import React,{useEffect, useRef, useState} from "react";
import './login.css'

const Login = () => {
    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false); 
    

    useEffect(()=> {
        emailRef.current.focus();

    }, [])

    useEffect(()=> {
        setErrMsg('');
        
    }, [email, password])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setEmail('');
        setPassword('');
        setSuccess(true);
    } 

  return (
    <>   
     {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="/login">Go to Home</a>
                    </p>
                </section>
                ) : (
     <div className="body">
       <div>  <img src="/assets/pngaaa.com-608157.png" class="bg-image" alt=""/></div> 
      <div class="wrapper w-25 mx-auto">
        <div class="">
            <img src="/assets/TRADO-logo.png" class="logo3" alt="logo"/>
        </div>
       <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <form onSubmit={handleSubmit} class="p-3 mt-3">
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <label htmlFor="email"></label>
                <input type="text" id="email" ref={emailRef} autoComplete="off" onChange={(e)=> setEmail(e.target.value)} value={email} required placeholder="Email"/>
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <label htmlFor="password"></label>
                <input type="password" id="password"  onChange={(e)=> setPassword(e.target.value)} value={password} required placeholder="Password"/>
            </div>
            <button class="btn mt-3">Login</button>
        </form>
        <div class="text-center fs-6">
            <a href="/reset-password">Forget password?</a> or <a href="/register">Sign up</a>
        </div>
    </div>
    </div>
                )}
    </>

)}

export default Login;