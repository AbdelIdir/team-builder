import React, { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { MemberProfile } from "./MemberProfile";
import { SavedMembersList } from "./savedmemberslist";

function App() {
  const [members, setMembers] = useState([
    {
      Name: "",
      Email: "",
      Role: "",
      Experience: "",
      Languages: ""
    }
  ]);

  const [savedMembers, setSavedMembers] = useState([
    {
      Name: "",
      Email: "",
      Role: "",
      Experience: "",
      Languages: ""
    }
  ]);

  const addToSavedMembers = members => {
    setSavedMembers([...savedMembers, members]);
  };

  const saveMember = () => {
    addToSavedMembers(members);
  };

  const handleChange = event => {
    setMembers({
      ...members,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert("you just submitted");
    saveMember();
  };

  return (
    <div>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      <MemberProfile members={members} />
      <SavedMembersList list={savedMembers} />
    </div>
  );
}

export default App;
