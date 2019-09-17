import React from 'react';
import {Route , Switch} from "react-router-dom"
import AllCohorts from "./AllCohorts"
import SingleCohort from "./SingleCohort"
import UpdateStudentForm from "./UpdateStudentForm"
import LogIn from "./LogIn"


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      students: [],
      form: {
        name: '',
        linkedin: '',
        user_id: ''
      }
    }
  }



  render () {
    return(
      <div className="Main">
        <Switch>
          <Route path= "/allcohorts"
          render = {() => <AllCohorts
                          /> } />
          <Route path= "/cohort"
          render = {() => <SingleCohort
                          /> } />
          <Route path= "/edit"
          render = {() => <UpdateStudentForm
                          /> } />
          <Route path= "/" component= {LogIn} />
        </Switch>
      </div>
    )
  }
}

export default Main;
