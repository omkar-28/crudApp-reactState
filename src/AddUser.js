import React, { useState } from "react";

const AddUser = (props) => {
  const userData = {
    id: null,
    name: "",
    lastname: "",
    email: "",
  };
  const [users, SetUsers] = useState(userData);

  const handleInput = (e) => {
    SetUsers({ ...users, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.AddUserData(users);
        SetUsers(userData);
      }}
    >
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          name="name"
          value={users.name}
          onChange={handleInput}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="lastname"
          className="form-control"
          value={users.lastname}
          placeholder="Lastname"
          onChange={handleInput}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          value={users.email}
          name="email"
          className="form-control"
          placeholder="Enter email"
          onChange={handleInput}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add User
      </button>
    </form>
  );
};

export default AddUser;
