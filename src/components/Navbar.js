import React from 'react';
import { getUser, logout } from '../services/session/user.session';
import {Link} from 'react-router-dom';


const Navbar = () => {
    
    const name = getUser();
    console.log(name);

    const onLogoutClicked = () =>{
        logout();
       
    }
    
    return (
    <div>
        <header>

                <p>Username: {name}</p>
                <Link to="/">
                <button onClick={onLogoutClicked}>Logout</button>
                </Link>

        </header>

    </div>

);
    }
export default Navbar;


