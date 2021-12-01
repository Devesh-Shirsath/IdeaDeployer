import React from 'react';
import { firebase } from '../firebase';

function Auth() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account'
        })
        firebase.auth().signInWithPopup(provider)
        .then((res) => {
            console.log(res)
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