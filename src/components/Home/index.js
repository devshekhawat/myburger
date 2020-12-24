import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => {
    return (
        <div>
            <h2>Home Page</h2>
            <Link to="/private">
                Click here to access a private page
            </Link>
        </div>
    )
}

export default Home;