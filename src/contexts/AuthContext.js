import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const AuthContext = createContext()

const useAuth = () => {
	return useContext(AuthContext)
}

const AuthContextProvider = (props) => {
	const [currentUser, setCurrentUser] = useState(null)
	const [loading, setLoading] = useState(true)

	const login = (email, password) => {
		return auth.signInWithEmailAndPassword(email, password)
	}

	const logout = () => {
		return auth.signOut()
	}

	const resetPassword = (email) => {
		return auth.sendPasswordResetEmail(email)
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			// Auth state change (logging in/out)
			setCurrentUser(user)
			setLoading(false)
		})

		return unsubscribe
	}, [])

	const contextValues = {
		currentUser,
		loading,
		login,
		logout,
		resetPassword,
	}

	return (
		<AuthContext.Provider value={contextValues}>
			{loading && "Loading..."}
			{!loading && props.children}
		</AuthContext.Provider>
	)
}

export { AuthContext, useAuth, AuthContextProvider as default }
