import React, { useState } from "react";

export const MemberProfile = props => {
  return (
    <div className="member-profile">
      <h1>Name of the member:{props.members.Name}</h1>
      <h2>Email:{props.members.Email}</h2>
      <h2>Role:{props.members.Role}</h2>
      <h2>Experience:{props.members.Experience}</h2>
      <h2>Languages:{props.members.languages}</h2>
    </div>
  );
};
