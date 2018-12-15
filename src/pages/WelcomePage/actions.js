import {
    SESSION_BEGIN,
    SESSION_END,
    SESSION_SUCCESS
} from './types';

function authorize() {
    return Promise.resolve({
        access_token: 'example'
    });
}

function register() {
    return Promise.resolve();
}

const beginSession = () => (dispatch) => {
    dispatch({
        type: SESSION_BEGIN
    });

    return register().then(authorize)
        .then(({ access_token: accessToken }) => {
            dispatch({
                type: SESSION_SUCCESS,
                data: accessToken
            });

            dispatch({
                type: SESSION_END
            });
        }).catch((error) => {
            dispatch({
                type: SESSION_END
            });

            throw new Error('Your session could not get started');
        });
};

export default {
    beginSession
};
