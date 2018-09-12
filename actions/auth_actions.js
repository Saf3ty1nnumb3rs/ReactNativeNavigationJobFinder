import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
} from './types';

// HOW TO USE AsyncStorage
// AsyncStorage.setItem( 'fb_token', token)
// AsyncStorage.getItem('fb_token');


export const facebookLogin = () => async (dispatch) => {
    let token = await AsyncStorage.getItem('fb_token');
    const expires = await AsyncStorage.getItem('fb_expires');
    const currentTime = Math.floor(new Date().getTime()/1000);

    if(token && expires && expires > currentTime){
        //Dispatch an action saying FB login is done
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: { token, expires } })
    } else {
        try {
            const { token, expires } = await doFacebookLogin();
            await AsyncStorage.setItem("fb_token", token);
            await AsyncStorage.setItem("fb_expires", String(expires));
            return dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: { token, expires } });
        }catch(error) {
            return dispatch({ type: FACEBOOK_LOGIN_FAIL })
        }
       
    }
}; 

//Can also use dispatch
const doFacebookLogin = async () => {
    let { type, token, expires } = await Facebook.logInWithReadPermissionsAsync('525051384633382', {
        permissions: ['public_profile']
    } );
    if( type === 'cancel' ) {
        throw new Error({ error: "Facebook login cancelled" });
        //return dispatch({ type: FACEBOOK_LOGIN_FAIL })
    }
    if (type === "success") {
        return { token, expires }
    }
    // await AsyncStorage.setItem('fb_token', { token, expires } );
    // dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: { token, expires } })
};