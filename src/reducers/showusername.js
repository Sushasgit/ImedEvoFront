import * as constants from '../constants/modalConstants';

const initialState = {
  username: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.SHOW_USER_NAME:
      return {
       console.log(username),
      };
    default:
      return state;
  }
}