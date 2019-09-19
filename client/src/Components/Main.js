import React from 'react';
import {Route , Switch} from "react-router-dom"
import AllCohorts from "./AllCohorts"
import SingleCohort from "./SingleCohort"
import UpdateStudentForm from "./UpdateStudentForm"
import LogIn from "./LogIn"

import { showCohorts, updateStudent} from '../Services/api-helper.js'


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cohorts: [],
      form: {
        name: '',
        linkedin: '',
        user_id: ''
      }
    }
  }

  //Handle change that sets the value on the page to state form
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: value,
      }
    }));
    console.log("this is handle change", this.state.form)
  }

  //Test sets the state form to be equal to the student input
  test = async (student) => {
    this.setState((prevState) => ({
      form: {
        name: student.name,
        linkedin: student.linkedin,
        user_id: student.user_id,
        id: student.id,
      }
  }))
  }

  //Sets form to be blank
  setFormBlank = async (student) => {
    this.setState((prevState) => ({
      form: {
        name: "",
        linkedin: "",
        user_id: "",
        id: "",
      }
  }))
  }

  //Get cohorts that gets all the cohorts from the data base and sets state cohorts
  getCohorts = async () => {
    const cohorts = await showCohorts();
    this.setState({ cohorts })
    await console.log(this.state.cohorts);
  };

  //updates student in database from the state form
  updateStudent = async (e) => {
    e.preventDefault();
    const { id, ...data } = this.state.form;
    const student = await updateStudent(data, id);
    await this.setState((prevState) => ({
      form: {
        name: "",
        linkedin: "",
        user_id: "",
        id: "",
      }
    }))
  }

  componentDidMount() {
    this.getCohorts();
  }

  render () {
    return(
      <div className="Main">
        <Switch>

          <Route path= "/allcohorts"
          render = {(props) => <AllCohorts
                          coh={this.state.cohorts}
                          /> } />

          <Route path= "/cohort/:id"
          render = {(props) => <SingleCohort {...props}
                                form={this.state.form}
                                handleChange={this.handleChange}
                                setFormBlank = {this.setFormBlank}
                          /> } />

          <Route path= "/edit/:id"
          render = {(props) => <UpdateStudentForm {...props}
                                handleChange= {this.handleChange}
                                test = {this.test}
                                form = {this.state.form}
                                handleSubmit={this.updateStudent}
                          /> } />

          <Route path= "/" component= {LogIn} />
        </Switch>
      </div>
    )
  }
}

export default Main;
