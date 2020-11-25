import React, { Component, } from 'react';
import signSheet from '../../src/sign-spritesheet-1200.png';
import { convertToCoordinates } from './inputconverter';
import { initiateSignsMap } from './inputconverter';
// eslint-disable-next-line 
import { addToHistory,getHistory } from '../history/translation.history';

export default class CanvasCreator extends Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.state = {
            canvasWidth: null,
            canvasHeight: 150,
            input: null,
            signCoordinates: initiateSignsMap(),
            showHistory: true
        }
    }

    onTranslationClicked() {

        this.updateCanvas(convertToCoordinates(this.state.signCoordinates, this.state.input));
        addToHistory(this.state.input);
    }

    handleChange(e) {
        this.setState({ input: e.target.value.trim().toLowerCase() });
    }

    componentDidMount(){
        if(this.state.showHistory){
          let history = getHistory();  

         
              this.updateCanvas(convertToCoordinates(this.state.signCoordinates, history[0]));
            //  this.updateCanvas(convertToCoordinates(this.state.signCoordinates, history[1]));
        
        }
    }

    updateCanvas(signs) {
        let targetSize = 100;
        this.setState({ canvasWidth: (signs.length * targetSize) });
        this.setState({canvasHeight : Math.ceil((signs.length/10)) * targetSize});
        const ctx = this.canvasRef.current.getContext('2d');
        let imageObj1 = new Image();
        imageObj1.src = signSheet
        imageObj1.onload = function () {

            let i;
            let targetPositionY = 0;
            let targetPositionX = 0;
            
            for (i = 0; i < signs.length; i++) {

                ctx.drawImage(imageObj1, signs[i][0], signs[i][1], 150, 150, targetPositionY, targetPositionX, targetSize, targetSize);
                targetPositionY += targetSize;
                if(targetPositionY>=1500){
                    targetPositionY = 0;
                    targetPositionX =  targetPositionX + targetSize;

                }
            }
        }
    }

    updateCanvasHeight(targetPositionX){
        this.setState({canvasHeight : targetPositionX});
    }
    render() {
        if(this.state.showHistory === false){
        return (
            <div>
                
                <form>
                    <div>
                        <label> The letters to translate (1 to 40 characters): </label>
                        <input type="text" minLength="1" maxLength="40" pattern="^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$" required placeholder="Enter letters" onChange={(e) => { this.handleChange(e) }} />
                    </div>

                    <div>
                        <button type="button" onClick={this.onTranslationClicked.bind(this)}>Translate</button>
                    </div>
                </form>
                <canvas ref={this.canvasRef} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
            </div>
        );
        }else{
            return (
            <div>
                <h1>HISTORY</h1>
                <p>word 1</p>
            <canvas ref={this.canvasRef1} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
            
            <canvas ref={this.canvasRef2} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
            <canvas ref={this.canvasRef3} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
            <canvas ref={this.canvasRef4} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
            <canvas ref={this.canvasRef5} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
            <canvas ref={this.canvasRef6} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
            <canvas ref={this.canvasRef7} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
            <canvas ref={this.canvasRef8} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
            <canvas ref={this.canvasRef9} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
            <canvas ref={this.canvasRef10} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
            </div>
            );
        }

    }
};


