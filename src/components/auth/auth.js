import React, { useContext } from 'react';
import { LoginContext } from './context';
import { If } from 'react-if';

const Auth = (props) => {
	const loginContext = useContext(LoginContext);
	let okToRender = false;
	try {
		okToRender =
			loginContext.loggedIn && props.capability
				? loginContext.user.capabilities.includes(props.capability)
				: false;
	} catch (error) {
		console.log('NOT AUTHORIZED', error.message);
	}
	return <If condition={okToRender}>{props.children}</If>;
};

export default Auth;