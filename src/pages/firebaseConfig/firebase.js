import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyAje7uu769QhvXaaEKvaS-W0GR9nXohsrM",
  authDomain: "instagram-clone-react-pwa.firebaseapp.com",
  projectId: "instagram-clone-react-pwa",
  storageBucket: "instagram-clone-react-pwa.appspot.com",
  messagingSenderId: "53880491842",
  appId: "1:53880491842:web:c485290897ed4dc40e02db",
  measurementId: "G-W0ZD5RNRC4",
});

const db = getFirestore(app);
const auth = getAuth();

export { app, db, auth };
