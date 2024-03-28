import { useState, useEffect } from 'react'
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps'
import { useMapStore } from '../../../shared/context/map'

type UseDirectionsProps = {
	lat: number | undefined
	lng: number | undefined
}

export const useDirections = (position: UseDirectionsProps) => {
	const { myLocation } = useMapStore()
	const map = useMap()
	const routesLibrary = useMapsLibrary('routes')
	const [directionsService, setDirectionsService] =
		useState<google.maps.DirectionsService>()
	const [directionsRenderer, setDirectionsRenderer] =
		useState<google.maps.DirectionsRenderer>()
	const [route, setRoute] = useState<google.maps.DirectionsLeg | null>(null)

	useEffect(() => {
		if (!routesLibrary || !map) return
		setDirectionsService(new routesLibrary.DirectionsService())
		setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }))
	}, [routesLibrary, map])

	const getDirections = () => {
		if (!directionsService || !directionsRenderer) return

		const destination: google.maps.LatLngLiteral | undefined =
			position.lat !== undefined && position.lng !== undefined
				? { lat: position.lat, lng: position.lng }
				: undefined

		if (!destination) return

		directionsService
			.route({
				origin: myLocation,
				destination,
				travelMode: google.maps.TravelMode.WALKING,
			})
			.then(response => {
				directionsRenderer.setDirections(response)
				setRoute(response.routes[0].legs[0])
			})
	}

	const clearDirections = () => {
		directionsRenderer?.setRouteIndex(-1)
		setRoute(null)
	}

	return { route, getDirections, clearDirections }
}
