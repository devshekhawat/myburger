import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import oktaLogo from '../../assets/images/okta.png'
import azureLogo from '../../assets/images/azure.jpg'

import classes from './login.css';

const Login = (props) => {
    const { authService } = useOktaAuth();
    const oktaLogin = () => authService.login('/private');

    return (
        <div>
            <h2>Login</h2>
            <p>Select your login provider:</p>
            <br />
            <div className={classes.loginProvider}>
                <span onClick={oktaLogin}>
                    <img src={oktaLogo} alt="Okta Login" className={classes.okta} />
                </span>
                <span onClick={props.login} >
                    <img src={azureLogo} alt="Azure Login" className={classes.azure} />
                </span>
            </div>
        </div>
    );
}

export default Login;