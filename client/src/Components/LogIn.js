import React from 'react';
import '../Css/LogIn.css';


function LogIn() {
  return(
    <div className="LogIn">

      <div className="loginCreateContainer">
        <div className ="logInContainer">
          <h3>Login</h3>
          <form className="logInForm">
            <input type="text" placeholder="username" class="field"/>
            <input type="password" placeholder="password" class="field"/>
            <input type="submit" value="login" class="btn"/>       
          </form>
        </div>

        <div className ="createContainer">
          <h3>Create User</h3>
          <form className="createForm">
            <input type="text" placeholder="username" class="field"/>
            <input type="password" placeholder="password" class="field"/>
            <input type="submit" value="login" class="btn"/>    
            <div className="forgotPw">
            </div>      
          </form>
        </div>
      </div>  
  
  </div>
  )
}

export default LogIn;
