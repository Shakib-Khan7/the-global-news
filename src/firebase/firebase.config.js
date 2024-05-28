// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('inside firebase',import.meta.env.VITE_PASS);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "the-global-news-auth.firebaseapp.com",
  projectId: "the-global-news-auth",
  storageBucket: "the-global-news-auth.appspot.com",
  messagingSenderId: "360095272598",
  appId: "1:360095272598:web:4ee118d10942875dc7fcb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app