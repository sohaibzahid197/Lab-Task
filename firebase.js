// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYI0Tj9B1APN-RC6vhpRuMr9ud0BuydF8",
  authDomain: "awesomeproject-86b05.firebaseapp.com",
  projectId: "awesomeproject-86b05",
  storageBucket: "awesomeproject-86b05.appspot.com",
  messagingSenderId: "608439610085",
  appId: "1:608439610085:web:30aacc4fc628d20d3dc20c",
  measurementId: "G-429LDJRD7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;