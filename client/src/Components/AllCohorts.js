import React from 'react';
import {Link} from 'react-router-dom'
import '../Css/AllCohorts.css';

function AllCohorts() {
    return(
      <div className="AllCohorts">

      <h1 className="cohortTitle">Choose A Cohort</h1>
        <div AllCohortContainer>
          <div className="cohortContainer">
            <h3 className="cohortName"> 
              <Link to='/cohort'>Pirates</Link> 
            </h3>
          </div>

          <div className="cohortContainer">
            <h3 className="cohortName"> 
              <Link to='/cohort'>Cohort 1</Link> 
            </h3>
          </div>
          
          <div className="cohortContainer">
            <h3 className="cohortName"> 
              <Link to='/cohort'>Cohort 2</Link> 
            </h3>
          </div>
      </div>
    </div>
    )
}

export default AllCohorts;
