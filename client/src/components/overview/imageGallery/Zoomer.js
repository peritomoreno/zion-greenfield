/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';

const ZoomPhoto = ({ photoUrl, hovered, parentRef, mouseX, mouseY }) => {
  // React.useEffect(() => {
  //   if (parentRef.current) {
  //     const { x, y, height, width } = parentRef.current.getBoundingClientRect();
  //     const xOffsetPct = (mouseX - x) / width;
  //     const yOffsetPct = (mouseY - y) / height;
  //     // console.log(x, y, height, width);
  //     console.log(xOffsetPct, yOffsetPct);
  //   }
  // });

  let xOffsetPct = 0;
  let yOffsetPct = 0;

  if (parentRef.current) {
    const { x, y, height, width } = parentRef.current.getBoundingClientRect();
    xOffsetPct = (mouseX - x) / width;
    yOffsetPct = (mouseY - y) / height;
    console.log(xOffsetPct, yOffsetPct);
  }

  return (
    <div
      className="zoomPhoto"
      style={{
        backgroundImage: `url(${photoUrl})`,
        transform: `scale(${hovered ? 2.4 : 1})`,
        transformOrigin: `${
          hovered ? `${xOffsetPct * 100}% ${yOffsetPct * 100}%` : 'center'
          // 'center'
        }`
      }}
      onMouseClick={() => {
        console.log('click!');
        console.log(parentRef.current.getBoundingClientRect());
      }}
    />
  );
};

class Zoomer extends React.Component {
  static defaultProps = {
    photoUrl:
      'https://images.unsplash.com/photo-1551489186-cf8726f514f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
  };

  constructor(props) {
    super(props);
    this.state = { hovered: false, mouseX: 0, mouseY: 0 };
    this.myRef = React.createRef();
    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
  }

  mouseOverHandler() {
    console.log('hovered');
    this.setState({
      hovered: true
    });
  }

  mouseOutHandler() {
    console.log('out');
    this.setState({ hovered: false });
  }

  mouseMoveHandler(e) {
    // console.log(e.clientX, e.clientY);
    this.setState({ mouseX: e.clientX, mouseY: e.clientY });
  }

  render() {
    return (
      <div
        className="zoom"
        onMouseOver={this.mouseOverHandler}
        onMouseOut={this.mouseOutHandler}
        onMouseMove={this.mouseMoveHandler}
        ref={this.myRef}
      >
        <ZoomPhoto
          photoUrl={this.props.photoUrl}
          hovered={this.state.hovered}
          parentRef={this.myRef}
          mouseX={this.state.mouseX}
          mouseY={this.state.mouseY}
        />
      </div>
    );
  }
}

export default Zoomer;
