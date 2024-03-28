import { useMapStore } from '../../shared/context/map'

export const getCurrentLocation = async (
	map: google.maps.Map | null
): Promise<boolean> => {
	return new Promise(resolve => {
		navigator.geolocation.getCurrentPosition(
			async position => {
				map?.setZoom(14)
				const pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				}
				useMapStore.getState().setMyLocation(pos)
				map?.setCenter(pos)
				new google.maps.Marker({
					map,
					position: pos,
					title: 'You are here!',
				})
				resolve(true)
			},
			() => {
				resolve(false)
			}
		)
	})
}
