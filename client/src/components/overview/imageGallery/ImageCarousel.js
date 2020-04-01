import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = ({ photos, photoIndex, setPhotoIndex }) => {
  return (
    <Carousel
      activeIndex={photoIndex}
      onSelect={(index) => {
        setPhotoIndex(index);
      }}
      fade
      interval={null}
      indicators={false}
    >
      {photos.map(({ url }) => (
        <Carousel.Item key={url}>
          <img
            className="w-100"
            src={url}
            alt="First slide"
            style={{ objectFit: 'contain' }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
