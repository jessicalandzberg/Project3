import React from 'react';
import '../Css/SingleCohort.css';
import { showStudents, destroyStudent, createStudent } from '../Services/api-helper.js';
import HomeButton from "./HomeButton";
import CreateNewStudentForm from "./CreateNewStudentForm";

class SingleCohort extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      students: [],
      activeStudent: []
      }
    }

  //when click on it, sets state of active student
  handleClick= (d) => {
    const activeStudent = d
    this.setState(prevState => ({
      activeStudent: activeStudent
    }))
  }

  //gets all the students from the cohort and sets to state
  getStudents = async () => {
    const cohort_id = this.props.match.params.id
    const students = await showStudents(cohort_id);
    this.setState({
      students: students })
    };

  //deletes the student and removes it from state of students
  deleteStudent = async (id) => {
    await destroyStudent(id);
    this.setState((prevState) => ({
      students: [...prevState.students.filter((stud) => stud.id !== id)]
    }));
  }

  //adds new student and adds to state of students
  postStudent = async (e) => {
  e.preventDefault();
  const data = this.props.form;
  const cohort_id = this.props.match.params.id
  const newStudent = await createStudent(data, cohort_id);
  this.setState((prevState) => ({
    students: [...prevState.students, newStudent]
  }));
}

  componentDidMount() {
    this.getStudents();
  }


  render () {

    //maps through the state of students and renders a clickable name and a row with a delete button an
    const AllStudents = this.state.students.map((d,i) => {
        return (<div key={i}>
          <div onClick={()=>this.handleClick(d)}> {d.name} </div>
          <button onClick={() => this.deleteStudent(d.id)}>DELETE</button>
        </div>)
      })

    return(

      <div className="SingleCohort">
        <HomeButton />
        <h3 className="header"> XXX Cohort </h3>

        <div className="SCRow">

          <div className="StudentList">
            <h4> Student List </h4>

            {AllStudents}

            <CreateNewStudentForm
                form={this.props.form}
                handleChange={this.props.handleChange}
                handleSubmit={this.postStudent}
              />
              
          </div>

          <div className="singleStudent">
            <h4> Name: {this.state.activeStudent.name} </h4>
            <div> Cohort Id: {this.state.activeStudent.cohortId} </div>
            <a target='_blank' href={this.state.activeStudent.linkedin}> Linkedin profile </a>
          </div>
        </div>
      </div>
    )

  }

}

export default SingleCohort;
