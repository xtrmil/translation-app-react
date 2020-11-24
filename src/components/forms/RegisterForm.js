import React, { useState } from 'react';
import {register} from '../../session/user.session';
const RegisterForm = props => {
// eslint-disable-next-line
    const [username, setUsername] = useState('');
    const [input, setInput] = useState('');


    const onRegisterClicked = async ev => {

        register(username);
    };



    const onUsernameChanged = ev => setUsername(ev.target.value.trim());
// eslint-disable-next-line
    const onInput = ev => setInput(ev.target.value.trim());

    return (
        <form>
            <div>
                <label> Username:</label>
                <input type="text" placeholder="Enter a username" onChange={onUsernameChanged} />
            </div>


            <div>
                <button type="button" onClick={onRegisterClicked}>Register</button>
            </div>

        </form>

    );
}

export default RegisterForm;