import axios from 'axios'
import * as constants from '../constants/constants'

export function getAllClinics () {
  return function (dispatch) {
    dispatch(getClinicsRequest())
    axios.get(`${constants.ROOT_URL}/clinics/getall`)
      .then(response => {
        let doctors = response.data
        dispatch(getClinicsSuccess(doctors))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function filterClinicName (clinics, order) {
  return function (dispatch) {
    let filterDoctors = clinics.allResults.clinics.sort(function (a, b) {
      if (order) {
        return a.clinicName.localeCompare(b.clinicName)
      } else {
        return b.clinicName.localeCompare(a.clinicName)
      }
    })
    dispatch(filterClinicSuccess(filterDoctors))
  }
}

export function filterClinicRating (clinics, order) {
  return function (dispatch) {
    let filterDoctors = clinics.allResults.clinics.sort(function (a, b) {
      if (order) {
        return a.rating < b.rating ? -1 : a.rating > b.rating ? 1 : 0
      } else {
        return b.rating < a.rating ? -1 : b.rating > a.rating ? 1 : 0
      }
    })
    dispatch(filterClinicRatingSuccess(filterDoctors))
  }
}

export function filterClinicSuccess (filterClinic) {
  return {
    type: constants.FILTER_CLINIC_NAME,
    payload: filterClinic
  }
}

export function filterClinicRatingSuccess (filterClinic) {
  return {
    type: constants.FILTER_CLINIC_RATING,
    payload: filterClinic
  }
}

export function getClinicsSuccess (doctors) {
  return {
    type: constants.GET_ALL_CLINICS,
    payload: doctors
  }
}

export function getClinicsRequest () {
  return {
    type: constants.GET_ALL_CLINICS_REQUEST,
    isLoading: true
  }
}