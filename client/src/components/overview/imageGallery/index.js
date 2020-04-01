import React from 'react';
import { connect } from 'react-redux';
import { setThumbnail } from '../../../redux/actions/selected';
import ImageCarousel from './ImageCarousel';

const ImageGallery = ({ photos, thumbnailIndex, selectThumbnail }) => {
  return (
    <div data-testid="imageGallery">
      <ImageCarousel
        photos={photos}
        photoIndex={thumbnailIndex}
        setPhotoIndex={selectThumbnail}
      />
      <div>
        <ul>
          {photos.map((photo, index) => (
            <li>
              <span
                onClick={() => selectThumbnail(index)}
                onKeyDown={() => selectThumbnail(index)}
                role="button"
                tabIndex={0}
              >
                <img src={photo.url} alt="" style={{ maxWidth: '50px' }} />
              </span>
            </li>
          ))}
        </ul>
      </div>
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
