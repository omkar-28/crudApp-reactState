import React, { useState, useEffect } from "react";

const EditUser = ({ currentUser, updatedUser, setEditing }) => {
  console.log(currentUser);

  const [user, SetUser] = useState(currentUser);

  useEffect(() => {
    SetUser(currentUser);
  }, []);

  const handleEditInput = (e) => {
    SetUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        updatedUser(user, user.id);
      }}
    >
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          value={user.name}
          onChange={handleEditInput}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="lastname"
          className="form-control"
          placeholder="Lastname"
          value={user.lastname}
          onChange={handleEditInput}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
          value={user.email}
          onChange={handleEditInput}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Update User
      </button>{" "}
      <button
        type="submit"
        className="btn btn-danger"
        onClick={() => setEditing(false)}
      >
        cancel
      </button>
    </form>
  );
};

export default EditUser;
