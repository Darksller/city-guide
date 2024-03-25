import { APIProvider, Map } from '@vis.gl/react-google-maps'
export const App = () => {
	return (
		<APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
			<Map
				style={{ height: '98vh' }}
				defaultCenter={{ lat: 22.54992, lng: 0 }}
				defaultZoom={3}
				gestureHandling={'greedy'}
			/>
		</APIProvider>
	)
}
