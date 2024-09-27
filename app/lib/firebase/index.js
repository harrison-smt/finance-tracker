// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb1MDXXdaQuqFYQBXufrjAlA8WF_T9LRI",
  authDomain: "finanace-tracker-b6f5b.firebaseapp.com",
  projectId: "finanace-tracker-b6f5b",
  storageBucket: "finanace-tracker-b6f5b.appspot.com",
  messagingSenderId: "764774015917",
  appId: "1:764774015917:web:f4bf976fb22d858816b724"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app, db, auth}