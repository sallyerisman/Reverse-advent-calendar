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

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			// Auth state change (loging in/out)
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
	}

	return (
		<AuthContext.Provider value={contextValues}>
			{props.children}
		</AuthContext.Provider>
	)
}

export { AuthContext, useAuth, AuthContextProvider as default }
