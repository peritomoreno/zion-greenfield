import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import {
  setProductsInfo,
  getRelatedProduct
} from '../../../redux/actions/related';

const Features = ({ feature }) => {
  return (
    <Row data-testid="features" className="related-features">
      <Col className="related-current-check">
        {feature.current ? <FontAwesomeIcon icon={faCheck} /> : ''}
      </Col>
      <Col xs={6} className="related-feature" id="feature-description">
        {feature.description}
      </Col>
      <Col className="related-related-check">
        {feature.related ? <FontAwesomeIcon icon={faCheck} /> : ''}
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    relatedProducts: state.relatedProducts,
    currentProduct: state.currentProduct,
    selected: state.selected
  };
};

export default connect(mapStateToProps, {
  _setProductsInfo: setProductsInfo,
  _getRelatedProduct: getRelatedProduct
})(Features);
