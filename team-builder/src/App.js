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
    setMembers([
      {
        Name: "",
        Email: "",
        Role: "",
        Experience: "",
        Languages: ""
      }
    ]);

    event.target.Name.value = "";
    event.target.Email.value = "";
    event.target.Role.value = "";
    event.target.Experience.value = "";
    event.target.Languages.value = "";
  };

  return (
    <ContainDiv>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        members={members}
      />
      {/* <MemberProfile members={members} /> */}
      <SavedMembersList list={savedMembers} />
    </ContainDiv>
  );
}

export default App;
