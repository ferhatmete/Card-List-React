import React from "react";
// CSS
import "./User.css";

const User = ({ user }) => {
  return (
    <div className="user">
      <img className="user__image" src={user.picture.large} alt=""></img>
      <div className="user__info">
        <h2>
          {user.name.first} {user.name.last}
        </h2>
        <p className="user__mail">E-Mail: {user.email}</p>
        <p className="user__phone">Phone: {user.phone}</p>
        <p className="user__location">
          {user.location.country}, {user.location.city}
        </p>
      </div>
    </div>
  );
};

export default User;
