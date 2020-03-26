import React from 'react';

const SocialCard = () => {
  const ulStyles = {
    display: 'inline',
    padding: '0px'
  };

  const liStyles = {
    display: 'inline',
    margin: '2px'
  };

  return (
    <div data-testid="socialCard">
      Share:
      <ul style={ulStyles}>
        <li style={liStyles}>
          <a href="default.asp">FB</a>
        </li>
        <li style={liStyles}>
          <a href="news.asp">TW</a>
        </li>
        <li style={liStyles}>
          <a href="contact.asp">IG</a>
        </li>
      </ul>
    </div>
  );
};

export default SocialCard;
