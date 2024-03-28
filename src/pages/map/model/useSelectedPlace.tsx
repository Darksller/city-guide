import { useState } from 'react'

export const useSelectedPlace = () => {
	const [selectedPlace, setSelectedPlace] =
		useState<google.maps.places.PlaceResult | null>(null)

	const handleMarkerClick = (place: google.maps.places.PlaceResult) => {
		setSelectedPlace(place)
	}

	const handleInfoWindowClose = () => {
		setSelectedPlace(null)
	}

	return { selectedPlace, handleMarkerClick, handleInfoWindowClose }
}
