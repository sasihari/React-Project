import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAv3LFnPn2vxpuz0AgwteUygN-QC7HnM0g",
    authDomain: "whats-app-clone-7c584.firebaseapp.com",
    databaseURL: "https://whats-app-clone-7c584.firebaseio.com",
    projectId: "whats-app-clone-7c584",
    storageBucket: "whats-app-clone-7c584.appspot.com",
    messagingSenderId: "870443294087",
    appId: "1:870443294087:web:383c1f918171d58b6d0722",
    measurementId: "G-EWT2VWTKWM"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth= firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;