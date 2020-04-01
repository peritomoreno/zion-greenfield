import React from 'react';
import { connect } from 'react-redux';
import { setThumbnail } from '../../../redux/actions/selected';

const ThumbnailCarousel = ({ photos, selectThumbnail }) => {
  return (
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
  );
};

const mapStateToProps = (state) => ({
  style: state.selected.style,
  thumbnailIndex: state.selected.thumbnailIndex
});

const mapDispatchToProps = { selectThumbnail: setThumbnail };

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallery);
// export default ImageGallery;
