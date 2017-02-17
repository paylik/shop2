
import { OPEN_MODAL, CLOSE_MODAL } from './actions';


const initialState = {
    isOpen: false
};

function modalReducer(state = initialState, actions) {
    switch (actions.type) {
        case OPEN_MODAL:
            return object.assign({}, state, {
                isOpen: true
            });
        case CLOSE_MODAL:
            return object.assign({}, state, {
                isOpen: false
            });
        default:
            return state;
    }
}


const ModalReduser = {
    modal: modalReducer
};

export default ModalReduser;