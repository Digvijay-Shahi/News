import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyCfpMH3sMfflfrZef7vFvVcTLuAKIK4hbM",
  authDomain: "auth-form-6a477.firebaseapp.com",
  projectId: "auth-form-6a477",
  storageBucket: "auth-form-6a477.appspot.com",
  messagingSenderId: "957080950159",
  appId: "1:957080950159:web:f008c47e43ce3fae88a7fa"
};

firebase.initializeApp(firebaseConfig);

const SignUpLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupError, setSignupError] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleSignUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // Signed up successfully
        console.log(result);
        alert('You are signed up!');
      })
      .catch((error) => {
        // Handle signup error
        setSignupError(error.message);
      });
  };

  const handleSignIn = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        // Signed in successfully
        alert('You are signed in!');
        console.log(result);
        // Redirect to home page or perform other actions
      })
      .catch((error) => {
        // Handle login error
        setLoginError(error.message);
      });
  };

  return (
    <div>
      <div>
        <h2>Signup</h2>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button onClick={handleSignUp}>Signup</button>
        {signupError && <p className="error-message">{signupError}</p>}
      </div>

      <div>
        <h2>Login</h2>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button onClick={handleSignIn}>Login</button>
        {loginError && <p className="error-message">{loginError}</p>}
      </div>
    </div>
  );
};

export default SignUpLogin;
