import React, { useState } from 'react';
import {register} from '../../session/user.session';
const RegisterForm = props => {

    const [username, setUsername] = useState('');
    
    const onRegisterClicked = async ev => {

        register(username);
    };

    const onUsernameChanged = ev => setUsername(ev.target.value.trim());

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