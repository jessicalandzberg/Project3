import React from 'react';
import {Link} from 'react-router-dom';
import '../Css/AllCohorts.css';

class AllCohorts extends React.Component {

  render() {
    const AllCohorts = this.props.coh.map((d,i) => {
        return (
          <div className="cohortContainer" key= {i}>
          <h3 className="cohortName">
            <Link to={`/cohort/${d.id}`}> {d.name} </Link>
          </h3>
        </div> )
      })

    return(
      <div className="AllCohorts">
        <div className="titleContainer">
          <h1 className="title">Choose a current SEI cohort</h1>
        </div>

        <div className="cardContainer">
            {AllCohorts}
        </div>
        
      </div>
      )
  }
};

export default AllCohorts;
