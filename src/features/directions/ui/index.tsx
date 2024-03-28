import TurnRightIcon from '@mui/icons-material/TurnRight'
import { MapControl } from '@vis.gl/react-google-maps'
import { Close } from '@mui/icons-material'
import { StyledIconButton } from '../../../shared/ui/iconButton'
import { StyledCard, StyledHeadDiv } from './styles'
import { useDirections } from '../model/useDirections'

type DirectionsProps = {
	position: {
		lat: number | undefined
		lng: number | undefined
	}
}
export const Directions = ({ position }: DirectionsProps) => {
	const { route, getDirections, clearDirections } = useDirections(position)

	return (
		<>
			<MapControl position={google.maps.ControlPosition.RIGHT_BOTTOM}>
				<StyledIconButton
					style={{ marginRight: '10px', marginBottom: '10px' }}
					onClick={getDirections}
				>
					<TurnRightIcon />
				</StyledIconButton>
			</MapControl>
			{route && (
				<MapControl position={google.maps.ControlPosition.LEFT_BOTTOM}>
					<StyledCard>
						<StyledHeadDiv>
							<div>Information</div>
							<Close
								style={{ alignSelf: 'end', cursor: 'pointer' }}
								onClick={clearDirections}
							/>
						</StyledHeadDiv>
						<div>Distance: {route.distance?.text}</div>
						<div>Duration: {route.duration?.text}</div>
					</StyledCard>
				</MapControl>
			)}
		</>
	)
}
