import { auth } from '../../shared/config/firebase'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth'

export const doCreateUserWithEmailAndPassword = async (
	email: string,
	password: string
) => {
	return createUserWithEmailAndPassword(auth, email, password)
}

export const doSignInWithEmailAndPassword = (
	email: string,
	password: string
) => {
	return signInWithEmailAndPassword(auth, email, password)
}

export const doSignOut = () => {
	return auth.signOut()
}
