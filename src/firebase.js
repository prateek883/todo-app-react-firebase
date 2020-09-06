import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCDeVva761kDW8-4PKYNVBvO3WF8k5psp4",
  authDomain: "todo-app-ea8c4.firebaseapp.com",
  databaseURL: "https://todo-app-ea8c4.firebaseio.com",
  projectId: "todo-app-ea8c4",
  storageBucket: "todo-app-ea8c4.appspot.com",
  messagingSenderId: "1005765182628",
  appId: "1:1005765182628:web:c7d9339c5f9cf32c511231",
  measurementId: "G-WWT2SKP4N1",
});

const db = firebaseApp.firestore();


export default db;
