import React, { useState } from 'react';
import signSheet from '../../public/sign-spritesheet-1200.png';

// const [signs, setSigns] = useState([[0, 0], [150, 0], [300, 0]]);
const updateCanvas = (signs) => {
    const canvasRef = React.createRef();

    const ctx = canvasRef.current.getContext('2d');
    const canvasWidth = signs.length * 150;

    let imageObj1 = new Image();
    imageObj1.src = signSheet
    imageObj1.onload = function () {

        let i;
        let targetPosition = 0;

        for (i = 0; i < signs.length; i++) {

            ctx.drawImage(imageObj1, signs[i][0], signs[i][1], 150, 150, targetPosition, 0, 150, 150);
            // objekt     source X    source Y   sHeight/width targetx,target y  
            targetPosition += 150;
        }
    }
    return (
        <canvas ref={this.canvasRef} width={canvasWidth} height={150}> </canvas>
    );
}

const translate = (input) => {
    // convert input to x,y cordinates for spreadsheet
    //  signs [a[0,0],b[150,0]...]
    // updateCanvas(signs);


}