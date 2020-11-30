import React from 'react';
import RegisterForm from '../forms/RegisterForm';
import { useHistory, Redirect } from 'react-router-dom';
import { getUser } from "../../services/session/user.session";

const Register = () => {

    const history = useHistory();
    const handleRegisterComplete = (result) => {
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