import {
    SESSION_BEGIN,
    SESSION_END,
    SESSION_SUCCESS
} from './types';

const initialState = {
    isLoading: false,
    token: ''
};

export default (state = initialState, { type, data }) => {
    switch (type) {
        case SESSION_BEGIN: {
            return {
                ...state,
                isLoading: true
            };
        }

        case SESSION_END: {
            return {
                ...state,
                isLoading: false
            };
        }

        case SESSION_SUCCESS: {
            return {
                ...state,
                token: data
            };
        }

        default:
            return state;
    }
};
