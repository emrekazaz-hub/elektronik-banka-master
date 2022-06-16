import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const NewUser = (props) => {
  const { newUser, setNewUser, saveUser, show, handleClose } = props;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Yeni Kullanıcı Ekle</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Kullanıcı adı</Form.Label>
            <Form.Control
              onChange={(e) =>
                setNewUser({ ...newUser, username: e.target.value })
              }
              type="text"
              placeholder="kullanıcı adı.."
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Parola</Form.Label>
            <Form.Control
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
              placeholder="şifre.."
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Kapat
        </Button>
        <Button variant="primary" onClick={saveUser}>
          Kayıt Et
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewUser;
