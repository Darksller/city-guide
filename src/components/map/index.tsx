import { Map } from '@vis.gl/react-google-maps'
import { CurrentLocationButton } from '../current-location-button'
import { LoginButton } from '../../features/auth/ui/login-button'

export const MyMap = () => {
	return (
		<Map
			style={{ height: '100dvh' }}
			defaultCenter={{ lat: 22.54992, lng: 0 }}
			defaultZoom={3}
			gestureHandling={'greedy'}
			disableDefaultUI={true}
		>
			<CurrentLocationButton />
			<LoginButton />
		</Map>
	)
}
