import firebase from 'firebase'
require("@firebase/firestore")

 var firebaseConfig = {
    apiKey: "AIzaSyDUMYmqwOWgVTwVku7OvCGiYF8dbwHBkUk",
    authDomain: "story-hub-3-5d0e5.firebaseapp.com",
    projectId: "story-hub-3-5d0e5",
    storageBucket: "story-hub-3-5d0e5.appspot.com",
    messagingSenderId: "180137755930",
    appId: "1:180137755930:web:3198a12da5410ddd93d8a3"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();