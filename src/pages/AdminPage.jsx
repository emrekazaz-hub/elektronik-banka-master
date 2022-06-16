import { Button } from "react-bootstrap";
import React from "react";
import UserDetails from "../components/UserDetails/UserDetails";

const AdminPage = (props) => {
  const { users, setUsers, loggedUser, setLoggedUser, accounts, setAccounts } =
    props;

  const logout = () => {
    setLoggedUser();
  };

  return (
    <div className="m-3">
      <Button onClick={logout} className="m-5">
        Çıkış Yap
      </Button>
      <UserDetails
        accounts={accounts}
        setAccounts={setAccounts}
        users={users}
        setUsers={setUsers}
      />
    </div>
  );
};

export default AdminPage;
