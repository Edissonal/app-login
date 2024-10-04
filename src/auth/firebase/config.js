// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdgePzeZyRcyTFMcScUsu8UriNLme5cgM",
  authDomain: "recat-cursos.firebaseapp.com",
  projectId: "recat-cursos",
  storageBucket: "recat-cursos.appspot.com",
  messagingSenderId: "122636346575",
  appId: "1:122636346575:web:743ca690d2de72955443ba",
  measurementId: "G-8VPCVN5F2E"
};

// Initialize Firebase
 export const FirebaseApp = initializeApp(firebaseConfig);
 export const FirebasetAuth = getAuth(FirebaseApp);
 export const FirebaseDB = getFirestore(FirebaseApp);