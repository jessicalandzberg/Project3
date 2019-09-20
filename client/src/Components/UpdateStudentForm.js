import React from 'react';
import { Link } from 'react-router-dom';
import { showStudent } from '../Services/api-helper.js'
import '../Css/updateStudentForm.css';



class UpdateStudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  //get the 1 student that has teh same id as the url
  getStudent = async () => {
    const student_id = this.props.match.params.id;
    const student = await showStudent(student_id);
    this.props.test(student);
  }

  componentDidMount() {
    this.getStudent()
  }

  render() {
    return(
      <div className="UpdateStudentForm">
        <p className="updateTitle"> Update your profile! </p>
        <form className="UpdateForm" onSubmit={this.props.handleSubmit}>
          <div>
            <label htmlFor="Name">Full Name: </label>
            <input
              className = "inputBox"
              id="name"
              type="text"
              name="name"
              value={this.props.form.name}
              onChange={this.props.handleChange}
            />
          </div>
          <div>
            <label htmlFor="linkedin">LinkedIn: </label>
            <input
              className = "inputBox"
              id="linkedin"
              type="text"
              name="linkedin"
              value={this.props.form.linkedin}
              onChange={this.props.handleChange}
            />
          </div>
          <div>
            <label htmlFor="hobbies">Hobbies: </label>
            <input
              className = "inputBox"
              id="hobbies"
              type="text"
              name="hobbies"
              value={this.props.form.hobbies}
              onChange={this.props.handleChange}
            />
          </div>
          <div>
            <label htmlFor="previousExperience">Previous Experience: </label>
            <input
              className = "inputBox"
              id="previousExperience"
              type="text"
              name="previousExperience"
              value={this.props.form.previousExperience}
              onChange={this.props.handleChange}
            />
          </div>
          <button
            className="submitButton"
            type="submit"
            onClick = {() => {
              window.alert('Your student profile has been updated!');
              window.location = '/allcohorts'
            }}
            >
            Update</button>
        </form>
      </div>
    )
  }
}

export default UpdateStudentForm;
