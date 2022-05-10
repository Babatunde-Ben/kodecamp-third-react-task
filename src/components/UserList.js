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
          <b className="info-bold-text"> Username:</b>
        </p>
        <p>{username}</p>
      </div>
      <div className="info">
        <p>
          <b className="info-bold-text"> Address:</b>
        </p>
        <p>
          {address.street}, {address.city}
        </p>
      </div>
      <div className="info">
        <p>
          <b className="info-bold-text"> E-mail:</b>
        </p>
        <p>{email}</p>
      </div>
      <div className="info">
        <p>
          <b className="info-bold-text"> Phone:</b>
        </p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default UserList;
