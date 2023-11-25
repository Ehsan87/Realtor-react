// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVxDBcIWxz4eAD1h1fiNunnehQU-LBkxE",
  authDomain: "realtor-react-c046b.firebaseapp.com",
  projectId: "realtor-react-c046b",
  storageBucket: "realtor-react-c046b.appspot.com",
  messagingSenderId: "500054041992",
  appId: "1:500054041992:web:fa3c4df55bf7f4bf2c063d",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
