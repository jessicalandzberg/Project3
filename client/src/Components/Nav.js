import React from 'react';
import '../Css/Nav.css'


function Nav() {
  return(
    <nav className="NavComponent">
      <a>
        <img
          border="0"
          alt="Home"
          src = "http://static-assets.generalassemb.ly/logos/generalassembly-open-graph.png"
          height="200px"
        />
      </a>
    </nav>
  )
}

export default Nav;
