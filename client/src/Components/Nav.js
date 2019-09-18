import React from 'react';
import '../Css/Nav.css'


function Nav() {
  return(
    <nav className="NavComponent">
      <a href="/allcohorts">
        <img 
          border="0" 
          alt="Home" 
          src = "http://static-assets.generalassemb.ly/logos/generalassembly-open-graph.png"
          width="25%" 
          height="33%"/>
      </a>
    </nav>
  )
}

export default Nav;
