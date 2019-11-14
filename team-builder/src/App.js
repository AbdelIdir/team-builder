import React, { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { MemberProfile } from "./MemberProfile";
import { SavedMembersList } from "./savedmemberslist";
import styled from "styled-components";

const ContainDiv = styled.div`
  background: grey;
  height: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 100px;
`;
function App() {
  const [members, setMembers] = useState([
    {
      Name: "",
      Email: "",
      Role: "",
      Experience: "",
      languages: ""
    }
  ]);

  const [savedMembers, setSavedMembers] = useState([
    {
      Name: "",
      Email: "",
      Role: "",
      Experience: "",
      languages: ""
    }
  ]);

  const addToSavedMembers = members => {
    setSavedMembers([...savedMembers, members]);
  };

  const saveMember = () => {
    addToSavedMembers(members);
  };

  const handleChange = event => {
    // if (/^[A-Za-z]+$/.test(event.target.value) || event.target.value === "") {
    setMembers({
      ...members,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    alert("you just submitted");
    saveMember();
    setMembers([
      {
        Name: "",
        Email: "",
        Role: "",
        Experience: "",
        languages: ""
      }
    ]);

    event.target.Name.value = "";
    event.target.Email.value = "";
    event.target.Role.value = "";
    event.target.Experience.value = "";
    event.target.languages.value = "";
  };

  return (
    <ContainDiv>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        newmembers={members}
      />
      <MemberProfile members={members} />
      <SavedMembersList list={savedMembers} />
    </ContainDiv>
  );
}

export default App;
