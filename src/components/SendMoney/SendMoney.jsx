import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const SendMoney = (props) => {
  const {
    account,
    moneyTransfer,
    setMoneyTransfer,
    sendMoneyFunction,
    show,
    handleClose,
  } = props;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Para Aktarımı - {account.accountNumber}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Hesap Numarası</Form.Label>
            <Form.Control
              onChange={(e) =>
                setMoneyTransfer({
                  ...moneyTransfer,
                  accountNumber: e.target.value,
                })
              }
              type="text"
              placeholder="TR-xxxxxx"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Miktar ({account.currency})</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) =>
                setMoneyTransfer({ ...moneyTransfer, amount: e.target.value })
              }
              placeholder="miktar"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          İptal
        </Button>
        <Button variant="primary" onClick={sendMoneyFunction}>
          Gönder
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SendMoney;
