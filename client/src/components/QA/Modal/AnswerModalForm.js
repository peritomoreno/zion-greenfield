import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import setQuestions from '../../../redux/actions/setQuestions';
import { QA } from '../../../api';

// TODO: Make it AnswerModalForm

const AnswerModalForm = ({
  show,
  handleClose,
  questionId,
  productId,
  productName,
  updateQuestions
}) => {
  const [answerBody, setAnswerBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const isValidEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async () => {
    let msgBody = '';
    if (answerBody.length < 1) msgBody += '* Answer\n';
    if (nickname.length < 1) msgBody += '* Nickname\n';
    if (email.length < 1) msgBody += '* Email\n';
    if (!isValidEmail() && email.length > 0) msgBody += '* Valid Email\n';
    if (msgBody.length > 1) {
      // eslint-disable-next-line no-alert
      alert(`You must enter the following:\n${msgBody}`);
      return;
    }

    const newAnswer = {
      body: answerBody,
      name: nickname,
      email
    };

    const response = await QA.addAnswer(questionId, newAnswer);

    if (!response.error) {
      const resQuestions = await QA.fetchAllQuestions(productId);
      updateQuestions(resQuestions.error ? [] : resQuestions.results);
      setAnswerBody('');
      setNickname('');
      setEmail('');
      handleClose();
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <div className="modalHeader">
            <h4>Submit your Answer</h4>
            <h6>{productName}: [Question Body]</h6>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Your Answer</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              maxLength={1000}
              value={answerBody}
              onChange={(e) => setAnswerBody(e.target.value)}
            />
            <Form.Label>What is your nickname</Form.Label>
            <Form.Control
              placeholder="Example: jack543!"
              maxLength={60}
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <Form.Text className="text-muted">
              For privacy reasons, do not use your full name or email address
            </Form.Text>
            <Form.Label>Your email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Example: jack@email.com"
              maxLength={60}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              For authentication reasons, you will not be emailed
            </Form.Text>
            <Form.Label>Upload your photos</Form.Label>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapStatetoProps = (state) => ({
  productName: state.currentProduct.name,
  productId: state.currentProduct.id
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateQuestions: (newQuestions) => dispatch(setQuestions(newQuestions))
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(AnswerModalForm);
