import { APIProvider, Map } from '@vis.gl/react-google-maps'
import { CurrentLocationControl } from './components/current-location-control'
export const App = () => {
	return (
		<APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
			<Map
				style={{ height: '100dvh' }}
				defaultCenter={{ lat: 22.54992, lng: 0 }}
				defaultZoom={3}
				gestureHandling={'greedy'}
			>
				<CurrentLocationControl />
			</Map>
		</APIProvider>
	)
}
