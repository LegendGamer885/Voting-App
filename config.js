import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBcgwVl71fz84gmfS6baI8Pde_u45HqpU8",
    authDomain: "voting-app-2be84.firebaseapp.com",
    databaseURL: "https://voting-app-2be84-default-rtdb.firebaseio.com",
    projectId: "voting-app-2be84",
    storageBucket: "voting-app-2be84.appspot.com",
    messagingSenderId: "336014526356",
    appId: "1:336014526356:web:fb64648280b2cf7fbbf181",
    measurementId: "G-Z5DLE1ENLH"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
