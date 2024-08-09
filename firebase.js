// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4y3-L9ThNa5NnA3Nvoe5KK8u4PuD5Wzo",
  authDomain: "inventory-management-e02ee.firebaseapp.com",
  projectId: "inventory-management-e02ee",
  storageBucket: "inventory-management-e02ee.appspot.com",
  messagingSenderId: "62527987967",
  appId: "1:62527987967:web:19ac3f44efacbec3eeecca",
  measurementId: "G-2G6CK64EGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore=getFirestore(app)
export{firestore}