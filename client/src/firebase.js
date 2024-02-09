// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-83334.firebaseapp.com",
  projectId: "mern-estate-83334",
  storageBucket: "mern-estate-83334.appspot.com",
  messagingSenderId: "513459745798",
  appId: "1:513459745798:web:e447d2de9263bd994bff87"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);


 //done