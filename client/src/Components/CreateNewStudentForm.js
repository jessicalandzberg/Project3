import React from 'react';

import { Redirect } from 'react-router-dom';

const CreateNewStudentForm = (props) => {
  // if (props.form.id) {
  // return <Redirect to={`/edit/${props.form.id}`} />
  // }
  return (
    <div className = "CreateNewStudentForm">
      <h4>Create a student!</h4>
      <form className= 'NewStudentForm' onSubmit={props.handleSubmit}>
          <label htmlFor="name">Full Name:</label>
            <input
            className="CreateNewStudentInput"
            type="text"
            name="name"
            value={props.form.name}
            onChange={props.handleChange} />
          <label htmlFor="linkedin">LinkedIn:</label>
            <input
            className="CreateNewStudentInput"
            type="text"
            name="linkedin"
            value={props.form.linkedin}
            onChange={props.handleChange} />
          <label htmlFor="hobbies">Hobbies:</label>
            <input
              className="Hobbies"
              type="text"
              name="hobbies"
              value={props.form.hobbies}
              onChange={props.handleChange} />
          <label htmlFor="previousExperience">Previous Experience:</label>
                <input
                className="previousExperience"
                type="text"
                name="previousExperience"
                value={props.form.previousExperience}
                onChange={props.handleChange} />
          <button className="NewStudentFormButton" type="submit">Submit</button>
      </form>
    </div>
  )
};

export default CreateNewStudentForm;
