
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCLPgtGXYCnhMjhAfkZ0HyNJjLszSzghsE",
    authDomain: "catmatch-ba0b9.firebaseapp.com",
    databaseURL: "https://catmatch-ba0b9.firebaseio.com",
    projectId: "catmatch-ba0b9",
    storageBucket: "catmatch-ba0b9.appspot.com",
    messagingSenderId: "795638903964",
    appId: "1:795638903964:web:61a85958adc0062c6ca959"
  };


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const db = firebase.firestore();
export default firebase;