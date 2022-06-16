import { Button } from "react-bootstrap";
import React, { useState } from "react";
import UserDetail from "./UserDetail";
import "./UserDetails.css";
import NewUser from "./NewUser";
import { generateAccountNumber } from "../../helper";
import UpdateUser from "./UpdateUser";

const UserDetails = (props) => {
  const { users, setUsers, accounts, setAccounts } = props;

  const [showNewUserModal, setShowNewUserModal] = useState(false);
  const [newUser, setNewUser] = useState({ username: "", password: "" });

  const handleClose = () => {
    setShowNewUserModal(false);
  };

  const deleteClick = (id) => {
    let arrUsers = users.filter((x) => x.id != id);
    let arrAccounts = accounts.filter((x) => x.user != id);
    setUsers(arrUsers);
    setAccounts(arrAccounts);
  };

  const saveUser = () => {
    if (newUser.username != "" && newUser.password != "") {
      let arrUsers = users;
      if (arrUsers.find((x) => x.username == newUser.username) == undefined) {
        //create user
        const user = {
          id: Math.random(),
          username: newUser.username,
          password: newUser.password,
          role: "USER",
        };
        arrUsers.push(user);

        let acc = [...accounts];

        //create new account and push
        acc.push({
          id: Math.random(),
          accountNumber: "TR-" + generateAccountNumber(8),
          accountName: "Hesap 1",
          currency: "TL",
          balance: 0,
          user: user.id,
          transfers: [],
        });

        setAccounts(acc);
        setUsers(arrUsers);
        setNewUser();
        setShowNewUserModal(false);
      } else {
        alert("Kullanıcı adı zaten mevcut!");
      }
    } else {
      alert("Boş alan bırakılamaz!");
    }
  };

  return (
    <div className="userDetails">
      <Button
        style={{ width: "250px" }}
        onClick={() => setShowNewUserModal(true)}
        variant="success"
      >
        Add New User
      </Button>
      {users
        .filter((x) => x.role == "USER")
        .map((x) => (
          <UserDetail
            users={users}
            setUsers={setUsers}
            deleteClick={() => deleteClick(x.id)}
            id={x.id}
            key={x.id}
            username={x.username}
            password={x.password}
          />
        ))}
      <NewUser
        show={showNewUserModal}
        handleClose={handleClose}
        saveUser={saveUser}
        newUser={newUser}
        setNewUser={setNewUser}
      />
    </div>
  );
};

export default UserDetails;
