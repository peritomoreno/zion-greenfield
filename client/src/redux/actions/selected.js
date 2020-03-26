const selectStyle = (selectedStyle) => ({
  type: `SELECT_STYLE`,
  payload: selectedStyle
});

const selectThumbnail = (thumbnailIndex) => ({
  type: `SELECT_THUMBNAIL`,
  payload: thumbnailIndex
});

export { selectStyle, selectThumbnail };
