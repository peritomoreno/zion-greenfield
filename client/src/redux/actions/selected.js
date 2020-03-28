const setStyle = (selectedStyle) => ({
  type: `SET_STYLE`,
  payload: selectedStyle
});

const setThumbnail = (thumbnailIndex) => ({
  type: `SET_THUMBNAIL`,
  payload: thumbnailIndex
});

export { setStyle, setThumbnail };
