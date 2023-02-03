import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import '../../Firebase';

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	useEffect(() => {
		const auth = getAuth();
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const [loading, setLoading] = useState(true);
	const [currentUser, setCurrentUser] = useState();

	//=> Signup:
	async function signup(email, password, username) {
		const auth = getAuth();

		//=> Create Profile:
		await createUserWithEmailAndPassword(auth, email, password);

		//=> Update Profile:
		await updateProfile(auth.currentUser, {
			displayName: username,
		});

		//=> Update Local State:
		const user = auth.currentUser;
		setCurrentUser({
			...user,
		});
	}

	//=> Login:
	function login(email, password) {
		const auth = getAuth();

		//=> Create Login:
		return signInWithEmailAndPassword(auth, email, password);
	}

	//=> Logout:
	function logout() {
		const auth = getAuth();

		//=> Create Logout:
		return signOut(auth);
	}

	const value = {
		currentUser,
		signup,
		login,
		logout,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
