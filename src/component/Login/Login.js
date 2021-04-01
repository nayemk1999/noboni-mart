import React, { useContext } from 'react';
import { firebaseConfig } from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Navbar } from 'react-bootstrap';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import firebase from "firebase/app";
import "firebase/auth";


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
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
        <div className='container'>
            <Navbar collapseOnSelect expand="lg"  >
                <Navbar.Brand className="logo" href="/home">NoboniMart</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                </Navbar.Collapse>
            </Navbar>

            <div className="w-50 p-3 m-auto login-form" >
                <h3>Login:</h3>
                <button onClick={signInGoogle}><FontAwesomeIcon icon={faGoogle} /> Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;