import React from "react";
import Account from "./Account";
import "./Account.css";

const AccountList = (props) => {
  const { accounts, setAccounts, allAccounts } = props;

  return (
    <div className="accountList">
      <h2>Hesaplarım</h2>
      <br />
      {accounts.map((x) => (
        <Account
          allAccounts={allAccounts}
          setAccounts={setAccounts}
          account={x}
          key={x.id}
        />
      ))}
    </div>
  );
};

export default AccountList;
