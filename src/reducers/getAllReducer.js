const GET_ALL_DOCTORS = 'GET_ALL_DOCTORS';
const GET_ALL_DOCTORS_REQUEST = 'GET_ALL_DOCTORS_REQUEST';
const FILTER_DOCTORS_NAME = 'FILTER_DOCTORS_NAME';
const FILTER_DOCTORS_RATING = 'FILTER_DOCTORS_RATING';
const FILTER_DOCTORS_PEDIATRICIAN = 'FILTER_DOCTORS_PEDIATRICIAN';
const FILTER_DOCTORS_PRICE = 'FILTER_DOCTORS_PRICE';
const FILTER_DOCTORS_EXPERIENCE = 'FILTER_DOCTORS_EXPERIENCE';
const GET_ALL_CLINICS = 'GET_ALL_CLINICS';
const GET_ALL_CLINICS_REQUEST = 'GET_ALL_CLINICS_REQUEST';
const FILTER_CLINIC_NAME = 'FILTER_CLINIC_NAME';
const FILTER_CLINIC_RATING = 'FILTER_CLINIC_RATING';
const GET_ALL_LABORATORIES = 'GET_ALL_LABORATORIES'
const GET_ALL_LABORATORIES_REQUEST = 'GET_ALL_LABORATORIES_REQUEST'
const GET_ALL_DIAGNOSTIC = 'GET_ALL_DIAGNOSTIC'
const GET_ALL_DIAGNOSTIC_REQUEST = 'GET_ALL_DIAGNOSTIC_REQUEST'
const GET_ALL_DISCOUNTS = 'GET_ALL_DISCOUNTS'
const GET_ALL_DISCOUNTS_REQUEST = 'GET_ALL_DISCOUNTS_REQUEST'

const INIT_STATE = {
  clinics: [],
  doctors: [],
  diagnostics:[],
  laboratories:[],
  discounts:[],
  isLoading: false
}

export default function getAllReducer  (state = INIT_STATE, action)  {
  switch(action.type) {
    case GET_ALL_DOCTORS:
      return {doctors:action.payload, isLoading: false};

    case GET_ALL_CLINICS:
      return {clinics:action.payload, isLoading: false};

    case GET_ALL_CLINICS_REQUEST:
      return {isLoading: true};

    case GET_ALL_DOCTORS_REQUEST:
      return {isLoading: true};

    case GET_ALL_DISCOUNTS_REQUEST:
      return {isLoading: true};

    case GET_ALL_DISCOUNTS:
      return {discounts:action.payload, isLoading: false};

    case GET_ALL_LABORATORIES:
      return {laboratories:action.payload, isLoading: false};

    case GET_ALL_LABORATORIES_REQUEST:
      return {isLoading: true};

    case GET_ALL_DIAGNOSTIC:
      return {diagnostics:action.payload, isLoading: false};

    case GET_ALL_DIAGNOSTIC_REQUEST:
      return {isLoading: true};

    case FILTER_DOCTORS_NAME:
      return {...state,doctors:action.payload, isLoading: false};

    case FILTER_CLINIC_NAME:
      return {...state,clinics:action.payload, isLoading: false};

    case FILTER_CLINIC_RATING:
      return {...state,clinics:action.payload, isLoading: false};

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
