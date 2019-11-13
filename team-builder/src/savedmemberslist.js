import React from "react";
import styled from "styled-components";

// import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";

export const SavedMembersList = props => {
  const ListOfMembersDiv = styled.div`
    margin: 30px;
    background: black;
    color: white;
    width: 150px;
  `;

  return (
    <>
      <h3>Saved Members: </h3>
      {props.list.map(person => (
        <ListOfMembersDiv>
          <span className="saved-memeber">{person.Name}</span>
          <p>{person.Email} </p>
          <p>{person.Role}</p>
          <p>{person.Experience}</p>
        </ListOfMembersDiv>
      ))}
      {/* <NavLink to="/">
      <div className="home-button">Home</div>
    </NavLink>{" "} */}
    </>
  );
};
