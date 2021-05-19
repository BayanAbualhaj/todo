import React, { useContext, useState } from 'react';
import { If, Else, Then } from 'react-if';
import { LoginContext } from './context';

const Login = () => {
	const loginContext = useContext(LoginContext);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	function handleChangeUsername(e) {
		setUsername(e.target.value);
	}

	function handleChangePassword(e) {
		setPassword(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		loginContext.login(username, password);
	}

	return (
		<If condition={loginContext.loggedIn}>
			<Then>
				<button onClick={loginContext.logout}>Log Out</button>
			</Then>
			<Else>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="username"
						placeholder="Enter Username"
						onChange={handleChangeUsername}
					/>
					<input
						type="password"
						name="password"
						placeholder="Enter password"
						onChange={handleChangePassword}
					/>
					<button>Login</button>
				</form>
			</Else>
		</If>
	);
};

export default Login;
