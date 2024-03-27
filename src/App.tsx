import { APIProvider } from '@vis.gl/react-google-maps'
import { MyMap } from './components/map'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/firebase'
import { initializeUser } from './context/lib'

export const App = () => {
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, initializeUser)
		return unsubscribe
	}, [])

	return (
		<APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
			<MyMap />
		</APIProvider>
	)
}
