import React, { useState, Fragment } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Users from "./Users";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

const App = () => {
  const userData = [
    { id: 1, name: "John", lastname: "Doe", email: "john@gmail.com" },
    { id: 2, name: "Adam", lastname: "whiteman", email: "Adam@gmail.com" },
  ];
  const initialState = [{ id: null, name: "", lastname: "", email: "" }];
  const [users, setUsers] = useState(userData);
  const [editing, setEditing] = useState(false);
  const [currentUser, SetcurrentUser] = useState(userData);

  const AddUserData = (user) => {
    user.id = users.length + 1;

    setUsers([...users, user]);
  };

  const deleteuser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (user) => {
    setEditing(true);
    SetcurrentUser({
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
    });
  };

  const updatedUser = (updateuser, id) => {
    setEditing(false);
    console.log(updateuser, id);

    setUsers(users.map((user) => (user.id === id ? updateuser : user)));
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">Crud App</h1>
      <div className="row">
        <div className="col-md-6">
          {editing ? (
            <Fragment>
              <h2>Edit Users</h2>
              <EditUser
                currentUser={currentUser}
                updatedUser={updatedUser}
                setEditing={setEditing}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add Users</h2>
              <AddUser AddUserData={AddUserData} />
            </Fragment>
          )}
        </div>
        <div className="col-md-6">
          <h2>Users</h2>
          <Users users={users} deleteuser={deleteuser} editUser={editUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
