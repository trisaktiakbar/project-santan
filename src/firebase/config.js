import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBimbNVKffFr0SUOPzgWgLrAt4rEcF184E",
  authDomain: "sistem-analisis-tanaman.firebaseapp.com",
  databaseURL: "https://sistem-analisis-tanaman-default-rtdb.firebaseio.com",
  projectId: "sistem-analisis-tanaman",
  storageBucket: "sistem-analisis-tanaman.appspot.com",
  messagingSenderId: "1077680293982",
  appId: "1:1077680293982:web:94d77cfbea08cd2a684ccf",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();
export default firebase;
