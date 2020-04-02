import React from 'react';
<<<<<<< HEAD
import { Row, Col } from 'react-bootstrap';
=======
import { Container, Row, Col, Button } from 'react-bootstrap';
>>>>>>> master

const ProductBreakdown = (data) => {
  const { characteristics } = data.productBreakdown;
  const arr = Object.entries(characteristics);

  return (
    <Col data-testid="productBreakdown" className="review-product-breakdown">
      {arr.map((rating) => (
        <Row>
<<<<<<< HEAD
          <label htmlFor={`${rating[0]}-slider`}>{rating[0]}</label>
          <input
            type="range"
            className="custom-range"
            min="1"
            max="5"
            value={rating[1].value}
            id={`${rating[0]}-slider`}
=======
          <label for={rating[0] + '-slider'}>{rating[0]}</label>
          <input
            type="range"
            class="custom-range"
            min="1"
            max="5"
            value={rating[1].value}
            id={rating[0] + '-slider'}
>>>>>>> master
          />
        </Row>
      ))}
    </Col>
  );
};

export default ProductBreakdown;
