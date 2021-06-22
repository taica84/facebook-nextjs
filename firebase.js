import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDLQebHeR_OpELp7WRa0W3NeAwWnReg9IY",
    authDomain: "facebook-clone-3d9c5.firebaseapp.com",
    projectId: "facebook-clone-3d9c5",
    storageBucket: "facebook-clone-3d9c5.appspot.com",
    messagingSenderId: "813927375900",
    appId: "1:813927375900:web:be1312b1840a1ab1c36bd9",
    measurementId: "G-TRPXWCZ59K"
  };


  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) :firebase.app();

  const db = 