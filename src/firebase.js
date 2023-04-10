import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBCFSxAkHFgcZOzgXG5RnjtQ9ZdeFa7824",
    authDomain: "labizy-ca47f.firebaseapp.com",
    databaseURL: "https://labizy-ca47f-default-rtdb.firebaseio.com",
    projectId: "labizy-ca47f",
    storageBucket: "labizy-ca47f.appspot.com",
    messagingSenderId: "967606460869",
    appId: "1:967606460869:web:74bba1dd98b49065e0abac",
    measurementId: "G-5P1HLKP5NC"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}