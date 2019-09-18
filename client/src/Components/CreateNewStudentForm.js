import React from 'react';

import { Redirect } from 'react-router-dom';

const CreateNewStudentForm = (props) => {
  // if (props.form.id) {
  // return <Redirect to={`/edit/${props.form.id}`} />
  // }
  return (
    <>
      <h2>Create a student!</h2>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={props.form.name} onChange={props.handleChange} />
        <label htmlFor="user_id">User id:</label>
        <input type="text" name="user_id" value={props.form.user_id} onChange={props.handleChange} />
        <label htmlFor="linkedin">Linkedin:</label>
        <input type="text" name="linkedin" value={props.form.linkedin} onChange={props.handleChange} />
        <button type="submit">Submit!</button>
      </form>
    </>
  )
};

export default CreateNewStudentForm;
