import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
} from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case FACEBOOK_LOGIN_SUCCESS:
            const { token, expires } = action.payload;
            return { ...state, token, expires };
        case FACEBOOK_LOGIN_FAIL:
        return { ...state, token: null, expires: null };
        default:
            return state;
    }
}