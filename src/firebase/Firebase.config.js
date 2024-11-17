// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn7CmVKhdeejy-LM8ZtNcGUpsbyUi5szQ",
  authDomain: "dragon-news-99299.firebaseapp.com",
  projectId: "dragon-news-99299",
  storageBucket: "dragon-news-99299.firebasestorage.app",
  messagingSenderId: "577261026092",
  appId: "1:577261026092:web:8926c70317110635e34a89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);