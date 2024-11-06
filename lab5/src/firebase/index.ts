import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJduoRkr7VHpq8nXLGYuox_GscVoqdyrA",
  authDomain: "lab5-2ba08.firebaseapp.com",
  projectId: "lab5-2ba08",
  storageBucket: "lab5-2ba08.firebasestorage.app",
  messagingSenderId: "903582279919",
  appId: "1:903582279919:web:cd42f57e64f432bb67531a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
