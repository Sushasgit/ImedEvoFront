import React, {Fragment} from 'react';
import SignInModal from '../Modals/SignInModalContainer';
import SignUpModal from '../Modals/SignUpModalContainer';
import modalStyles from '../../sass/components/modals.scss';

export default class ModalRoot extends React.PureComponent {
    render() {
        const {isShowingSignInModal, isShowingSignUpModal} = this.props.modal;
        return (
            <Fragment>
                {isShowingSignInModal   &&
                <div>
                    <div onClick={() => {this.props.hideModal()}} />
                    <div className={modalStyles.modal}>
                        <div className={modalStyles.modal__overlay} role="dialog" aria-labelledby="modal__title" aria-describedby="modal_desc">
                            <div className={modalStyles.modal__wrap}>
                                {isShowingSignInModal && <SignInModal/>}
                            </div>
                        </div>
                    </div>
                </div>
                }

                {isShowingSignUpModal   &&
                <div>
                    <div onClick={() => {this.props.hideModal()}} />
                    <div className={modalStyles.modal}>
                        <div className={modalStyles.modal__overlay} role="dialog" aria-labelledby="modal__title" aria-describedby="modal_desc">
                            <div className={`${modalStyles.modal__wrap} ${modalStyles.modal__wrap_big}`}>
                                {isShowingSignUpModal && <SignUpModal/>}
                            </div>
                        </div>
                    </div>
                </div>
                }

               {!isShowingSignInModal && !isShowingSignUpModal  && null}
            </Fragment>

        );
    }
}