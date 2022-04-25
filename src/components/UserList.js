import React from "react";

const UserList = ({ user }) => {
  const { name, company, username, address, email, phone } = user;

  return (
    <div className="user-card">
      <p className="name">{name}</p>
      <p className="desc">{company.catchPhrase}</p>

      <p className="subtitle">general info </p>

      <div className="info">
        <p>
          <b> Username</b>
        </p>
        <p>{username}</p>
      </div>
      <div className="info">
        <p>
          <b> Address</b>
        </p>
        <p>
          {address.street}, {address.city}
        </p>
      </div>
      <div className="info">
        <p>
          <b> E-mail</b>
        </p>
        <p>{email}</p>
      </div>
      <div className="info">
        <p>
          <b> Phone</b>
        </p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default UserList;
