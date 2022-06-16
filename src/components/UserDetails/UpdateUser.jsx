import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const UpdateUser = (props) => {
  const { updateUser, setUpdateUser, saveUser, show, handleClose } = props;

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
              value={updateUser.username}
              onChange={(e) =>
                setUpdateUser({ ...updateUser, username: e.target.value })
              }
              type="text"
              placeholder="kullanıcı adı.."
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Parola</Form.Label>
            <Form.Control
              value={updateUser.password}
              onChange={(e) =>
                setUpdateUser({ ...updateUser, password: e.target.value })
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

export default UpdateUser;
