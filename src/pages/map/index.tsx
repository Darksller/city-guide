import { Map, Marker } from '@vis.gl/react-google-maps'
import { CurrentLocationButton } from '../../features/current-location/ui'
import { LoginButton } from '../../features/auth/ui/login-button'
import { PlacesSearch } from '../../features/search/ui'
import { useState } from 'react'

export const MyMap = () => {
	const [places, setPlaces] = useState<google.maps.places.PlaceResult[]>([])

	return (
		<Map
			style={{ height: '100dvh' }}
			defaultCenter={{ lat: 53.89165007400056, lng: 27.579490864852595 }}
			defaultZoom={13}
			gestureHandling={'greedy'}
			disableDefaultUI={true}
		>
			<PlacesSearch setPlaces={setPlaces} />
			<CurrentLocationButton />
			<LoginButton />

			{places.map(place => (
				<Marker
					key={place.place_id}
					position={place.geometry?.location}
					title={place.formatted_address}
					icon={{
						scaledSize: new google.maps.Size(40, 40),
						url: place.icon || '',
					}}
				/>
			))}
		</Map>
	)
}
