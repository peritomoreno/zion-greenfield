import React from 'react';

const ImageGallery = ({ selected: { style, thumbnailIndex } }) => {
  const { url } = style.photos[thumbnailIndex];
  return (
    <div data-testid="imageGallery">
      <img src={url} alt="" style={{ maxWidth: '500px' }} />
    </div>
  );
};

export default ImageGallery;
