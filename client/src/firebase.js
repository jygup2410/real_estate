// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk8O28ZT1JHnepfCdvWywlV-gP2G2Qal0",
  authDomain: "realtor-b9d72.firebaseapp.com",
  projectId: "realtor-b9d72",
  storageBucket: "realtor-b9d72.appspot.com",
  messagingSenderId: "917452638793",
  appId: "1:917452638793:web:61bf6cea1a2c45c82ccd98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};