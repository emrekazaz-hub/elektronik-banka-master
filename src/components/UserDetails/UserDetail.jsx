import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import UpdateUser from "./UpdateUser";
import "./UserDetails.css";

const UserDetail = (props) => {
  const { username, password, deleteClick, users, setUsers, id } = props;

  const [showUpdateUserModal, setShowUpdateUserModal] = useState(false);
  const [updateUser, setUpdateUser] = useState({
    username: username,
    password: password,
  });

  const handleClose = () => {
    setShowUpdateUserModal(false);
  };

  const updateClick = () => {
    setShowUpdateUserModal(true);
  };

  const saveUser = () => {
    if (updateUser.username != "" && updateUser.password != "") {
      let arrUsers = users;
      let findUser = arrUsers.find((x) => x.id == id);

      if (
        arrUsers.find((x) => x.username == updateUser.username) == undefined ||
        updateUser.username == findUser.username
      ) {
        //eğer verilen kullanıcı adıyla böyle bir kullanıcı yok ise
        findUser = {
          ...findUser,
          username: updateUser.username,
          password: updateUser.password,
        };

        arrUsers = arrUsers.map((x) => {
          if (x.id == id) {
            return findUser;
          }
          return x;
        });
        setUsers(arrUsers);
        setShowUpdateUserModal(false);
      } else {
        alert("Bu kullanıcı adı daha once alınmış!");
      }
    } else {
      alert("Boş alan bırakılamaz!");
    }
  };

  return (
    <div className="userDetail">
      <Button onClick={updateClick} variant="primary">
        Update
      </Button>
      <Button onClick={deleteClick} variant="danger">
        Delete
      </Button>

      <h2>{username}</h2>
      <h2>-</h2>
      <h2>{password}</h2>
      <UpdateUser
        show={showUpdateUserModal}
        handleClose={handleClose}
        saveUser={saveUser}
        updateUser={updateUser}
        setUpdateUser={setUpdateUser}
      />
    </div>
  );
};

export default UserDetail;
