import React from 'react';
import '../Css/LogIn.css';

function LogIn() {
  return(
    <div className="LogIn">

      <div className="loginCreateContainer">

        <div className="overlay">
          <div className ="logInContainer">
            <h3>Login</h3>
            <form className="logInForm">
              <input type="text" placeholder="Username" className="field"/>
            <input type="text" placeholder="Password" className="field"/>
            <input type="submit" value="login" className="btn"/>
            </form>
          </div>

        <div className ="createContainer">
          <h3>Create User</h3>
          <form className="createForm">
            <input type="text" placeholder="Username" className="field"/>
            <input type="text" placeholder="Password" className="field"/>
            <input type="submit" value="create" className="btn"/>
          </form>
        </div>

      </div>

    </div>

  </div>
  )
}

export default LogIn;
