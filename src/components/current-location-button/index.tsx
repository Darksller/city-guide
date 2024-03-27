import { MapControl, useMap } from '@vis.gl/react-google-maps'
import { StyledCurrentLocationButton } from './styles'
import { useEffect, useState } from 'react'
import { getCurrentLocation } from './lib'
import { NearMe, NearMeDisabled } from '@mui/icons-material'

export const CurrentLocationButton = () => {
	const [isAllowed, setIsAllowed] = useState(true)
	const map = useMap()
	useEffect(() => {
		if (!map) return
	}, [map])

	const onGetCurrentLocation = async () => {
		setIsAllowed(await getCurrentLocation(map))
	}

	return (
		<MapControl position={google.maps.ControlPosition.RIGHT_BOTTOM}>
			<StyledCurrentLocationButton onClick={onGetCurrentLocation}>
				{isAllowed ? <NearMe /> : <NearMeDisabled />}
			</StyledCurrentLocationButton>
		</MapControl>
	)
}
