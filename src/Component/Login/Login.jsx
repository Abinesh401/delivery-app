import { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

const Login = ({setShowlogin}) => {
    const [currstate, setCurrstate] = useState("login")
  return (
        <>
        <div className="login-popup">
        
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currstate}</h2>
                    <img onClick={()=>setShowlogin(false)} src={assets.Close} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currstate==="login"?<></>: <input type="text" placeholder='yourname' required />}
                   
                    <input type="email" placeholder='your email' required />
                    <input type="password" placeholder='password' required />
                </div>
                <button>{currstate==="sign up"?"create accout":
                "login"}</button>
            
                <div className="login-popup-condition">
               
                    <input type="checkbox" required />
                    <p>By containing i agree to the terms of use &privacy policy</p>

                </div>
                {currstate==="login"
                    ? <p>create a new account? <span onClick={()=>setCurrstate("sign up")}>click here</span> </p>
                    :   <p>alread have an account ? <span onClick={()=>setCurrstate("login up")}>login here</span></p>
                }
               
             

            </form>
        </div>
        </>
  )
}

export default Login