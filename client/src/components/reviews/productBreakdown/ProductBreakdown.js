import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ProductBreakdown = (data) => {
  const { characteristics } = data.productBreakdown;
  const arr = Object.entries(characteristics);

  return (
    <Col data-testid="productBreakdown" className="review-product-breakdown">
      {arr.map((rating) => (
        <Row>
          <Col>{rating[0]}</Col>
          <Col>{rating[1].value}</Col>
        </Row>
      ))}
    </Col>
  );
};

export default ProductBreakdown;
