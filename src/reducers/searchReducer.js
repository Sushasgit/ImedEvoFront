const USER_SEARCH = 'USER_SEARCH';
const INIT_STATE = {
  clinics: [],
  doctors: [],
  diagnostics:[],
  laboratories:[],
  discount:[]
}

export default function searchReducer  (state = INIT_STATE, action)  {
  switch(action.type) {
    case USER_SEARCH:
      return action.payload;
    default:
      return state
  }
}