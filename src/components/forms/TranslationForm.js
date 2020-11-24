import React, { useState } from 'react';
import { updateCanvas } from '../../canvas/canvas.builder';

const TranslationForm = props => {

    const [input, setInput] = useState('');

    const onTranslationClicked = () => {
        updateCanvas(input);
    }

    const onInputChanged = ev => setInput(ev.target.value.trim());

    return (
        <form>
            <div>
                <label> The letters to translate: </label>
                <input type="text" placeholder="Enter letters" onChange={onInputChanged} />
            </div>


            <div>
                <button type="button" onClick={onTranslationClicked}>Translate</button>
            </div>

        </form>
    );
}

export default TranslationForm;