import React from 'react';

const ThumbnailCarousel = ({
  photos,
  thumbnailIndex,
  selectThumbnail,
  hidden
}) => {
  return (
    <div id="thumbnailCarousel" className={`${hidden ? 'd-none' : null}`}>
      {photos.slice(0, 6).map((photo, index) => (
        // <div className="row">
        <div
          className={`thumbnailContainer ${
            index === thumbnailIndex ? 'selected' : ''
          }`}
          onClick={() => selectThumbnail(index)}
          onKeyDown={() => selectThumbnail(index)}
          role="button"
          tabIndex={0}
          key={photo.thumbnail_url}
        >
          <img src={photo.thumbnail_url} alt="" />
        </div>
        // </div>
      ))}
    </div>
  );
};

export default ThumbnailCarousel;
