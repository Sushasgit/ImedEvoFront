import * as constants from '../constants/modalConstants';

const initialState = {
  modalName: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.SHOW_MODAL:
      return {
        modalName: action.modalName,
      };
    case constants.HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
}