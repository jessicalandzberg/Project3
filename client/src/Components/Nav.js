import React from 'react';
import '../Css/Nav.css'


function Nav(props) {
  console.log('this is nav props', props.loggedInUser);
  const renderUser = () => {
    if (props.loggedInUser.username) {
      return <h3>Hi {props.loggedInUser.username}<button>logout</button></h3>
    }
  }
  return(
    <nav className="NavComponent">
      <a><img
        border="0"
        alt="Home"
        src = "http://static-assets.generalassemb.ly/logos/generalassembly-open-graph.png"
        height="200px"
      />
      </a>

      <div>
        {renderUser()}
      </div>
    </nav>
  )
}

export default Nav;
