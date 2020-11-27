import React from 'react'
import signSheet from '../../sign-spritesheet-1200.png';

class CanvasComponent extends React.Component {
  constructor(props) {
    super(props);
    this.targetSize = 70;
    this.signsPerRow = 10;
    this.canvasWidth = this.signsPerRow * this.targetSize;
    this.translationRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.runOnMount) {   // for when loading History
      this.updateCanvas(this.targetSize, this.signsPerRow, this.props.input);
    }
  }

  componentDidUpdate() {
    if (!this.props.runOnMount) {  // for when using Translation
      this.updateCanvas(this.targetSize, this.signsPerRow, this.props.input);
    }
  }

  updateCanvas(targetSize, signsPerRow, inputSigns) {
    
    const ctx = this.translationRef.current.getContext('2d');
    if (!this.props.runOnMount) {                        // clearing canvas before rendering new,
      const canvas = this.translationRef.current;        // only needed on TranslationPage
      ctx.clearRect(0, 0, canvas.width, canvas.height);  //
    }

    let imageObj1 = new Image();
    imageObj1.src = signSheet
    imageObj1.onload = function () {

      let i;
      let targetPositionY = 0;
      let targetPositionX = 0;

      for (i = 0; i < inputSigns.length; i++) {

        ctx.drawImage(imageObj1, inputSigns[i][0], inputSigns[i][1], 150, 150, targetPositionY, targetPositionX, targetSize, targetSize);
        targetPositionY += targetSize;  // changes Y position for next sprite
        if (targetPositionY >= targetSize * signsPerRow) {  // sets Y position and draw forthcoming sprites on a new row
          targetPositionY = 0;
          targetPositionX = targetPositionX + targetSize;

        }
      }
    }
  }

  render() {

    return (
      <div>
        <canvas ref={this.translationRef} width={this.canvasWidth} height={Math.ceil(this.props.input.length / 10) * this.targetSize}> </canvas>
      </div>
    )
  }
}

export default CanvasComponent