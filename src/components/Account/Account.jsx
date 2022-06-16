import React, { useState } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import {
  checkTransfer,
  convertMoney,
  generateLog,
  updateAccount,
} from "../../helper";
import SendMoney from "../SendMoney/SendMoney";
import "./Account.css";
const Account = (props) => {
  const { account, allAccounts, setAccounts } = props;

  const [showTransfers, setShowTransfers] = useState(false);
  const [show, setShow] = useState(false);

  const [moneyTransfer, setMoneyTransfer] = useState({
    accountNumber: "",
    amount: "",
  });

  const handleClose = () => {
    setShow(false);
  };

  const openMoneyTransferModal = () => {
    setShow(true);
  };

  const sendMoneyFunction = () => {
    if (checkTransfer(moneyTransfer, account) == true) {
      const amount = Math.abs(moneyTransfer.amount);
      let receiverAccount = allAccounts.find(
        (x) => x.accountNumber == moneyTransfer.accountNumber
      );

      if (receiverAccount != undefined) {
        //convert money using currency data
        let convertedAmount = convertMoney(
          account.currency,
          receiverAccount.currency,
          amount
        );

        //get money
        account.balance -= amount;
        account.transfers.push(
          generateLog(
            "expense",
            amount,
            account.currency,
            receiverAccount.accountNumber
          )
        );

        //add money
        receiverAccount.balance += convertedAmount;
        receiverAccount.transfers.push(
          generateLog(
            "income",
            convertedAmount,
            receiverAccount.currency,
            account.accountNumber
          )
        );

        //update for sender
        setAccounts(updateAccount(account, allAccounts));
        //update for receiver
        setAccounts(updateAccount(receiverAccount, allAccounts));
        setShow(false);
        setMoneyTransfer({
          accountNumber: "",
          amount: "",
        });

        alert("Para aktarıldı!");
      } else {
        alert("Böyle bir hesap bulunamadı!");
      }
    }
  };

  const copyAccountNumber = () => {
    navigator.clipboard.writeText(account.accountNumber);
    alert("kopyalandı");
  };

  return (
    <Card className="accountCard" bg="dark">
      <Card.Body>
        <div className="accountCard-row">
          <h1 className="accountCardTitle">{account.accountName}</h1>
          <Button onClick={openMoneyTransferModal}>Para Gönder</Button>
        </div>
        <h4 onClick={copyAccountNumber} className="accountCardNumber">
          {account.accountNumber}
        </h4>
        <h2 className="accountCardBalance">
          {Number(account.balance).toFixed(2)} {account.currency}
        </h2>
        <h5
          onClick={() => setShowTransfers(!showTransfers)}
          className="accountCardDetail"
        >
          hesap geçmişi
        </h5>
      </Card.Body>
      {showTransfers && (
        <ListGroup>
          {account.transfers
            .sort((a, b) => b.date.getTime() - a.date.getTime())
            .map((x, index) => (
              <ListGroup.Item
                style={{
                  backgroundColor: x.type == "income" ? "green" : "red",
                  color: "white",
                }}
                key={index + account.accountName}
              >
                <h2>{x.log}</h2> <h6>{x.date.toString()}</h6>
              </ListGroup.Item>
            ))}
        </ListGroup>
      )}
      {showTransfers && account.transfers.length == 0 && (
        <h5 className="accountCardDetail-NotFound">Transfer bulunamadı!</h5>
      )}
      <SendMoney
        show={show}
        account={account}
        handleClose={handleClose}
        moneyTransfer={moneyTransfer}
        setMoneyTransfer={setMoneyTransfer}
        sendMoneyFunction={sendMoneyFunction}
      />
    </Card>
  );
};

export default Account;
