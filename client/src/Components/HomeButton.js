import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/HomeButton.css'

function HomeButton() {
    return(
      <div className="HomeButton">
        <Link to= "/AllCohorts">
          All cohorts
        </Link>
      </div>
    )
}

export default HomeButton;
