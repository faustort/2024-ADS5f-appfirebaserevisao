// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBm7pPPIpll6VDLcU4cN3T8G4V9lZ8Qo8Y",
    authDomain: "appfirebaserevisao.firebaseapp.com",
    projectId: "appfirebaserevisao",
    storageBucket: "appfirebaserevisao.appspot.com",
    messagingSenderId: "897033270238",
    appId: "1:897033270238:web:297b3e1ac6f28fd370634f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);