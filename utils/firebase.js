
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "catmatch-ba0b9.firebaseapp.com",
    databaseURL: "https://catmatch-ba0b9.firebaseio.com",
    projectId: "catmatch-ba0b9",
    storageBucket: "catmatch-ba0b9.appspot.com",
    messagingSenderId: "795638903964",
    appId: process.env.API_ID
  };


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const db = firebase.firestore();
export const increment = firebase.firestore.FieldValue.increment(1);
export default firebase;