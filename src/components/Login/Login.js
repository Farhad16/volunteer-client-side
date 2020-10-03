import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css'
import logo from '../../assets/logos/logo.png'
import google from '../../assets/logos/google.png'
import { Link } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = () => {

    }
    return (
        <div className="loginSection">
            <div className="login">
                <Link to="/"><img src={logo} alt="" /></Link>
                <div className="loginForm">
                    <div className="google">
                        <h5>Login With</h5>
                        <button onClick={googleSignIn}><img src={google} alt="" />Continue with Google</button>
                        <p>Dont't have an account? <Link to="">Create an account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;