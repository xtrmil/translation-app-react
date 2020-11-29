import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../../services/session/user.session';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const RegisterForm = () => {

    const [username, setUsername] = useState('');

    const onRegisterClicked = async ev => {
        if (username !== '') {
            register(username);
        }
    };

    const onUsernameChanged = ev => setUsername(ev.target.value.trim());

    return (
        <div id="register-container" className=" d-flex align-items-center">

            <Card className="mx-auto shadow-lg rounded" style={{ width: '18rem', height: '20rem' }}>
                <Card.Body>
                    <Card.Title>Login</Card.Title>
                    <form>
                        <Card.Text>
                            <input type="text" placeholder="Enter a username" onChange={onUsernameChanged} />
                        </Card.Text>
                    </form>
                    <div>
                        <Link to="/translation">
                            <Button variant="outline-info" className="mt-2" type="button" onClick={onRegisterClicked}>Login</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
export default RegisterForm;