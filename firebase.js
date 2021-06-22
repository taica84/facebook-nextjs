import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCva4biLRrMWgGtCR76Shhjr3W_263cbYw",
  authDomain: "nextjs-fb-clone.firebaseapp.com",
  projectId: "nextjs-fb-clone",
  storageBucket: "nextjs-fb-clone.appspot.com",
  messagingSenderId: "494465362607",
  appId: "1:494465362607:web:250e7b9bdbd0b0f38b825a"
};


  const app = !firebase.apps.length ?
   firebase.initializeApp(firebaseConfig) :
   firebase.app();

  const db = app.firestore();

  const storage = firebase.storage();

  export {db , storage};