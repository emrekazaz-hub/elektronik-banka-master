export const currencyData = {
  dolar: 17.25,
  euro: 18.05,
};

export const accountsData = [
  {
    id: 1,
    accountNumber: "TR-1235677",
    accountName: "tl hesap",
    currency: "TL",
    balance: 1500,
    user: 2,
    transfers: [
      {
        type: "income",
        log: "350TL <- TR-53214 numarali hesaptan transfer",
        date: new Date(),
      },
      {
        type: "expense",
        log: "120TL -> TR-53214 numarali hesaba transfer",
        date: new Date(),
      },
      {
        type: "income",
        log: "50TL <- TR-76342 numarali hesaptan transfer",
        date: new Date(),
      },
      {
        type: "expense",
        log: "30TL -> TR-863264 numarali hesaba transfer",
        date: new Date(),
      },
    ],
  },
  {
    id: 2,
    accountNumber: "TR-5435765",
    accountName: "kripto para",
    currency: "DOLAR",
    balance: 7200,
    user: 2,
    transfers: [
      {
        type: "income",
        log: "3500TL <- TR-54123 numarali hesaptan transfer",
        date: new Date(),
      },
      {
        type: "income",
        log: "1050TL <- TR-1235 numarali hesaptan transfer",
        date: new Date(),
      },
    ],
  },
  {
    id: 3,
    accountNumber: "TR-7683423",
    accountName: "ana hesap",
    currency: "TL",
    balance: 3500,
    user: 3,
    transfers: [
      {
        type: "income",
        log: "760TL <- TR-53214 numarali hesaptan transfer",
        date: new Date(),
      },
      {
        type: "expense",
        log: "20TL -> TR-53214 numarali hesaba transfer",
        date: new Date(),
      },
      {
        type: "income",
        log: "1050TL <- TR-76342 numarali hesaptan transfer",
        date: new Date(),
      },
      {
        type: "expense",
        log: "280TL -> TR-863264 numarali hesaba transfer",
        date: new Date(),
      },
    ],
  },
];

export const usersData = [
  { id: 1, username: "admin", password: "1234", role: "SUPERADMIN" },
  { id: 2, username: "ali_duru", password: "1234", role: "USER" },
  { id: 3, username: "mehmet_solmaz", password: "1234", role: "USER" },
];
