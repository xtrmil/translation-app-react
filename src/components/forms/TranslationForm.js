import React from 'react';
// import { translate } from '../../canvas/canvas.builder';
import Canvas from '../../canvas/canvas.builder';

const TranslationForm = props => {

    // const [input, setInput] = useState('');

    // const onTranslationClicked = () => {
    //      translate(input);
        
    // }

    // const onInputChanged = ev => setInput(ev.target.value.trim());

    return (
        // <form>
        //     <div>
        //         <label> The letters to translate: </label>
        //         <input type="text" placeholder="Enter letters" onChange={onInputChanged} />
        //     </div>


        //     <div>
        //         <button type="button" onClick={onTranslationClicked}>Translate</button>
        //     </div>
        //     <Canvas/>
        // </form>
        <div>
            <Canvas/>
        </div>
        
    );
}

export default TranslationForm;