import React from 'react';
import { Link } from 'react-router-dom';
import CanvasComponent from '../../canvas/CanvasComponent';
import { convertToCoordinates } from '../../canvas/inputconverter';
import { initiateSignsMap } from '../../canvas/inputconverter';
import {addToHistory} from '../../history/translation.history';

export default class TranslationForm extends React.Component {
    onchangeInput;
    state = {
        output: ''
    }
    
    handleChange(e) {
        this.onchangeInput = e.target.value.trim().toLowerCase();
    }

    onTranslationClicked() {
        this.setState({ output: this.onchangeInput});
        addToHistory(this.onchangeInput);
        
    }
    render() {
        return (
            <div>
                <Link to="/history">
                <button>Go to history</button>
                </Link>
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
                
               
                <CanvasComponent input={convertToCoordinates(initiateSignsMap(), this.state.output)} />
            </div>

        );
    }
}




