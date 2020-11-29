import React from 'react'
import signSheet from '../../sign-spritesheet-1200.png';

class CanvasComponent extends React.Component {
  constructor(props) {
    super(props);
    this.targetSize = 70;
    this.signsPerRow = 10;
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
    const canvas = this.translationRef.current; 
    if (!this.props.runOnMount) {                        // clearing canvas before rendering new, 
      ctx.clearRect(0, 0, canvas.width, canvas.height);  // only needed on TranslationPage
    }

    canvas.width = signsPerRow * targetSize;
    canvas.height = Math.ceil(inputSigns.length / 10) * targetSize;

    let imageObj1 = new Image();
    imageObj1.src = signSheet
    imageObj1.onload = function () {

      let i;
      let targetPositionY = 0;
      let targetPositionX = 0;

      for (i = 0; i < inputSigns.length; i++) {

        ctx.drawImage(imageObj1, inputSigns[i][0], inputSigns[i][1], 150, 150, targetPositionY, targetPositionX, targetSize, targetSize);
        targetPositionY += targetSize;    // changes Y position for next sprite
        if (targetPositionY >= targetSize * signsPerRow) {  // sets Y position and draws forthcoming sprites on a new row
          targetPositionY = 0;
          targetPositionX = targetPositionX + targetSize;

        }
      }
    }
  }

  render() {

    return (
      <div>
        <canvas ref={this.translationRef}> </canvas>
      </div>
    )
  }
}
export default CanvasComponent