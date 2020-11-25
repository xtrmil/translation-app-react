import React, { Component, } from 'react';
import signSheet from '../../src/sign-spritesheet-1200.png';
import { translate } from './inputconverter';
import { initiateSignsMap } from './inputconverter';
import { addToHistory } from '../history/translation.history';

export default class CanvasCreator extends Component {

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.state = {
            canvasWidth: null,
            input: null,
            signCoordinates: initiateSignsMap()
        }
    }

    onTranslationClicked() {

        this.updateCanvas(translate(this.state.signCoordinates, this.state.input));
        addToHistory(this.state.input);
    }

    handleChange(e) {
        this.setState({ input: e.target.value.trim().toLowerCase() });
    }

    updateCanvas(signs) {
        this.setState({ canvasWidth: (signs.length * 150) });
        const ctx = this.canvasRef.current.getContext('2d');
        let imageObj1 = new Image();
        imageObj1.src = signSheet
        imageObj1.onload = function () {

            let i;
            let targetPositionY = 0;

            for (i = 0; i < signs.length; i++) {

                ctx.drawImage(imageObj1, signs[i][0], signs[i][1], 150, 150, targetPositionY, 0, 150, 150);
                targetPositionY += 150;
            }
        }
    }
    render() {
        return (
            <div>
                <canvas ref={this.canvasRef} width={this.state.canvasWidth} height={150}> </canvas>
                <form>
                    <div>
                        <label> The letters to translate: </label>
                        <input type="text" placeholder="Enter letters" onChange={(e) => { this.handleChange(e) }} />
                    </div>

                    <div>
                        <button type="button" onClick={this.onTranslationClicked.bind(this)}>Translate</button>
                    </div>
                </form>
            </div>
        );
    }
};


