import React from 'react';
import { connect } from 'react-redux';
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
      />
      <ThumbnailCarousel
        photos={photos}
        thumbnailIndex={thumbnailIndex}
        selectThumbnail={selectThumbnail}
        hidden={expanded}
      />
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          setExpanded(!expanded);
        }}
      >
        toggle expand
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
