import React from 'react';

//we need to add onSubmit, value for each input, onChange for each input

function UpdateStudentForm() {
    return(
      <div className="UpdateStudentForm">
        <p> This is main - this is update student form </p>
        <form>
          <label htmlFor="Name">Name: </label>
          <input
            id="name"
            type="text"
            name="name"
          />
          <label htmlFor="cohort">Cohort: </label>
          <input
            id="cohort"
            type="text"
            name="cohort"
          />
          <label htmlFor="input3">Input3: </label>
          <input
            id="input3"
            type="text"
            name="input3"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
}

export default UpdateStudentForm;
