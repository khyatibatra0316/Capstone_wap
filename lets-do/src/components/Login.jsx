import React from 'react';
import './Login.css'
const LoginPage = () => {
  return (
    <div className='wrapper'>
      <div className='form-box'>
        <form>
            <h1 style={{color:"black"}}>Login</h1>
            <div className="input-box"> <input type='text' placeholder='Username' required/>
            </div>
            <div className="input-box"> <input type='password' placeholder='Password' required/>
            </div>
            <div className="remember-forget">
                <label style={{color:'black'}}><input type='checkbox'/>Remember Me</label>
                <a href='#'>Forgot Password</a>
            </div>
            <button type="submit">LogIn</button>
            
        </form>
      </div>
    </div>
  );
};

export default LoginPage;