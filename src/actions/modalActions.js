import { SHOW_MODAL, HIDE_MODAL } from '../constants/constants';

export const showModal = (id) => {
    document.body.classList.add('modal-open');
    return {
        type: SHOW_MODAL,
        payload: id,
    };
};

export const hideModal = () => {
    document.body.classList.remove('modal-open');
    return {
        type:HIDE_MODAL,

    };
};