import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import LoginComponent from "./components/Login/LoginComponent";
import { accountsData, usersData } from "./data/defaultData";
import AdminPage from "./pages/AdminPage";
import UserPage from "./pages/UserPage";

function App() {
  //tum kullanıcılar ve hesapları
  const [users, setUsers] = useState(usersData);
  const [accounts, setAccounts] = useState(accountsData);

  //login componentinin inputları
  const [loginInput, setLoginInput] = useState({ username: "", password: "" });

  //giriş yapan kullanıcı bilgisi
  const [loggedUser, setLoggedUser] = useState();

  const loginClick = () => {
    if (loginInput.username != "" && loginInput.password != "") {
      //kullanıcıyı bul ve giriş yapan kullanıcı olarak set et
      const findUser = users.find(
        (x) =>
          x.username == loginInput.username && x.password == loginInput.password
      );
      if (findUser != undefined) {
        //undefined değil ise yani kullanıcı bulunduysa
        setLoggedUser(findUser);
        setLoginInput({ username: "", password: "" });
      } else {
        alert("Kullanici bulunamadi!");
      }
    } else {
      alert("Boş alan bırakılamaz!");
    }
  };

  const isUser = () => {
    return loggedUser != undefined && loggedUser.role == "USER";
  };

  const isAdmin = () => {
    return loggedUser != undefined && loggedUser.role == "SUPERADMIN";
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <h1 style={{ textAlign: "center" }}>ABC Bank</h1>
      {loggedUser == undefined && (
        <LoginComponent
          loginInput={loginInput}
          setLoginInput={setLoginInput}
          loginClick={loginClick}
        />
      )}
      {isAdmin() && (
        <AdminPage
          users={users}
          setUsers={setUsers}
          loggedUser={loggedUser}
          setLoggedUser={setLoggedUser}
          accounts={accounts}
          setAccounts={setAccounts}
        />
      )}
      {isUser() && (
        <UserPage
          accounts={accounts}
          setAccounts={setAccounts}
          loggedUser={loggedUser}
          setLoggedUser={setLoggedUser}
        />
      )}
    </div>
  );
}

export default App;
