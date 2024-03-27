import { User } from 'firebase/auth'
import { create } from 'zustand'

type AuthState = {
	user: User | null
	isLoggedIn: boolean
	loading: boolean
}
type AuthAction = {
	setUser: (user: AuthState['user']) => void
	setIsLoggedIn: (isLoggedIn: AuthState['isLoggedIn']) => void
	setLoading: (loading: AuthState['loading']) => void
}

export const useAuth = create<AuthState & AuthAction>(set => ({
	user: null,
	isLoggedIn: false,
	loading: true,
	setUser: user => set({ user }),
	setIsLoggedIn: isLoggedIn => set({ isLoggedIn }),
	setLoading: loading => set({ loading }),
}))
