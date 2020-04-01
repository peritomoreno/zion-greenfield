import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton
} from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
  faPinterestSquare
} from '@fortawesome/free-brands-svg-icons';
import { connect } from 'react-redux';

const SocialCard = ({
  productName,
  url = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
}) => {
  const ulStyles = {
    display: 'inline',
    padding: '0px'
  };

  const liStyles = {
    display: 'inline',
    margin: '2px'
  };

  const quote = `I <3 the ${productName} from Team Zion!`;

  return (
    <div data-testid="socialCard">
      <ul style={ulStyles}>
        <li style={liStyles}>
          <FacebookShareButton url={url} quote={quote}>
            <FontAwesomeIcon icon={faFacebookSquare} size="lg" color="gray" />
          </FacebookShareButton>
        </li>
        <li style={liStyles}>
          <TwitterShareButton url={url} title={quote}>
            <FontAwesomeIcon icon={faTwitterSquare} size="lg" color="gray" />
          </TwitterShareButton>
        </li>
        <li style={liStyles}>
          <PinterestShareButton url={url} description={quote}>
            <FontAwesomeIcon icon={faPinterestSquare} size="lg" color="gray" />
          </PinterestShareButton>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({ productName: state.currentProduct.name });

export default connect(mapStateToProps)(SocialCard);
