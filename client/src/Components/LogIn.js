import React from 'react';
import '../Css/LogIn.css';
import { Link } from 'react-router-dom'

function LogIn(props) {
  return(
    <div className="LogIn">

      <div className="loginCreateContainer">

        <div className="overlay">

        <div className ="createContainer">
          <h3>Log in or create new account</h3>
          <form className="createForm">
            <input placeholder="Username" name= "username" type="text" value={props.formData.username} onChange={props.handleChange} className="field"/>
            <input placeholder="Password" name= 'password' type="password" value={props.formData.password} onChange={props.handleChange} className="field"/>
            <button
              type="create"
              className="btn"
              onClick = {props.handleRegister}
              >
                <Link to='/allcohorts'>
                Create </Link>
            </button>

              <button
                type="submit"
                className="btn"
                onClick = {props.handleLogin}
                >
                <Link to='/allcohorts'>
                Login </Link>
            </button>
          </form>
        </div>

      </div>

    </div>

  </div>
  )
}

export default LogIn;
