// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "mern-blog-334b8.firebaseapp.com",
  projectId: "mern-blog-334b8",
  storageBucket: "mern-blog-334b8.appspot.com",
  messagingSenderId: "640858311433",
  appId: "1:640858311433:web:b2b37332660a413ae2a1d8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
