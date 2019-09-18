import React from 'react';


function Form (props){
    const {name,age,role,onDataChange} = props;
    return (
      <form>
        <label htmlFor='nameInput'>Name</label>
        <input
          value={name}
           onChange={onDataChange}
          id='nameInput'
          type='text'
        />
  
        <label htmlFor='ageInput'>Age</label>
        <input
          value={age}
           onChange={onDataChange}
          id='ageInput'
          type='text'
        />
  
  <label htmlFor='roleInput'>Role</label>
        <input
          value={role}
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