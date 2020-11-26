import React from 'react'
import signSheet from '../../../src/sign-spritesheet-1200.png';
import { convertToCoordinates } from '../inputconverter';
import { initiateSignsMap } from '../inputconverter';

class CanvasComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        canvasWidth: 1500,
        canvasHeight: 150,
        input: convertToCoordinates(this.props.input),
        signCoordinates: initiateSignsMap(), 
    }
        this.targetSize= 100;
        this.translationRef = React.createRef();
    }

    componentDidMount() {
 
        let signs = this.props.input;
        console.log(signs);

        let targetSize = 100;
  
        const ctx = this.translationRef.current.getContext('2d');
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
        console.log(this.props);
      return (
        <div>
            <canvas ref={this.translationRef} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
        </div>
      )
    }
}

export default CanvasComponent