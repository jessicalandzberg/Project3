import React from 'react';
import '../Css/SingleCohort.css';
import HomeButton from "./HomeButton"

function SingleCohort(props) {
  console.log(props);
    return(

      <div className="SingleCohort">
        <HomeButton />
        <h3 className="header"> XXX Cohort </h3>

        <div className="SCRow">

          <div className="StudentList">
            <h4> Student List </h4>
            <div> Jess </div>
            <div> JC </div>
            <div> Tommy </div>
            <div> Josh </div>
          </div>

          <div className="singleStudent">
            <h4> Name </h4>
            <div> Cohort: </div>
            <div> Linkedin: </div>
            <div> Fun fact: </div>
          </div>
        </div>
      </div>
    )
}

export default SingleCohort;
