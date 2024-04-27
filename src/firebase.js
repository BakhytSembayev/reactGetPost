// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getDatabase} from 'firebase/database'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfEZ7VTkAu8K1QMuB7Fg0rQj9NOYPk_d4",
  authDomain: "productsproject-30db2.firebaseapp.com",
  projectId: "productsproject-30db2",
  storageBucket: "productsproject-30db2.appspot.com",
  messagingSenderId: "267956470734",
  appId: "1:267956470734:web:d15da28b9f772cb80ee19f",
  databaseURL:'https://productsproject-30db2-default-rtdb.europe-west1.firebasedatabase.app/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase (app);