import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCYlbVo5bvp-xVLPaERUMdsKyIW1FjQMIQ",
  authDomain: "crown-clothing-db-b4728.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-b4728.firebaseio.com",
  projectId: "crown-clothing-db-b4728",
  storageBucket: "crown-clothing-db-b4728.appspot.com",
  messagingSenderId: "178972532386",
  appId: "1:178972532386:web:7a6f7eb9dfa733016241fb",
  measurementId: "G-4KLH9EGHKS",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
