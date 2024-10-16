import './Login-Signup.css';
import React, { useEffect, useState } from "react";

import email_icon from './Assets/email.png'
import password_icon from './Assets/password.png'

function LoginSignup () {

  const [action, setAction] = useState("Sign Up");
  return (

    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
               <img src={email_icon} alt="" /> 
               <input type="text" placeholder="Email"/>
            </div>
            <div className="input">
               <img src={password_icon} alt="" /> 
               <input type="password" placeholder="Password"/>
            </div>
            {action==="Login"?<div></div>:<div className="input">
               <img src={password_icon} alt="" /> 
               <input type="password" placeholder="Confirm Password"/>
            </div>}
        </div>
        <div className="submit-conatiner">
          <div className={action == "Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action == "Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>

    </div>
  );
}

export default LoginSignup;
