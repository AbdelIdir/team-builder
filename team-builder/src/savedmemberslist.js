import React from "react";
import styled from "styled-components";

// import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";

export const SavedMembersList = props => {
  const ListOfMembersDiv = styled.div`
    margin: 30px;
    color: white;
    width: 200px;
  `;

  const ContainNewCards = styled.div`
    width: 900px;
    display: flex;
    flex-wrap: wrap;
    border: 5px solid red;
  `;
  return (
    <ContainNewCards>
      <h3>New Members to the company: </h3>
      {props.list.map(person => (
        <ListOfMembersDiv>
          <span className="saved-memeber">{person.Name}</span>
          <p> {person.Email} </p>
          <p> {person.Role}</p>
          <p> {person.Experience}</p>
          <p>{person.languages}</p>
        </ListOfMembersDiv>
      ))}
    </ContainNewCards>
  );
};
