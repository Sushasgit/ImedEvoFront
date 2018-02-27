import { history } from '../history'
import * as constants from '../constants/constants'
import * as helpers from '../helpers/helpers'
import axios from 'axios'

export function signinUser ({username, password}) {
  return function (dispatch) {

    axios.post(`${constants.ROOT_URL}/login`, {username, password})
      .then(response => {
        let jsonDataToken = response.data.response.token.split(' ')[1]
        let jsonDataId = response.data.response.user.id
        helpers.setToken(jsonDataToken)
        helpers.setId(jsonDataId)
        return jsonDataId
      })
      .then((jsonDataId) => {
        let token = helpers.getToken()
        axios.get(`${constants.ROOT_URL}/users/${jsonDataId}`,
          {
            headers: {Authorization: 'Bearer ' + token}
          })
          .then(response => {

            document.body.classList.remove(constants.MODAL_OPEN_CLASS)
            if (response.status === 200) {
              dispatch(authSuccess(response.data))
              history.push(`/profile/${response.data.id}`)
            }
            else if (response.status === 401) {
              dispatch(authError('Проверьте правильность заполненных данных'))
            }
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function authError (error) {
  return {
    type: constants.AUTH_ERROR,
    payload: error
  }
}

export function authSuccess (success) {
  return {
    type: constants.AUTH_USER,
    payload: success
  }
}

