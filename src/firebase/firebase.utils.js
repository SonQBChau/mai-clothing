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

export const createuserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error create user", error.message);
    }
  }

  console.log(snapShot);
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
