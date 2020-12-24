import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import { useOktaAuth } from '@okta/okta-react';

// ===================
// Not using it now, instead using Entry to determine access
// ===================

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