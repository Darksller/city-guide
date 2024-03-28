import { Map, Marker, InfoWindow } from '@vis.gl/react-google-maps'
import { CurrentLocationButton } from '../../../features/current-location/ui'
import { LoginButton } from '../../../features/auth/ui/login-button'
import { PlacesSearch } from '../../../features/search/ui'
import { useState } from 'react'
import { Directions } from '../../../features/directions/ui'
import { StyledInfoDiv } from './styles'
import { useSelectedPlace } from '../model/useSelectedPlace'

export const MyMap = () => {
	const [places, setPlaces] = useState<google.maps.places.PlaceResult[]>([])
	const { selectedPlace, handleMarkerClick, handleInfoWindowClose } =
		useSelectedPlace()

	return (
		<Map
			style={{ height: '100dvh' }}
			defaultCenter={{ lat: 53.89165007400056, lng: 27.579490864852595 }}
			defaultZoom={13}
			gestureHandling={'greedy'}
			disableDefaultUI={true}
		>
			<PlacesSearch setPlaces={setPlaces} />
			<LoginButton />
			<CurrentLocationButton />
			<Directions
				position={{
					lat: selectedPlace?.geometry?.location?.lat(),
					lng: selectedPlace?.geometry?.location?.lng(),
				}}
			/>

			{places.map(place => (
				<Marker
					key={place.place_id}
					position={place.geometry?.location}
					title={place.formatted_address}
					icon={{
						scaledSize: new google.maps.Size(40, 40),
						url: place.icon || '',
					}}
					onClick={() => handleMarkerClick(place)}
				/>
			))}

			{selectedPlace && (
				<InfoWindow
					position={selectedPlace.geometry?.location}
					onCloseClick={handleInfoWindowClose}
				>
					<StyledInfoDiv>
						<h2>{selectedPlace.name}</h2>
						<div>
							{selectedPlace.rating} / 5 ({selectedPlace.user_ratings_total}
							reviews)
						</div>
						{selectedPlace.photos && selectedPlace.photos.length > 0 && (
							<img
								src={selectedPlace.photos[0].getUrl()}
								alt={selectedPlace.name}
								style={{ maxWidth: '260px' }}
							/>
						)}
						<div>{selectedPlace.vicinity}</div>
					</StyledInfoDiv>
				</InfoWindow>
			)}
		</Map>
	)
}
