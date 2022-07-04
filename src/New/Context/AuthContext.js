import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [loginState, setLoginState] = useState(false);
	const [token, setToken] = useState(false);
	const [avatar, setAvatar] = useState('');

	useEffect(() => {
		if (localStorage.getItem('loginStatus')) {
			setLoginState(true);
		}
		if (localStorage.getItem('token')) {
			setToken(localStorage.getItem('token'));
		}
		if (localStorage.getItem('avatar')) {
			setAvatar(localStorage.getItem('avatar'));
		}
	}, []);

	const value = {
		loginState: loginState,
		token: token,
		avatar: avatar,
		setLoginState: (val) => {
			setLoginState(val);
			localStorage.setItem('loginStatus', true);
		},
		setToken: (val) => {
			setToken(val);
			localStorage.setItem('token', val);
		},
		setAvatar: (val) => {
			setAvatar(val);
			localStorage.setItem('avatar', val);
		},
	};

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	);
};

const AccessAuthContext = () => {
	return useContext(AuthContext);
};

export { AuthContext, AuthContextProvider, AccessAuthContext };
