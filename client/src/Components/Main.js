import React from 'react';
import {Route , Switch} from "react-router-dom"
import AllCohorts from "./AllCohorts"
import SingleCohort from "./SingleCohort"
import UpdateStudentForm from "./UpdateStudentForm"
import LogIn from "./LogIn"
import {
  showStudents, createStudent, updateStudent, destroyStudent
} from './services/api-helper.js';

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

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: value,
      }
    }));
  }

  showUpdateForm = (id) => {
    const student = this.state.students.find((stud) => stud.id === id);
    const { name, linkedin, user_id } = student;
    this.setState({
      form: {
        id,
        name,
        linkedin
      }
    });

  }

  getStudents = async () => {
    const students = await showStudents();
    this.setState({ students })
    await console.log(this.state.students);
  };

  postStudent = async (e) => {
    e.preventDefault();
    const data = this.state.form;
    const cohort_id = this.params.
    const newStudent = await createStudent(data, cohort_id);
    this.setState((prevState) => ({
      students: [...prevState.students, newStudent]
    }));
    await console.log(this.state.students);
  }

  updateStudent = async (e) => {
    e.preventDefault();
    const { id, ...data } = this.state.form;
    const student = await updateStudent(data, id);
    this.setState((prevState) => ({
      students: [...prevState.students.filter((stud) => stud.id !== id), student],
      form: {
        name: '',
        linkedin: ''
      }
    }));
    await console.log(this.state.students);
  }

  deleteComposer = async (id) => {
    await destroyComposer(id);
    this.setState((prevState) => ({
      composers: [...prevState.composers.filter((composer) => composer.id !== id)]
    }));
  }

  componentDidMount() {
    this.getComposers();
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
