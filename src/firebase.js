import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCOxPnVevku-ReNkqcivhbjwd-y6uHkKNQ",
  authDomain: "complichat-e119f.firebaseapp.com",
  projectId: "complichat-e119f",
  storageBucket: "complichat-e119f.appspot.com",
  messagingSenderId: "421367043436",
  appId: "1:421367043436:web:7f04a2130446f3905d4f49"
}).auth();

//