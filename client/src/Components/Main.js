import React from 'react';
import {Route , Switch} from "react-router-dom"
import Home from "./Home"
import SingleCohort from "./SingleCohort"
import UpdateStudentForm from "./UpdateStudentForm"




class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state= {
      test: [],
    }
  }


  render () {
    return(
      <div className="Main">
        <Switch>
          <Route path= "/cohort"
          render = {() => <SingleCohort
                          /> } />
          <Route path= "/edit"
          render = {() => <UpdateStudentForm
                          /> } />
          <Route path= "/" component= {Home} />
        </Switch>
      </div>
    )
  }
}

export default Main;
