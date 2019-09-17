import React from 'react';
import {Link} from 'react-router-dom'
import '../Css/AllCohorts.css';

function AllCohorts() {
    return(
      <div className="AllCohorts">

        <div className="cohortContainer">
          <h3 className="cohortName">
            <Link to='/cohort/1'>Pirates</Link>
          </h3>
        </div>

        <div className="cohortContainer">
          <h3 className="cohortName">
            <Link to='/cohort/2'>Cohort 1</Link>
          </h3>
        </div>

        <div className="cohortContainer">
          <h3 className="cohortName">
            <Link to='/cohort/3'>Cohort 2</Link> 
          </h3>
        </div>

      </div>
    )
}

export default AllCohorts;
