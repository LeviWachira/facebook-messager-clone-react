import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDq3_ZO-Vh0Kr418x_1FXa2Zuicq4Pwig0",
  authDomain: "facebook-messager-clone-react.firebaseapp.com",
  databaseURL: "https://facebook-messager-clone-react.firebaseio.com",
  projectId: "facebook-messager-clone-react",
  storageBucket: "facebook-messager-clone-react.appspot.com",
  messagingSenderId: "696389906917",
  appId: "1:696389906917:web:a3c4450e5688b281f47f0c",
  measurementId: "G-ZQDLQE0CN1",
});


const db = firebaseApp.firestore();

export default db;
