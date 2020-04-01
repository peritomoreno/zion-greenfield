import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ProductBreakdown = (data) => {
  const { characteristics } = data.productBreakdown;
  const arr = Object.entries(characteristics);

  return (
    <Col data-testid="productBreakdown" className="review-product-breakdown">
      {arr.map((rating) => (
        <Row>
          <label htmlFor={`${rating[0]}-slider`}>{rating[0]}</label>
          <input
            type="range"
            className="custom-range"
            min="1"
            max="5"
            value={rating[1].value}
            id={`${rating[0]}-slider`}
          />
        </Row>
      ))}
    </Col>
  );
};

export default ProductBreakdown;
