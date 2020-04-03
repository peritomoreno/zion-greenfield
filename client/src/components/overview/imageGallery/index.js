import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
import { setThumbnail } from '../../../redux/actions/selected';
import ImageCarousel from './ImageCarousel';
import ThumbnailCarousel from './ThumbnailCarousel';
import Zoomer from './Zoomer';

const ImageGallery = ({
  photos,
  thumbnailIndex,
  selectThumbnail,
  expanded,
  setExpanded
}) => {
  const [zoomed, setZoomed] = React.useState(false);

  const children = (
    <>
      <ImageCarousel
        photos={photos}
        photoIndex={thumbnailIndex}
        setPhotoIndex={selectThumbnail}
        expanded={expanded}
        setExpanded={setExpanded}
        setZoomed={setZoomed}
        hidden={zoomed}
      />
      <ThumbnailCarousel
        photos={photos}
        thumbnailIndex={thumbnailIndex}
        selectThumbnail={selectThumbnail}
        hidden={expanded || zoomed}
      />
      <button
        type="button"
        id="expandBtn"
        className={`ovBtn ${zoomed && 'd-none'}`}
        onClick={(e) => {
          e.preventDefault();
          setExpanded(!expanded);
        }}
      >
        <FontAwesomeIcon icon={expanded ? faCompress : faExpand} size="lg" />
      </button>
      <Zoomer
        photoUrl={photos[thumbnailIndex] && photos[thumbnailIndex].url}
        onClick={() => setZoomed(false)}
      />
    </>
  );

  return (
    <div
      data-testid="imageGallery"
      id="imageGallery"
      className={`${expanded ? 'ovExpanded' : 'ovNormal'} ${
        zoomed && 'ovZoomed'
      }`}
    >
      {children}
    </div>
  );
};

const mapStateToProps = (state) => ({
  photos: state.selected.style.photos,
  thumbnailIndex: state.selected.thumbnailIndex
});

const mapDispatchToProps = { selectThumbnail: setThumbnail };

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallery);
// export default ImageGallery;
