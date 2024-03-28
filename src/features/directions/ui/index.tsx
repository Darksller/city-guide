import TurnRightIcon from '@mui/icons-material/TurnRight'
import { MapControl, useMap, useMapsLibrary } from '@vis.gl/react-google-maps'
import { useState, useEffect } from 'react'
import { StyledIconButton } from '../../../shared/ui/iconButton'
import { StyledInfoDiv } from '../../../pages/map/ui/styles'

type DirectionsProps = {
	position: {
		lat: number | undefined
		lng: number | undefined
	}
}

export const Directions = ({ position }: DirectionsProps) => {
	const map = useMap()
	const routesLibrary = useMapsLibrary('routes')
	const [directionsService, setDirectionsService] =
		useState<google.maps.DirectionsService>()
	const [directionsRenderer, setDirectionsRenderer] =
		useState<google.maps.DirectionsRenderer>()

	useEffect(() => {
		if (!routesLibrary || !map) return
		setDirectionsService(new routesLibrary.DirectionsService())
		setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }))
	}, [routesLibrary, map])

	const onClick = () => {
		if (!directionsService || !directionsRenderer) return

		directionsService
			.route({
				origin: '100 Front St, Toronto ON',
				destination: '500 College St, Toronto ON',
				travelMode: google.maps.TravelMode.WALKING,
			})
			.then(response => {
				directionsRenderer.setDirections(response)
				console.log(response)
			})

		return () => directionsRenderer.setMap(null)
	}

	return (
		<>
			<MapControl position={google.maps.ControlPosition.RIGHT_BOTTOM}>
				<StyledIconButton
					style={{ marginRight: '10px', marginBottom: '10px' }}
					onClick={onClick}
				>
					<TurnRightIcon />
				</StyledIconButton>
			</MapControl>
			<MapControl position={google.maps.ControlPosition.LEFT_BOTTOM}>
				<StyledInfoDiv>hui</StyledInfoDiv>
			</MapControl>
		</>
	)
}
