import React from 'react';
import { getUser, logout } from '../services/session/user.session';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';


const NavbarComponent = () => {

    const name = getUser();

    const onLogoutClicked = () => {
        logout();
    }

    return (
        <div>
            <header>
                <Navbar bg="dark" variant="dark" className="justify-content-end p-4">
                    <Link to="/">
                        <Button className="mr-2" variant="outline-info" onClick={onLogoutClicked}>Logout</Button>
                    </Link>
                    <Navbar.Text> Signed in as: {name} </Navbar.Text>
                </Navbar>
            </header>
        </div>
    );
}
export default NavbarComponent;


