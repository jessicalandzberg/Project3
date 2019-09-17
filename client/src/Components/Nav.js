import React from 'react';
import '../Css/Nav.css'

function Nav() {
  return(
    <nav className="NavComponent">
      <a href="https://www.w3schools.com">
        <img 
          border="0" 
          alt="W3Schools" 
          src = "http://static-assets.generalassemb.ly/logos/generalassembly-open-graph.png"
          width="33%" 
          height="33%"/>
      </a>
    </nav>
  )
}

export default Nav;
