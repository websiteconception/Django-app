import { MapState } from "types/reducers"

const initialState: MapState = {
  center: {
    lat: 19.390734,
    lng: -99.143613,
  },
  zoom: 11,
}

const map = (
  state : MapState = initialState,
  action) : MapState => {
  switch (action.type) {
    default:
      return state
  }
}

export default map