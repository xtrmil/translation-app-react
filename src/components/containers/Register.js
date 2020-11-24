import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../forms/RegisterForm';

const Register = () => {

    const history = useHistory();


    const handleRegisterComplete= (result) => {
        console.log('Triggered from RegisterForm', result)
        if(result) {
            history.replace("/dashboard");
        }
    }
    return (
        <div>
            <h1>Register for Translation App</h1>
            <RegisterForm complete={ handleRegisterComplete } />

        </div>
    );
};

export default Register;