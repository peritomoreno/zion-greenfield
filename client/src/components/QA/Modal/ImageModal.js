import React from 'react';
import { Modal, Image } from 'react-bootstrap';

const ImageModal = ({ url, show, setShow }) => {
  return (
    <Modal
      centered
      show={show}
      onHide={() => setShow(false)}
      style={{
        width: window.innerWidth,
        height: window.innerHeight,
        alignItems: 'center'
      }}
    >
      <Modal.Body
        style={{
          maxWidth: window.innerWidth * 0.8,
          maxHeight: window.innerHeight,
          alignSelf: 'center',
          alignItems: 'center',
          padding: '0px'
        }}
      >
        <Image
          src={url}
          onClick={() => setShow(false)}
          style={{
            maxWidth: window.innerWidth * 0.8,
            maxHeight: window.innerHeight
          }}
        />
      </Modal.Body>
    </Modal>
  );
};
export default ImageModal;
