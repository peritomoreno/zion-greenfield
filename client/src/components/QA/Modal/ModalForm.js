import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ModalForm = ({ show, handleClose, content }) => {
  const { title, subtitle } = content;

  // TODO:
  // Generalize Modal Form so it can be reusable
  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <div className="modalHeader">
          <h4>{title}</h4>
          <h6>{subtitle}</h6>
        </div>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Your Question</Form.Label>
          <Form.Control as="textarea" rows="3" />
          <Form.Label>What is your nickname</Form.Label>
          <Form.Control placeholder="Example: jackson11!" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalForm;
