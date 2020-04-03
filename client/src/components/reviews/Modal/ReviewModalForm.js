import React, { useState, useEffect } from 'react';
// import * as firebase from 'firebase/app';
// import 'firebase/storage';
import { connect } from 'react-redux';
import { Modal, Button, Form, Image } from 'react-bootstrap';
// import { v4 as uuidv4 } from 'uuid';
// import firebaseConfig from '../../../firebaseConfig.js';
import Reviews from '../../../api/review';
import '../../../styles/Reviews.css';
// firebase.initializeApp(firebaseConfig);

const ReviewModalForm = ({
  show,
  handleClose,
  productID,
  productName,
  characteristics
}) => {
  const [overallRating, setOverallRating] = useState(0);
  const [reviewerRecommends, setReviewerRecommends] = useState(null);
  const [reviewCharacteristics, setCharacteristics] = useState({});
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  //   const [selectedImage, setSelectedImage] = useState('');
  const [imgUrls, setImgUrls] = useState([]);
  const charArr = Object.entries(characteristics);
  const dumberCharArr = [];
  charArr.forEach((ele) => {
    dumberCharArr.push([ele[0], Object.entries(ele[1])]);
  });

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
    if (reviewBody.length < 50) msgBody += '* Longer review\n';
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
      email,
      photos: imgUrls,
      characteristics: reviewCharacteristics
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
            <Form.Group
              as="radio"
              value={overallRating}
              onChange={(e) => {
                setOverallRating(Number(e.target.value));
              }}
            >
              <div key="inline-radio" className="overall-rating-radio">
                <Form.Check
                  inline
                  label="1"
                  value="1"
                  type="radio"
                  name="overall-rating-radio"
                  id="overall-rating-star-1"
                />
                <Form.Check
                  inline
                  label="2"
                  value="2"
                  type="radio"
                  name="overall-rating-radio"
                  id="overall-rating-star-2"
                />
                <Form.Check
                  inline
                  label="3"
                  value="3"
                  type="radio"
                  name="overall-rating-radio"
                  id="overall-rating-star-3"
                />
                <Form.Check
                  inline
                  label="4"
                  value="4"
                  type="radio"
                  name="overall-rating-radio"
                  id="overall-rating-star-4"
                />
                <Form.Check
                  inline
                  label="5"
                  value="5"
                  type="radio"
                  name="overall-rating-radio"
                  id="overall-rating-star-5"
                />
              </div>
            </Form.Group>

            <Form.Label>Do you recommend this product?</Form.Label>
            {/* needs to be a yes/no radio button */}
            <Form.Group
              as="radio"
              onChange={(e) => {
                if (e.target.value === 'true') setReviewerRecommends(true);
                else setReviewerRecommends(false);
              }}
            >
              <div key="inline-radio" className="mb-3">
                <Form.Check
                  inline
                  label="Yes"
                  value
                  type="radio"
                  name="recommend-radio"
                  id="inline-radio-6"
                />
                <Form.Check
                  inline
                  label="No"
                  value={false}
                  type="radio"
                  name="recommend-radio"
                  id="inline-radio-7"
                />
              </div>
            </Form.Group>

            <Form.Label>Characteristics</Form.Label>
            <br />
            {/* more descriptive labels in BRD for each possible characteristic */}
            {dumberCharArr.map((criterion) => (
              <Form.Group
                as="radio"
                onChange={(e) => {
                  const val = e.target.value;
                  setCharacteristics((prevState) =>
                    // eslint-disable-next-line prefer-object-spread
                    Object.assign({}, prevState, {
                      [criterion[1][0][1]]: val
                    })
                  );
                }}
              >
                {criterion[0]}
                <div key="inline-radio" className="mb-3">
                  <Form.Check
                    inline
                    label="1"
                    value="1"
                    type="radio"
                    name={`recommend-radio-${criterion[0]}`}
                    id="inline-radio"
                  />

                  <Form.Check
                    inline
                    label="2"
                    value="2"
                    type="radio"
                    name={`recommend-radio-${criterion[0]}`}
                    id="inline-radio"
                  />

                  <Form.Check
                    inline
                    label="3"
                    value="3"
                    type="radio"
                    name={`recommend-radio-${criterion[0]}`}
                    id="inline-radio"
                  />
                  <Form.Check
                    inline
                    label="4"
                    value="4"
                    type="radio"
                    name={`recommend-radio-${criterion[0]}`}
                    id="inline-radio"
                  />

                  <Form.Check
                    inline
                    label="5"
                    value="5"
                    type="radio"
                    name={`recommend-radio-${criterion[0]}`}
                    id="inline-radio"
                  />
                </div>
              </Form.Group>
            ))}
            <Form.Label>Review Summary</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              maxLength={60}
              placeholder="Example: Best purchase ever!"
              value={reviewSummary}
              onChange={(e) => setReviewSummary(e.target.value)}
            />
            <Form.Label>Review</Form.Label>
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
