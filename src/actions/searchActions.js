import * as constants from '../constants/constants'
import axios from 'axios';
import { history } from '../history';

export default function userSearch(query) {
  return function(dispatch) {
    axios.get(`${constants.ROOT_URL}/search/byanyparams?params=${query}`)
      .then(({data}) => {
        let searchResult = data
        console.log(searchResult)
        dispatch(searchSuccess(searchResult))
        history.push(`/searchresult`);
      })
      .catch((e) => {
       console.log(e)
      });
  }
}

export function searchSuccess(searchResult) {
  return {
    type: constants.USER_SEARCH,
    payload: searchResult
  };
}


