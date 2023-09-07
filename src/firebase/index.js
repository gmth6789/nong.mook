

import { initalizeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhJRxARUydUqR9k575ohN7MuC6lLjF0mM",
  authDomain: "app-gm-4c8b2.firebaseapp.com",
  databaseURL: "https://app-gm-4c8b2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "app-gm-4c8b2",
  storageBucket: "app-gm-4c8b2.appspot.com",
  messagingSenderId: "252378335425",
  appId: "1:252378335425:web:8b487e6b82aee954536c40",
  measurementId: "G-GH8V0W2JER"
};

const app = initalizeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }