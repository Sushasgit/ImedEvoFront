const GET_ALL_LABORATORIES = 'GET_ALL_LABORATORIES'
const GET_ALL_LABORATORIES_REQUEST = 'GET_ALL_LABORATORIES_REQUEST'

import axios from 'axios'
import * as constants from '../constants/constants'

export function getAllLaboratories () {
  return function (dispatch) {
    dispatch(getLaboratoriesRequest())
    axios.get(`${constants.ROOT_URL}/laboratories/getall`)
      .then(response => {
        let doctors = response.data
        dispatch(getLaboratoriesSuccess(doctors))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function getLaboratoriesSuccess (laboratories) {
  return {
    type: GET_ALL_LABORATORIES,
    payload: laboratories
  }
}

export function getLaboratoriesRequest () {
  return {
    type: GET_ALL_LABORATORIES_REQUEST,
    isLoading: true
  }
}