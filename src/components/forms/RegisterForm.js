import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../../services/session/user.session';
const RegisterForm = () => {

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
                <Link to="/translation">
                    <button type="button" onClick={onRegisterClicked}>Register</button>
                </Link>
            </div>
        </form>
    );
}

export default RegisterForm;