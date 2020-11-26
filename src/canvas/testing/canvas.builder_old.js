import React from 'react';
import signSheet from '../../src/sign-spritesheet-1200.png';
import { convertToCoordinates } from './inputconverter';
import { initiateSignsMap } from './inputconverter';
import { addToHistory, getHistory } from '../history/translation.history';

export default class CanvasCreator extends React.Component {

    constructor(props) {
        super(props);
        this.translationRef = React.createRef();

        this.history0 = React.createRef();
        this.history1 = React.createRef();
        this.history2 = React.createRef();
        this.history3 = React.createRef();
        this.history4 = React.createRef();
        this.history5 = React.createRef();
        this.history6 = React.createRef();
        this.history7 = React.createRef();
        this.history8 = React.createRef();
        this.history9 = React.createRef();

        this.state = {
            canvasWidth: 1500,
            canvasHeight: 150,
            input: null,
            signCoordinates: initiateSignsMap(),
            showHistory: false,  
            canvasList: []
        }
    }

    onTranslationClicked() {
        const ref = this.translationRef.current.getContext('2d');
        this.updateCanvas(this.state.input,ref);
        this.updateCanvas(convertToCoordinates(this.state.signCoordinates, this.state.input), ref);
        addToHistory(this.state.input);
    }

    handleChange(e) {
        this.setState({ input: e.target.value.trim().toLowerCase() });
    }

    componentDidMount() {

                
        if (this.state.showHistory) {
            let history = getHistory();
            let nr = 0;
            history.forEach(word => {
                const hctx = this[`history${nr}`].current.getContext('2d');
                this.updateCanvas(convertToCoordinates(this.state.signCoordinates, word), hctx);
                nr++;
            });
        }
    }



    updateCanvas(signs, cref) {
        let targetSize = 100;
        console.log(signs);
        this.setState({ canvasWidth: (signs.length * targetSize) });
        this.setState({ canvasHeight: Math.ceil((signs.length / 10)) * targetSize });
        const ctx = cref;
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

    updateCanvasHeight(targetPositionX) {
        this.setState({ canvasHeight: targetPositionX });
    }
    render() {
        if (this.state.showHistory === false) {
            return (
                <div>

                    <form>
                        <div>
                            <label> The letters to translate (1 to 40 characters): </label>
                            {/* <input type="text" minLength="1" maxLength="40" pattern="^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$" required placeholder="Enter letters" onChange={(e) => { this.handleChange(e) }} /> */}
                            <input type="text" minLength="1" maxLength="40" pattern="" required placeholder="Enter letters" onChange={(e) => { this.handleChange(e) }} />
                        </div>

                        <div>
                            <button type="button" onClick={this.onTranslationClicked.bind(this)}>Translate</button>
                        </div>
                    </form>
                    <canvas ref={this.translationRef} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
                </div>
            );
        } else {
            return (
                
                <div>
                    <h1>HISTORY</h1>

                    <p>{getHistory()[0]}</p>
                    <canvas ref={this.history0} width={this.state.canvasWidth} height={this.state.canvasHeight}></canvas>
                    <p>{getHistory()[1]}</p>

                    <canvas ref={this.history1} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
                    <p>{getHistory()[2]}</p>
                    <canvas ref={this.history2} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
                    <p>{getHistory()[3]}</p>
                    <canvas ref={this.history3} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
                    <p>{getHistory()[4]}</p>
                    <canvas ref={this.history4} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
                    <p>{getHistory()[5]}</p>
                    <canvas ref={this.history5} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
                    <p>{getHistory()[6]}</p>
                    <canvas ref={this.history6} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
                    <p>{getHistory()[7]}</p>
                    <canvas ref={this.history7} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
                    <p>{getHistory()[8]}</p>
                    <canvas ref={this.history8} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
                    <p>{getHistory()[9]}</p>
                    <canvas ref={this.history9} width={this.state.canvasWidth} height={this.state.canvasHeight}> </canvas>
                </div>
            );
        }

    }
};


