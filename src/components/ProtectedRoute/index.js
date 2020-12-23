import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';

import { useOktaAuth } from '@okta/okta-react';

const ProtectedRoute = (props) => {
	let history = useHistory();
	const { authState } = useOktaAuth();


	if (authState.isAuthenticated) {
		return <Route {...props} />
	} else {
		history.push("/login");
	}
	return <div />;
};

export default ProtectedRoute;