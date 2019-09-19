import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from "./Form";

function App() {

// const initialMembers = {
//   name: " ",
//   age: " ",
//   role: " ",
  
// };
  const [teamMembers, setTeamMembers] = useState({
  name: "",
  age: "",
  role: "",
  }) ;

  const onDataChange = event => {
    event.preventDefault();
    setTeamMembers({...teamMembers, [event.target.name]: event.target.value })
  }

  return (
    <div className="App">
      <Form
      onChange = {onDataChange}
      />
    </div>
  );

  }




export default App;
