import React from 'react'
import signSheet from '../sign-spritesheet-1200.png';

class CanvasComponent extends React.Component {
  constructor(props) {
    super(props);
    this.canvasWidth = 1000;
    this.targetSize = 100;
    this.translationRef = React.createRef();
  }

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {

    this.updateCanvas();
  }

  updateCanvas() {
    const signs = this.props.input;
    const canvas = document.getElementById("canvas");
    const ctx = this.translationRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let imageObj1 = new Image();
    imageObj1.src = signSheet
    imageObj1.onload = function () {

      let i;
      let targetPositionY = 0;
      let targetPositionX = 0;
      const targetSize = 100;
      const signsPerRow = 10;

      for (i = 0; i < signs.length; i++) {

        ctx.drawImage(imageObj1, signs[i][0], signs[i][1], 150, 150, targetPositionY, targetPositionX, targetSize, targetSize);
        targetPositionY += targetSize;
        if (targetPositionY >= targetSize * signsPerRow) {
          targetPositionY = 0;
          targetPositionX = targetPositionX + targetSize;

        }
      }
    }
  }

  render() {

    return (
      <div>
        <canvas id="canvas" ref={this.translationRef} width={this.canvasWidth} height={Math.ceil(this.props.input.length / 10) * this.targetSize}> </canvas>
      </div>
    )
  }
}

export default CanvasComponent