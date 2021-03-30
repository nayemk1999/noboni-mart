import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    const gProvider = new firebase.auth.GoogleAuthProvider();
    const signInGoogle = () => {
        firebase.auth()
            .signInWithPopup(gProvider)
            .then((result) => {
                const user = result.user;
                setLoggedInUser(user);
                history.replace(from)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    return (
        <div>
            <button onClick={signInGoogle}>Continue with Google</button>
        </div>
    );
};

export default Login;