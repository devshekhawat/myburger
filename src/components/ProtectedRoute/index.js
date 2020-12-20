import React from 'react';
import {Route, useHistory } from 'react-router-dom';

// import { isLoggedIn } from '../../helper/localStol/rage';

const isLoggedIn = localStorage.getItem('token');
const ProtectedRoute = (props) => {
	let history = useHistory();
	console.log("Here we are!!!", isLoggedIn);
	if(isLoggedIn) {
		return <Route {...props} />
	} else {
		history.push("/login")
	}
};

export default ProtectedRoute;