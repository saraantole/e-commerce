import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBeZW1IfODJ7qlQtXcrYhFdru2fJVEKk2A",
    authDomain: "hw-db-5c40e.firebaseapp.com",
    databaseURL: "https://hw-db-5c40e.firebaseio.com",
    projectId: "hw-db-5c40e",
    storageBucket: "hw-db-5c40e.appspot.com",
    messagingSenderId: "226857103651",
    appId: "1:226857103651:web:6e767ca8ad7b7c202bdc96",
    measurementId: "G-RMXZWLDV8Q"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;