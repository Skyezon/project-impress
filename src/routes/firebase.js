
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNRj-JYPtfW-P2YSXnnTYjI57JVTmtOws",
  authDomain: "project-impress-9d91a.firebaseapp.com",
  projectId: "project-impress-9d91a",
  storageBucket: "project-impress-9d91a.appspot.com",
  messagingSenderId: "1067249402145",
  appId: "1:1067249402145:web:29b8344c73df486d507e60",
  databaseURL: "https://project-impress-9d91a-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize our Firebase for our application
let app = initializeApp(firebaseConfig);
let db = getDatabase(app);

export default db
