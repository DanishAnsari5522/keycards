import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
export const firebaseConfig = {
    apiKey: "AIzaSyCUFJmuqPiPv__PGnvUkt-0BK5EugNLAfs",
    authDomain: "keycards-79264.firebaseapp.com",
    projectId: "keycards-79264",
    storageBucket: "keycards-79264.appspot.com",
    messagingSenderId: "936224581580",
    appId: "1:936224581580:web:a44f77800008b117ab5f69",
    measurementId: "G-P19WC3NRW1"
  };
  

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}
