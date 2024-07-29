// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAb6Cic4U2yiJnKSFbyCkDMLV0YMsv35ic",
  authDomain: "shoppingcart-8ed19.firebaseapp.com",
  projectId: "shoppingcart-8ed19",
  storageBucket: "shoppingcart-8ed19.appspot.com",
  messagingSenderId: "873633495772",
  appId: "1:873633495772:web:5949410bc63863822e1219",
  measurementId: "G-KW76DJSSPD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };