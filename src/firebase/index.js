import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Firebase app configuration
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize firebase app
firebase.initializeApp(firebaseConfig)

// Get firebase auth instance
const auth = firebase.auth()

// Get firebase firestore instance
const db = firebase.firestore()

export { auth, db, firebase as default }
