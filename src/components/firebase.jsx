// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe_BMOhvH9B_4I55WEKod-dRIQ283dbv0",
  authDomain: "emp-management-a8cc0.firebaseapp.com",
  projectId: "emp-management-a8cc0",
  storageBucket: "emp-management-a8cc0.firebasestorage.app",
  messagingSenderId: "972318372714",
  appId: "1:972318372714:web:1671d33fb1ee8b96af2b13",
  measurementId: "G-H8NPXCL84P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const users = collection(db, "users")
const auth = getAuth(app)

export { db, users, auth };