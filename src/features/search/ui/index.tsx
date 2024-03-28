import { MapControl } from '@vis.gl/react-google-maps'
import {
	StyledPlacesInput,
	StyledPlacesSearchButton,
	StyledRadiusSlider,
} from './styles'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import { valueTextFormat } from '../lib'
import { useMapStore } from '../../../context/map'
import { usePlacesService } from '../model/usePlacesService'

type PlacesSearchProps = {
	setPlaces: (places: google.maps.places.PlaceResult[]) => void
}

export const PlacesSearch = ({ setPlaces }: PlacesSearchProps) => {
	const [radius, setRadius] = useState<number | number[]>(5000)
	const [text, setText] = useState('')
	const placesService = usePlacesService()
	const { myLocation } = useMapStore()

	const onTextChanged = (event: React.FormEvent<HTMLInputElement>) => {
		setText(event.currentTarget.value)
	}
	const onRadiusChange = (_: Event, value: number | number[]) => {
		setRadius(value)
	}
	const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') onSearch()
	}

	const fetchNearbyPlaces = async () => {
		const request: google.maps.places.PlaceSearchRequest = {
			location: myLocation,
			radius: radius as number,
			keyword: text || undefined,
		}

		try {
			const results = await new Promise<google.maps.places.PlaceResult[]>(
				(resolve, reject) => {
					placesService?.nearbySearch(request, (results, status) => {
						if (status === google.maps.places.PlacesServiceStatus.OK) {
							resolve(results)
						} else {
							reject(new Error(`Places service failed: ${status}`))
						}
					})
				}
			)

			setPlaces(results)
		} catch (error) {
			console.error('Error fetching nearby places:', error)
		}
	}

	const onSearch = async () => {
		await fetchNearbyPlaces()
	}

	return (
		<MapControl position={google.maps.ControlPosition.LEFT_TOP}>
			<div style={{ position: 'relative' }}>
				<StyledPlacesInput
					placeholder='Search...'
					value={text}
					onChange={onTextChanged}
					onKeyDown={onKeyDown}
				/>
				<StyledPlacesSearchButton onClick={onSearch}>
					<SearchIcon />
				</StyledPlacesSearchButton>
			</div>
			<StyledRadiusSlider
				step={250}
				min={1000}
				valueLabelFormat={valueTextFormat}
				value={radius}
				valueLabelDisplay='auto'
				max={10000}
				onChange={onRadiusChange}
			/>
		</MapControl>
	)
}
