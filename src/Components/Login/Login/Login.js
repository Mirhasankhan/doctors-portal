import React, { useState } from 'react';
import login from '../../../images/login.png';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './Firebase.Config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const app = initializeApp(firebaseConfig);

const Login = () => {
  const [newUser, setNewUser] = useState({
    name : '',
    email: ''
  })
  

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user)
        setNewUser(user)
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

      });
  }


  return (
    <div className="row">
      <div className="col-md-5">
        <button className="btn-brand" onClick={handleGoogleSignIn}>Sign In With Google</button>
        <h3>Email: {newUser.email}</h3>
        <img src={newUser.photoURL} alt=""/>
      </div>
      <div className="col-md-7">
        <img style={{ height: '800px' }} src={login} alt="" />
      </div>
    </div>
  );
};

export default Login;