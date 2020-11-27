import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import RegisterForm from '../forms/RegisterForm';
import { getUser } from "../../services/session/user.session";

const Register = () => {

    const history = useHistory();


    const handleRegisterComplete = (result) => {
        console.log('Triggered from RegisterForm', result)
        if (result) {
            history.replace("/dashboard");
        }
    }


    if (getUser() != null) {
        return <Redirect to="/translation" />;
    }

    return (
                <RegisterForm complete={handleRegisterComplete} />   
    );

};

export default Register;