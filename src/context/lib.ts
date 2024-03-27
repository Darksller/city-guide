import { useAuth } from './auth'
import { User } from 'firebase/auth'

export const initializeUser = (user: User | null) => {
	const authStore = useAuth.getState()
	console.log(user)
	if (user) {
		authStore.setUser({ ...user })
		authStore.setIsLoggedIn(true)
	} else {
		authStore.setUser(null)
		authStore.setIsLoggedIn(false)
	}
	authStore.setLoading(false)
}
