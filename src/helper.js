import { currencyData } from "./data/defaultData";

export const updateAccount = (acc, allAccounts) => {
  let arr = allAccounts.map((x) => {
    if (x.id == acc.id) {
      return acc;
    } else return x;
  });

  return arr;
};

export const convertMoney = (from, to, value) => {
  let x = Number(value);
  if (from == "DOLAR" && to == "TL") {
    x = x * currencyData.dolar;
  } else if (to == "DOLAR" && from == "TL") {
    x = x / currencyData.dolar;
  } else if (from == "EURO" && to == "TL") {
    x = x * currencyData.euro;
  } else if (to == "EURO" && from == "TL") {
    x = x / currencyData.euro;
  }
  return x;
};

export const checkTransfer = (moneyTransfer, account) => {
  const min = 10;

  if (moneyTransfer.accountNumber != "" && moneyTransfer.amount != "") {
    if (moneyTransfer.accountNumber != account.accountNumber) {
      if (moneyTransfer.amount < 0) {
        alert("Gonderilecek para eksi olamaz!");
      } else {
        const amount = Math.abs(moneyTransfer.amount);
        if (amount == 0) {
          alert("0 gonderilemez!");
        } else if (amount < min) {
          alert("Minimum gönderim tutarının altında para yollanamaz!");
        } else if (amount <= account.balance) {
          return true;
        } else {
          alert("Bakiye yetersiz!");
        }
      }
    } else {
      alert("Hesaplar aynı olamaz!");
    }
  } else {
    alert("Boş alan bırakılamaz!");
  }
  return false;
};

export const generateAccountNumber = (length) => {
  var result = "";
  var characters = "0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const generateLog = (type, amount, currency, accountNumber) => {
  let arrow = " -> ";
  let msg = " numarali hesaba transfer";
  if (type == "income") {
    arrow = " <- ";
    msg = " numarali hesaptan transfer";
  }
  const log = {
    type: type,
    log: Number(amount).toFixed(2) + currency + arrow + accountNumber + msg,
    date: new Date(),
  };

  return log;
};
