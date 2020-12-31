import {

    SHOW_FULLLOADER,

    UPDATE_DRIVER,

    HTTP_401_ERROR,

    HTTP_404_ERROR,

    HTTP_500_ERROR,

    HTTP_OTHER_ERROR

} from '../actionTypes';
import store from 'store'


const INIT_STATE = {

    isFullLoader: false,

    driver: store.get('driver'),

    showError: false,

    errorMessage: ''
};



const reducer = (state = INIT_STATE, action) => {

    switch (action.type) {

        case SHOW_FULLLOADER:

            return {
                ...state, isFullLoader: action.payload
            };

        case UPDATE_DRIVER:

            store.set('driver', action.payload)

            return {
                ...state, driver: action.payload
            };

        case HTTP_401_ERROR:

            window.location.href = "/signin"

            return { ...state};

        case HTTP_404_ERROR:

            return { ...state, showError: true, errorMessage: action.error.message };

        case HTTP_500_ERROR:

            return { ...state, showError: true, errorMessage: action.error.message };

        case HTTP_OTHER_ERROR:

            return { ...state, showError: true, errorMessage: action.error.message };

        default:

            return state;
    }
}




export default reducer;