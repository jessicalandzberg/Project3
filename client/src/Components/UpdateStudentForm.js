import React from 'react';
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
        <p> Update the student profile! </p>
        <form className="UpdateForm" onSubmit={this.props.handleSubmit}>
          <div>
            <label htmlFor="Name">Full Name: </label>
            <input
              id="name"
              type="text"
              name="name"
              value={this.props.form.name}
              onChange={this.props.handleChange}
            />
          </div>
          <div>
            <label htmlFor="user_id">User ID: </label>
            <input
              id="user_id"
              type="text"
              name="user_id"
              value={this.props.form.user_id}
              onChange={this.props.handleChange}
            />
          </div>
          <div>
            <label htmlFor="linkedin">LinkedIn: </label>
            <input
              id="linkedin"
              type="text"
              name="linkedin"
              value={this.props.form.linkedin}
              onChange={this.props.handleChange}
            />
          </div>
          <button
            type="submit"
            onClick = {function(){
              window.alert('your student profile was updated');
              window.location = '/allcohorts'
            }}
            >
            Update </button>
        </form>
      </div>
    )
  }
}

export default UpdateStudentForm;
