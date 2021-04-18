import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import Navbar from '../Home/Navbar/Navbar';
import { useContext } from 'react';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const LogIn = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }


    const [signedInUser, setSignedInUser] = useContext(userContext)

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };




    var provider = new firebase.auth.GoogleAuthProvider();

    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {

            sessionStorage.setItem('token', idToken)
        }).catch(function (error) {
            // Handle error
        });
    }

    const handleGoogleSubmit = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                setSignedInUser(user);
                history.replace(from);
                console.log(user)
                setUserToken()
                // ...
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                // ...
            });
    }


    return (
        <div>
            <Navbar></Navbar>
            <div style={{ display: 'flex', height: '300px', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <button className="btn btn-primary" onClick={handleGoogleSubmit}>Sign In With Google</button>
            </div>
        </div>
    );
};

export default LogIn;