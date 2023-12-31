// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from '/firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 const auth = getAuth()

const firebaseConfig = {
  apiKey: REACT_VITE_API_KEY,
  authDomain: REACT_VITE_AUTH_DOMAIN,
  projectId: REACT_VITE_PROJECT_ID,
  storageBucket: REACT_VITE_STORAGE_BUCKET,
  messagingSenderId:REACT_VITE_MESSAGING_SENDER_ID,
  appId: REACT_VITE_APP_ID
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default auth(app)