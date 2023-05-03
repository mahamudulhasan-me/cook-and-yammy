// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID,
  apiKey: "AIzaSyCXxiJ_hGpPpH7uqVpHn3MJuP5ubOj4ngU",
  authDomain: "cook-and-yummy.firebaseapp.com",
  projectId: "cook-and-yummy",
  storageBucket: "cook-and-yummy.appspot.com",
  messagingSenderId: "1098020560969",
  appId: "1:1098020560969:web:8e8f927508606d13525f98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
