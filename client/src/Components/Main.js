import React from 'react';
import {Route , Switch} from "react-router-dom"
import AllCohorts from "./AllCohorts"
import SingleCohort from "./SingleCohort"
import UpdateStudentForm from "./UpdateStudentForm"
import LogIn from "./LogIn"

import { showCohorts, updateStudent, registerUser, loginUser } from '../Services/api-helper.js'


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      cohorts: [],
      form: {
        name: '',
        linkedin: '',
        user_id: '',
        previousExperience: "",
        hobbies: "",
      },
      authFormData: {
        username: "",
        password: ""
      },
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
        id: student.id,
        hobbies: student.hobbies,
        previousExperience: student.previousExperience
      }
  }))
  }

  //Sets form to be blank
  setFormBlank = async (student) => {
    this.setState((prevState) => ({
      form: {
        name: "",
        linkedin: "",
        id: "",
        hobbies: "",
        previousExperience: ""
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
        id: "",
        hobbies: "",
        previousExperience: ""
      }
    }))
  }

  // Function to register a user
  // After register, we just call the login function with the same data
  handleRegister = async (e) => {
    e.preventDefault();
    await registerUser(this.state.authFormData);
    this.handleLogin();
    await console.log('this is handleRegister')

  }


  // Function to login a user
  // we set the user data in state and the JWT in local storage
  handleLogin = async (e) => {
    const userData = await loginUser(this.state.authFormData);
    this.setState({
      currentUser: userData.user
    })
    localStorage.setItem("jwt", userData.token)
    await console.log('this is handleLogin', this.state.currentUser)
    this.props.setLoggedInUser(this.state.currentUser);
  }

  handleLogout = () => {
  localStorage.removeItem("jwt");
  this.setState({
    currentUser: null
  })
  }


  // Handle change function for the auth forms
  authHandleChange = async (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
    await console.log ("this is handlechange", this.state.authFormData)
  }

  componentDidMount() {
    this.getCohorts();
  };



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
                                currentUser = {this.state.currentUser}
                          /> } />

          <Route path= "/edit/:id"
          render = {(props) => <UpdateStudentForm {...props}
                                handleChange= {this.handleChange}
                                test = {this.test}
                                form = {this.state.form}
                                handleSubmit={this.updateStudent}
                          /> } />

          <Route path= "/"
          render = {(props) => <LogIn {...props}
                                handleLogin={this.handleLogin}
                                handleRegister={this.handleRegister}
                                handleChange={this.authHandleChange}
                                formData={this.state.authFormData}
                          /> } />
        </Switch>
      </div>
    )
  }
}

export default Main;
