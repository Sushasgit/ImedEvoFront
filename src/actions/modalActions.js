import * as constants from '../constants/constants';

export function showModal(modalName, ) {
  return {
    type: constants.SHOW_MODAL,
    modalName: modalName,
  };
}

export function hideModal() {
  return {
    type: constants.HIDE_MODAL
  };
}