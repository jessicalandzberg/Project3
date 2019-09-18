import React from 'react';
import { showStudent } from '../Services/api-helper.js'

//we need to add onSubmit, value for each input, onChange for each input

class UpdateStudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editStudent: [],
    }
  }

  getStudent = async () => {
    const student_id = this.props.match.params.id;
    const student = await showStudent(student_id);
    this.props.test(student);
  }

  componentDidMount() {
    this.getStudent()
  }

  render() {
    console.log('this is props form', this.props.form)
    return(
      <div className="UpdateStudentForm">
        <p> This is main - this is update student form </p>
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="Name">Name: </label>
          <input
            id="name"
            type="text"
            name="name"
            value={this.props.form.name}
            onChange={this.props.handleChange}
          />
          <label htmlFor="user_id">user_id: </label>
          <input
            id="user_id"
            type="text"
            name="user_id"
            value={this.props.form.user_id}
            onChange={this.props.handleChange}
          />
          <label htmlFor="linkedin">linkedin: </label>
          <input
            id="linkedin"
            type="text"
            name="linkedin"
            value={this.props.form.linkedin}
            onChange={this.props.handleChange}
          />
          <button type="submit">Update</button>
        </form>
      </div>
    )
  }
}

export default UpdateStudentForm;
