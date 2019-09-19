import React from 'react';
import App from "./App";

function Form (props){
    const {name,age,role,onDataChange} = props;
    return (
      <form>
        <label htmlFor='nameInput'>Name</label>
        <input
          value ={name}
           onChange={onDataChange}
          id='nameInput'
          type='text'
        />
  
        <label htmlFor='ageInput'>Age</label>
        <input
          value={name}
           onChange={onDataChange}
          id='ageInput'
          type='text'
        />
  
  <label htmlFor='roleInput'>Role</label>
        <input
          value={name}
           onChange={onDataChange}
          id='roleInput'
          type='text'
        />
  
        <button
         
        >
          submit
        </button>
      </form>
    )
  };


  export default Form;