import React, { useState, useEffect } from "react";

const Users = ({ users, deleteuser, editUser }) => {
  const [user, setUser] = useState(users);

  useEffect(() => {
    setUser(users);
  }, [users]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">LastName</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => editUser(user)}
                >
                  Edit
                </button>{" "}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteuser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
