import React from 'react';
import '../Css/SingleCohort.css';
import { showStudents, destroyStudent } from '../Services/api-helper.js'


class SingleCohort extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      students: [],
      activeStudent: []
      }
    }

  getStudents = async () => {
    const cohort_id = this.props.match.params.id
    const students = await showStudents(cohort_id);
    this.setState({ students })
    };

  deleteStudent = async (id) => {
    await destroyStudent(id);
    this.setState((prevState) => ({
      students: [...prevState.students.filter((stud) => stud.id !== id)]
    }));
  }

  componentDidMount() {
    this.getStudents();
  }

  handleClick= (d) => {
    const activeStudent = d
    this.setState(prevState => ({
      activeStudent: activeStudent
    }))
  }


  render () {
    console.log(this.props)
    const AllStudents = this.state.students.map((d,i) => {
        return (<div key={i}>
          <div onClick={()=>this.handleClick(d)}> {d.name} </div>
          <button onClick={() => this.deleteStudent(d.id)}>DELETE</button>
        </div>)
      })
    return(
      <div className="SingleCohort">
        <h3 className="header"> XXX Cohort </h3>

        <div className="SCRow">

          <div className="StudentList">
            <h4> Student List </h4>
            {AllStudents}
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
