import { create } from 'zustand'

type MapState = {
	myLocation: {
		lat: number
		lng: number
	}
}
type MapAction = {
	setMyLocation: (myLocation: MapState['myLocation']) => void
}

export const useMapStore = create<MapState & MapAction>(set => ({
	myLocation: { lat: 53.89165007400056, lng: 27.579490864852595 },
	setMyLocation: myLocation => set({ myLocation }),
}))
