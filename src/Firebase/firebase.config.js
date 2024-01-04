// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU90Iinfh47abSb0JzvlZaMxxIiPRtzdQ",
  authDomain: "halaljibika-257ec.firebaseapp.com",
  projectId: "halaljibika-257ec",
  storageBucket: "halaljibika-257ec.appspot.com",
  messagingSenderId: "221332730469",
  appId: "1:221332730469:web:c8e494bbbca4ef3af24c8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
