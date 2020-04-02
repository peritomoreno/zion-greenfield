import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { connect } from 'react-redux';
import { Modal, Button, Form, Image } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import setQuestions from '../../../redux/actions/setQuestions';
import { QA } from '../../../api';
import firebaseConfig from '../../../firebaseConfig.js';

firebase.initializeApp(firebaseConfig);

const AnswerModalForm = ({
  show,
  handleClose,
  questionId,
  questionBody,
  productId,
  productName,
  updateQuestions
}) => {
  const [answerBody, setAnswerBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [selectedImage, setSelectedImage] = useState(undefined);
  const [imgUrls, setImgUrls] = useState([]);

  const isValidEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  useEffect(() => {
    const handleUploadImage = () => {
      const storageRef = firebase.storage().ref();
      const fileName = selectedImage.name;
      const index = fileName.lastIndexOf('.');
      const extension = index ? fileName.slice(index) : '';
      const imageRef = storageRef.child(`images/${uuidv4()}${extension}`);
      imageRef.put(selectedImage).then((snapshot) => {
        if (snapshot.state === 'success') {
          snapshot.ref
            .getDownloadURL()
            .then((url) => setImgUrls([...imgUrls, url]));
          setSelectedImage(undefined);
        }
      });
    };
    if (selectedImage !== undefined) {
      handleUploadImage();
    }
  }, [selectedImage, imgUrls]);

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
      photos: imgUrls,
      email
    };

    const response = await QA.addAnswer(questionId, newAnswer);

    if (!response.error) {
      const resQuestions = await QA.fetchAllQuestions(productId);
      updateQuestions(resQuestions.error ? [] : resQuestions.results);
      setAnswerBody('');
      setNickname('');
      setEmail('');
      setImgUrls([]);
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
            <h6>
              {productName}: {questionBody}
            </h6>
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
            <Form.Label hidden={imgUrls.length >= 5}>
              Upload your photos
            </Form.Label>
            <br />
            {imgUrls.map((url) => (
              <Image
                src={url}
                style={{ maxHeight: '100px', maxWidth: '100px' }}
              />
            ))}
            <Form.File>
              <Form.File.Input
                accept="image/*"
                hidden={imgUrls.length >= 5}
                onChange={(e) => setSelectedImage(e.target.files[0])}
              />
            </Form.File>
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
