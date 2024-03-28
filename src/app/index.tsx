import { APIProvider } from '@vis.gl/react-google-maps'
import { MyMap } from '../pages/map'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../shared/config/firebase'
import { initializeUser } from '../shared/context/lib'
import { Global } from './styles'

export const App = () => {
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, initializeUser)
		return unsubscribe
	}, [])

	return (
		<APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
			<Global />
			<MyMap />
		</APIProvider>
	)
}
