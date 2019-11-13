import React, { useState } from "react";

export const Form = props => {
  return (
    <div className="form-class">
      <form className="form-styling" onSubmit={props.handleSubmit}>
        <label htmlFor="nameInput">Name</label>
        <input
          placeholder="type your name"
          id="nameInput"
          name="Name"
          type="text"
          onChange={props.handleChange}
          value={props.newmembers.Name}
        />

        <label htmlFor="emailInput">Email</label>
        <input
          id="emailInput"
          name="Email"
          type="email"
          onChange={props.handleChange}
          value={props.newmembers.Email}
        />

        <label htmlFor="roleInput">Role</label>
        <select
          id="roleInput"
          name="Role"
          onChange={props.handleChange}
          value={props.newmembers.Role}
        >
          <option>Back End Engineer</option>
          <option>Front End Dev</option>
          <option>Full Stack Dev</option>
          <option>Machine learning Engineer</option>
        </select>

        <label htmlFor="experienceInput">Experience</label>
        <input
          id="experienceInput"
          name="Experience"
          type="text"
          onChange={props.handleChange}
          value={props.newmembers.Experience}
        />

        <label htmlFor="languagesInput">Languages</label>
        <input
          id="languagesInput"
          name="languages"
          type="text"
          onChange={props.handleChange}
          value={props.newmembers.languages}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};
