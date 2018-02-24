import * as constants from '../constants/constants'

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
    case constants.GET_ALL_DOCTORS:
      return {doctors:action.payload, isLoading: false};

    case constants.GET_ALL_CLINICS:
      return {clinics:action.payload, isLoading: false};

    case constants.GET_ALL_CLINICS_REQUEST:
      return {isLoading: true};

    case constants.GET_ALL_DOCTORS_REQUEST:
      return {isLoading: true};

    case constants.GET_ALL_DISCOUNTS_REQUEST:
      return {isLoading: true};

    case constants.GET_ALL_DISCOUNTS:
      return {discounts:action.payload, isLoading: false};

    case constants.GET_ALL_LABORATORIES:
      return {laboratories:action.payload, isLoading: false};

    case constants.GET_ALL_LABORATORIES_REQUEST:
      return {isLoading: true};

    case constants.GET_ALL_DIAGNOSTIC:
      return {diagnostics:action.payload, isLoading: false};

    case constants.GET_ALL_DIAGNOSTIC_REQUEST:
      return {isLoading: true};

    case constants.FILTER_DOCTORS_NAME:
      return {...state,doctors:action.payload, isLoading: false};

    case constants.FILTER_CLINIC_NAME:
      return {...state,clinics:action.payload, isLoading: false};

    case constants.FILTER_CLINIC_RATING:
      return {...state,clinics:action.payload, isLoading: false};

    case constants.FILTER_DOCTORS_RATING:
      return {...state,doctors:action.payload, isLoading: false};

    case constants.FILTER_DOCTORS_PEDIATRICIAN:
      return {...state,doctors:action.payload, isLoading: false};

    case constants.FILTER_DOCTORS_PRICE:
      return {...state,doctors:action.payload, isLoading: false};

    case constants.FILTER_DOCTORS_EXPERIENCE:
      return {...state,doctors:action.payload, isLoading: false};

    default:
      return state
  }
}
