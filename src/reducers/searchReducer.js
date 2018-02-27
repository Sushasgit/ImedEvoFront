import * as constants from '../constants/constants'

const INIT_STATE = {
  clinics: [],
  doctors: [],
  diagnostics:[],
  laboratories:[],
  discount:[]
}

export default function searchReducer  (state = INIT_STATE, action)  {
  switch(action.type) {
    case constants.USER_SEARCH:
      return action.payload;
    default:
      return state
  }
}