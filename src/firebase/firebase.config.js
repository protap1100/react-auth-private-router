// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoaQ-mL_n3MaDw4XypT3tc9qdUhn4yyng",
  authDomain: "react-auth-private-route-db3f7.firebaseapp.com",
  projectId: "react-auth-private-route-db3f7",
  storageBucket: "react-auth-private-route-db3f7.appspot.com",
  messagingSenderId: "429696565464",
  appId: "1:429696565464:web:b764164e2bac273eaa17ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;