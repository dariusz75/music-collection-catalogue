import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "music-library-56f73.firebaseapp.com",
  projectId: "music-library-56f73",
  storageBucket: "music-library-56f73.appspot.com",
  messagingSenderId: "378118970288",
  appId: "1:378118970288:web:f3c88242c08722f86a9475"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();