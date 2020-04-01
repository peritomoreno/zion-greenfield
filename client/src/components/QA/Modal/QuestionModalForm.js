import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import setQuestions from '../../../redux/actions/setQuestions';
import { QA } from '../../../api';

const QuestionModalForm = ({
  show,
  handleClose,
  subtitle,
  updateQuestions,
  id
}) => {
  const [questionBody, setQuestionBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const isValidEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async () => {
    let msgBody = '';
    if (questionBody.length < 1) msgBody += '* Question\n';
    if (nickname.length < 1) msgBody += '* Nickname\n';
    if (email.length < 1) msgBody += '* Email\n';
    if (!isValidEmail() && email.length > 0) msgBody += '* Valid Email\n';
    if (msgBody.length > 1) {
      // eslint-disable-next-line no-alert
      alert(`You must enter the following:\n${msgBody}`);
      return;
    }

    const newQuestion = {
      body: questionBody,
      name: nickname,
      email
    };

    const response = await QA.addQuestion(id, newQuestion);

    if (!response.error) {
      const resQuestions = await QA.fetchAllQuestions(id);
      updateQuestions(resQuestions.error ? [] : resQuestions.results);
      setQuestionBody('');
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
            <h4>Ask Your Question</h4>
            <h6>{subtitle}</h6>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Your Question</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              maxLength={1000}
              value={questionBody}
              onChange={(e) => setQuestionBody(e.target.value)}
            />
            <Form.Label>What is your nickname</Form.Label>
            <Form.Control
              placeholder="Example: jackson11!"
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
              placeholder="Why did you like the product or not?"
              maxLength={60}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              For authentication reasons, you will not be emailed
            </Form.Text>
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
  subtitle: state.currentProduct.name,
  id: state.currentProduct.id
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateQuestions: (newQuestions) => dispatch(setQuestions(newQuestions))
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(QuestionModalForm);
