// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: ${{ secrets.API_KEY }},
  authDomain: ${{ secrets.AUTH_DOMAIN }},
  projectId: ${{ secrets.PROJECT_ID }},
  storageBucket: ${{ secrets.STORAGE_BUCKET }},
  messagingSenderId: ${{ secrets.MESSAGE_SENDER_ID }},
  appId: ${{ secrets.APP_ID }}
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app, db, auth}
