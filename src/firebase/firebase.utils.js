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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('error creating user', err.message);
        }
    }
    return userRef;
};

export const addCollectionAndDocumentsToFirestore = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    })
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;