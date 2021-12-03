// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCJsQr4aYcYKLEHgWHNcjDnGnK8JaVIcO8',
  authDomain: 'everse-app.firebaseapp.com',
  projectId: 'everse-app',
  storageBucket: 'everse-app.appspot.com',
  messagingSenderId: '959520134488',
  appId: '1:959520134488:web:3077134c726e892491c12d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signinWithGoogle = () => {
  signInWithRedirect(auth, provider)
    .then((result) => {
      const googleCredential = GoogleAuthProvider.credentialFromResult(result);
      const token = googleCredential.accessToken;
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};

export default app;
