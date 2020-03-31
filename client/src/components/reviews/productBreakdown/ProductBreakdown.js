import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ProductBreakdown = (data) => {
  const { characteristics } = data.productBreakdown;
  const arr = Object.entries(characteristics);

  return (
    <Col data-testid="productBreakdown" className="review-product-breakdown">
      {arr.map((rating) => (
        <Row>
          <label for={rating[0] + '-slider'}>{rating[0]}</label>
          <input
            type="range"
            class="custom-range"
            min="1"
            max="5"
            value={rating[1].value}
            id={rating[0] + '-slider'}
          />
        </Row>
      ))}
    </Col>
  );
};

export default ProductBreakdown;
