import React from "react";
import { Button } from "react-bootstrap";
import AccountList from "../components/Account/AccountList";
const UserPage = (props) => {
  const { accounts, setAccounts, users, setUsers, loggedUser, setLoggedUser } =
    props;

  const logout = () => {
    setLoggedUser();
  };

  return (
    <div className="m-3">
      <Button onClick={logout} className="m-5">
        Çıkış Yap
      </Button>
      <h1 className="m-5">Kullanıcı Adı: {loggedUser.username}</h1>
      <AccountList
        allAccounts={accounts}
        accounts={accounts.filter((x) => x.user == loggedUser.id)}
        setAccounts={setAccounts}
      />
    </div>
  );
};

export default UserPage;
