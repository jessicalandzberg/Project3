import React from 'react';

import { Redirect } from 'react-router-dom';

const CreateNewStudentForm = (props) => {
  // if (props.form.id) {
  // return <Redirect to={`/edit/${props.form.id}`} />
  // }
  return (
    <div className = "CreateNewStudentForm">
      <h4>Create a student!</h4>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label htmlFor="name">Full Name:</label>
          <input type="text" name="name" value={props.form.name} onChange={props.handleChange} />
        </div>
        <div>
          <label htmlFor="user_id">User ID:</label>
          <input type="text" name="user_id" value={props.form.user_id} onChange={props.handleChange} />
        </div>
        <div>
          <label htmlFor="linkedin">LinkedIn:</label>
          <input type="text" name="linkedin" value={props.form.linkedin} onChange={props.handleChange} />
        </div>
        <button type="submit">Submit!</button>
      </form>
    </div>
  )
};

export default CreateNewStudentForm;
