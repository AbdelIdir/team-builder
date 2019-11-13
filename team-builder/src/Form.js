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
        <input
          id="roleInput"
          name="Role"
          type="text"
          onChange={props.handleChange}
          value={props.newmembers.Role}
        />

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
          name="Languages"
          type="text"
          onChange={props.handleChange}
          value={props.newmembers.Languages}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
