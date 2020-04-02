import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
import { setThumbnail } from '../../../redux/actions/selected';
import ImageCarousel from './ImageCarousel';
import ThumbnailCarousel from './ThumbnailCarousel';

const ImageGallery = ({
  photos,
  thumbnailIndex,
  selectThumbnail,
  expanded,
  setExpanded
}) => {
  return (
    <div
      data-testid="imageGallery"
      id="imageGallery"
      className={`${expanded ? 'ovExpanded' : 'ovNormal'}`}
    >
      <ImageCarousel
        photos={photos}
        photoIndex={thumbnailIndex}
        setPhotoIndex={selectThumbnail}
        expanded={expanded}
      />
      <ThumbnailCarousel
        photos={photos}
        thumbnailIndex={thumbnailIndex}
        selectThumbnail={selectThumbnail}
        hidden={expanded}
      />
      <button
        type="button"
        id="expandBtn"
        className="ovBtn"
        onClick={(e) => {
          e.preventDefault();
          setExpanded(!expanded);
        }}
      >
        <FontAwesomeIcon
          icon={expanded ? faCompress : faExpand}
          // color="white"
          size="lg"
        />
      </button>
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
