import React, { useState } from 'react';
import { firebase } from '../firebase';

function Auth(props) {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account'
        })
        firebase.auth().signInWithPopup(provider)
        .then((res) => {
            props.setUserDetails(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return(
        <button onClick={signInWithGoogle}>Sign Up</button>
    )
}

export default Auth;