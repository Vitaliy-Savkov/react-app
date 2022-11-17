/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtanfRrt4Nz30IIgcSNqJtUEqX18zGwmg",
  authDomain: "react-app-6298a.firebaseapp.com",
  databaseURL: "https://react-app-6298a-default-rtdb.firebaseio.com",
  projectId: "react-app-6298a",
  storageBucket: "react-app-6298a.appspot.com",
  messagingSenderId: "955896613121",
  appId: "1:955896613121:web:8721e925da22c87a543300",
  measurementId: "G-MYKC6LBQ9W"
};
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);
