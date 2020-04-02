import React, { useState, useEffect } from 'react';
// import * as firebase from 'firebase/app';
// import 'firebase/storage';
import { connect } from 'react-redux';
import { Modal, Button, Form, Image } from 'react-bootstrap';
// import { v4 as uuidv4 } from 'uuid';
// import firebaseConfig from '../../../firebaseConfig.js';
import Reviews from '../../../api/review';

// firebase.initializeApp(firebaseConfig);

const ReviewModalForm = ({ show, handleClose, productID, productName }) => {
  const [overallRating, setOverallRating] = useState(0);
  const [reviewerRecommends, setReviewerRecommends] = useState(null);
  const [characteristics, setCharacteristics] = useState({});
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  //   const [selectedImage, setSelectedImage] = useState('');
  //   const [imgUrls, setImgUrls] = useState([]);

  const isValidEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  //   useEffect(() => {
  //     const handleUploadImage = () => {
  //       const storageRef = firebase.storage().ref();
  //       const fileName = selectedImage.name;
  //       const index = fileName === undefined ? 0 : fileName.lastIndexOf('.');
  //       const extension = index ? fileName.slice(index) : '';
  //       const imageRef = storageRef.child(`images/${uuidv4()}${extension}`);
  //       imageRef.put(selectedImage).then((snapshot) => {
  //         if (snapshot.state === 'success') {
  //           snapshot.ref
  //             .getDownloadURL()
  //             .then((url) => setImgUrls([...imgUrls, url]));
  //           setSelectedImage(undefined);
  //         }
  //       });
  //     };
  //     if (selectedImage !== undefined) {
  //       handleUploadImage();
  //     }
  //   }, [selectedImage, imgUrls]);

  const handleSubmit = async () => {
    let msgBody = '';
    if (overallRating < 1) msgBody += '* Rating\n';
    if (typeof reviewerRecommends !== 'boolean')
      msgBody += '* Recommendation\n';
    if (reviewSummary.length < 1) msgBody += '* Review Summary\n';
    if (reviewBody.length < 1) msgBody += '* Review\n';
    if (nickname.length < 1) msgBody += '* Nickname\n';
    if (email.length < 1) msgBody += '* Email\n';
    if (!isValidEmail() && email.length > 0) msgBody += '* Valid Email\n';
    if (msgBody.length > 1) {
      // eslint-disable-next-line no-alert
      alert(`You must enter the following:\n${msgBody}`);
      return;
    }

    const newReview = {
      rating: overallRating,
      summary: reviewSummary,
      body: reviewBody,
      recommend: reviewerRecommends,
      name: nickname,
      email: email,
      //   photos: imgUrls,
      characteristics: characteristics
    };

    const response = await Reviews.postReview(productID, newReview);

    if (!response.error) {
      alert('review submitted!');
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
            <h4>Submit Your Review</h4>
            <h6>About the {productName}</h6>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Overall Rating</Form.Label>
            {/* needs to be a 1-5 star */}
            <Form.Control
              as="textarea"
              rows="3"
              maxLength={1000}
              value={overallRating}
              onChange={(e) => setOverallRating(e.target.value)}
            />
            <Form.Label>Do you recommend this product?</Form.Label>
            {/* needs to be a yes/no radio button */}
            <Form.Control
              as="textarea"
              rows="3"
              maxLength={1000}
              value={reviewerRecommends}
              onChange={(e) => setReviewerRecommends(e.target.value)}
            />
            <Form.Label>Characteristics</Form.Label>
            {/* needs to be an array of 5-radio button arrays labeled 1 2 3 4 5 (more descriptive labels in BRD for each possible characteristic) */}
            <Form.Control
              as="textarea"
              rows="3"
              maxLength={1000}
              value={characteristics}
              onChange={(e) => setCharacteristics(e.target.value)}
            />
            <Form.Label>Review Summary</Form.Label>
            {/* 60 Char Limit */}
            <Form.Control
              as="textarea"
              rows="3"
              maxLength={60}
              placeholder="Example: Best purchase ever!"
              value={reviewSummary}
              onChange={(e) => setReviewSummary(e.target.value)}
            />
            <Form.Label>Review</Form.Label>
            {/* 1,000 char limit */}
            <Form.Control
              as="textarea"
              rows="3"
              maxLength={1000}
              placeholder="Why did you like this product or not?"
              value={reviewBody}
              onChange={(e) => setReviewBody(e.target.value)}
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
            {/* <Form.Label hidden={imgUrls.length >= 5}>
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
            </Form.File> */}
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
  productID: state.currentProduct.id
});

export default connect(mapStatetoProps)(ReviewModalForm);
