import React from 'react';
import { connect } from 'react-redux';
import { setStyle, setThumbnail } from '../../../redux/actions/selected';
import StyleEntry from './StyleEntry';

const StyleGrid = ({
  styles,
  selectedStyleId,
  selectedThumbnailIndex,
  selectStyle,
  selectThumbnail
}) => {
  return (
    <div
      data-testid="styleGrid"
      style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
    >
      {styles.map((style) => (
        <StyleEntry
          thumbnailUrl={style.photos[0].thumbnail_url}
          isSelected={selectedStyleId === style.style_id}
          handleClick={() => {
            selectStyle(style);
            selectThumbnail(
              Math.min(selectedThumbnailIndex, style.photos.length - 1)
            );
          }}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  styles: state.currentStyles,
  selectedStyleId: state.selected.style.style_id,
  selectedThumbnailIndex: state.selected.thumbnailIndex
});

const mapDispatchToProps = (dispatch) => ({
  selectStyle: (id) => dispatch(setStyle(id)),
  selectThumbnail: (index) => dispatch(setThumbnail(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(StyleGrid);
