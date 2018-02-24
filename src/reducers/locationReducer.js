import * as constants from '../constants/constants'

const INIT_STATE = {
  coords: {
    latitude: 0,
    longitude: 0
  }
}

export default function locationReducer  (state = INIT_STATE, action)  {
  switch(action.type) {
    
    case constants.GET_LOCATION:
      return action.payload;

    default:
      return state
  }
}