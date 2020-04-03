import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageCarousel = ({
  photos,
  photoIndex,
  setPhotoIndex,
  expanded,
  setExpanded,
  setZoomed,
  hidden
}) => {
  return (
    <div className={`${hidden && 'd-none'}`}>
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
              onClick={() => {
                if (!expanded) setExpanded(true);
                else setZoomed(true);
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
