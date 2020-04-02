import React from 'react';

const ThumbnailCarousel = ({ photos, thumbnailIndex, selectThumbnail }) => {
  return (
    <div id="thumbnailCarousel">
      {photos.map((photo, index) => (
        // <div className="row">
        <div
          className={`thumbnailContainer ${
            index === thumbnailIndex ? 'selected' : ''
          }`}
          onClick={() => selectThumbnail(index)}
          onKeyDown={() => selectThumbnail(index)}
          role="button"
          tabIndex={0}
        >
          <img src={photo.thumbnail_url} alt="" />
        </div>
        // </div>
      ))}
    </div>
  );
};

export default ThumbnailCarousel;
