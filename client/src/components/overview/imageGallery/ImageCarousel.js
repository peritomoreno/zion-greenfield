import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = ({
  photos,
  photoIndex,
  setPhotoIndex,
  expanded,
  setExpanded
}) => {
  return (
    <Carousel
      activeIndex={photoIndex}
      onSelect={(index) => {
        setPhotoIndex(index);
      }}
      fade
      interval={null}
      indicators={expanded}
    >
      {photos.map(({ url }) => (
        <Carousel.Item>
          <img
            className="w-100"
            src={url}
            alt="First slide"
            key={url}
            onClick={() => setExpanded(!expanded)}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
