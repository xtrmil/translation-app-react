import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        <h1>Page not Found</h1>

        <Link to="/"> Go back home</Link>
    </div>
);

export default NotFound;