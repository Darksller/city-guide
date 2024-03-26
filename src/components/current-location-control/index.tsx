import { MapControl, useMap } from '@vis.gl/react-google-maps'
import { CurrentLocationButton } from './styles'
import { useEffect, useState } from 'react'
import { getCurrentLocation } from './lib'
import { NearMe, NearMeDisabled } from '@mui/icons-material'

export const CurrentLocationControl = () => {
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
			<CurrentLocationButton onClick={onGetCurrentLocation}>
				{isAllowed ? <NearMe /> : <NearMeDisabled />}
			</CurrentLocationButton>
		</MapControl>
	)
}
