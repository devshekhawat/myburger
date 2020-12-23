import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

const Login = (props) => {
    const { authService } = useOktaAuth();
    const oktaLogin = () => authService.login('/private');

    return (
        <div>
            <h3>This is Login Page</h3>
            <button onClick={oktaLogin}>Okta</button>
            <button onClick={props.login}>Azure</button>
        </div>
    );
}

export default Login;