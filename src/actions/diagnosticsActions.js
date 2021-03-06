import axios from 'axios'
import * as constants from '../constants/constants'

export function getAllDiagnostics () {
  return function (dispatch) {
    dispatch(getDiagnosticRequest())
    axios.get(`${constants.ROOT_URL}/diagnostics/getall`)
      .then(response => {
        let diagnostic = response.data
        dispatch(getDiagnosticSuccess(diagnostic))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function getDiagnosticSuccess (diagnostic) {
  return {
    type: constants.GET_ALL_DIAGNOSTIC,
    payload: diagnostic
  }
}

export function getDiagnosticRequest () {
  return {
    type: constants.GET_ALL_DIAGNOSTIC_REQUEST,
    isLoading: true
  }
}