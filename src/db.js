import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA73lL6bAvM0Nenn5mYLWcTI5qtLJqSDy0",
  authDomain: "party-animals-65bb9.firebaseapp.com",
  projectId: "party-animals-65bb9",
  storageBucket: "party-animals-65bb9.appspot.com",
  messagingSenderId: "793350769916",
  appId: "1:793350769916:web:e2e718a50a50ab9d391b79",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
