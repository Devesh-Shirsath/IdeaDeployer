import React from 'react';
import { firebase } from '../firebase';

const Auth = () => {
    const signIn = async () => {
        var google_provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(google_provider)
        .then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err);
        })
    }
    return(
        <button onClick={signIn}>Sign Up</button>
    )
}

export default Auth;