import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBzQgOd0AKzODoNOCzfPar1vyZocypmgSg",
    authDomain: "distribuidoragalicia-66cc0.firebaseapp.com",
    projectId: "distribuidoragalicia-66cc0",
    storageBucket: "distribuidoragalicia-66cc0.appspot.com",
    messagingSenderId: "1050665490318",
    appId: "1:1050665490318:web:1756f4d09b0ec9503476df",
    measurementId: "G-C1YH865TM8"
  };

  const app = initializeApp(firebaseConfig);

  export const DB = getFirestore(app)