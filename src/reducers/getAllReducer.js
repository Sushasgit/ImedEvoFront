const GET_ALL_DOCTORS = 'GET_ALL_DOCTORS';
const GET_ALL_DOCTORS_REQUEST = 'GET_ALL_DOCTORS_REQUEST';
const FILTER_DOCTORS_NAME = 'FILTER_DOCTORS_NAME';
const FILTER_DOCTORS_RATING = 'FILTER_DOCTORS_RATING';
const FILTER_DOCTORS_PEDIATRICIAN = 'FILTER_DOCTORS_PEDIATRICIAN';
const FILTER_DOCTORS_PRICE = 'FILTER_DOCTORS_PRICE';
const FILTER_DOCTORS_EXPERIENCE = 'FILTER_DOCTORS_EXPERIENCE';

const INIT_STATE = {
  clinics: [],
  doctors: [],
  diagnostics:[],
  laboratories:[],
  discount:[],
  isLoading: false
}

export default function getAllReducer  (state = INIT_STATE, action)  {
  switch(action.type) {
    case GET_ALL_DOCTORS:
      return {...state,doctors:action.payload, isLoading: false};
    case GET_ALL_DOCTORS_REQUEST:
      return {isLoading: true};
    case FILTER_DOCTORS_NAME:
      return {...state,doctors:action.payload, isLoading: false};
    case FILTER_DOCTORS_RATING:
      return {...state,doctors:action.payload, isLoading: false};
    case FILTER_DOCTORS_PEDIATRICIAN:
      return {...state,doctors:action.payload, isLoading: false};
    case FILTER_DOCTORS_PRICE:
      return {...state,doctors:action.payload, isLoading: false};
    case FILTER_DOCTORS_EXPERIENCE:
      return {...state,doctors:action.payload, isLoading: false};
    default:
      return state
  }
}