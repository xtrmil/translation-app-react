import React from 'react'
import signSheet from '../sign-spritesheet-1200.png';

class CanvasComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        canvasWidth: 1500,
        canvasHeight: 150,
        input: this.props.input
    }
        this.targetSize= 100;
        this.translationRef = React.createRef();
    }

    componentDidMount(){
      this.updateCanvas();
    }
    componentDidUpdate() {

      this.updateCanvas();
    }

    updateCanvas(){
      let c = document.getElementById("canvas");
      let ctxx = c.getContext("2d");
      ctxx.clearRect(0, 0, c.width, c.height);
      let signs = this.props.input;
      console.log(signs);
      let targetSize = 100;

      let ctx = this.translationRef.current.getContext('2d');
      ctx.clearRect(0, 0, ctx.width,ctx.height)
      let imageObj1 = new Image();
      imageObj1.src = signSheet
      imageObj1.onload = function () {

          let i;
          let targetPositionY = 0;
          let targetPositionX = 0;

          for (i = 0; i < signs.length; i++) {

              ctx.drawImage(imageObj1, signs[i][0], signs[i][1], 150, 150, targetPositionY, targetPositionX, targetSize, targetSize);
              targetPositionY += targetSize;
              if (targetPositionY >= 1500) {
                  targetPositionY = 0;
                  targetPositionX = targetPositionX + targetSize;

              }
          }
      }
    }

    render() {

      return (
        <div>
            <canvas id="canvas" ref={this.translationRef} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
        </div>
      )
    }
}

export default CanvasComponent