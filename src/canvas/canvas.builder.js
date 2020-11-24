// import React, { useState } from 'react';
import React from 'react';
import signSheet from '../../src/sign-spritesheet-1200.png';

// const [signs, setSigns] = useState([[0, 0], [150, 0], [300, 0]]);
// eslint-disable-next-line
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

export const translate = (input) => {

    
    let letterCordinates = [];

    for (var i in input) {
        
        letterCordinates.push(getSigns(input.charAt(i)));
      }

    console.log(letterCordinates);
   // updateCanvas(letterCordinates);

}
   const getSigns = (letter) => {

    let signs = new Map();
   
    signs.set('a',[0,0]);
    signs.set('b',[150,0]);
    signs.set('c',[300,0]);
    signs.set('d',[450,0]);
    signs.set('e',[600,0]);
    signs.set('f',[750,0]);
    signs.set('g',[900,0]);
    signs.set('h',[1050,0]);
    signs.set('i',[0,150]);
    signs.set('j',[150,150]);
    signs.set('k',[300,150]);
    signs.set('l',[450,150]);
    signs.set('m',[600,150]);
    signs.set('n',[750,150]);
    signs.set('o',[900,150]);
    signs.set('p',[1050,150]);
    signs.set('q',[0,300]);
    signs.set('r',[150,300]);
    signs.set('s',[300,300]);
    signs.set('t',[450,300]);
    signs.set('u',[600,300]);
    signs.set('v',[750,300]);
    signs.set('w',[900,300]);
    signs.set('x',[1050,300]);
    signs.set('y',[0,450]);
    signs.set('z',[150,450]);
       return  signs.get(letter);
}

