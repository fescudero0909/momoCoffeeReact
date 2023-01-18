import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB15wkP3AFxh_ejw7xlqSOydPMvd-dCES4",
    authDomain: "e-commerce-cafe.firebaseapp.com",
    projectId: "e-commerce-cafe",
    storageBucket: "e-commerce-cafe.appspot.com",
    messagingSenderId: "459662723168",
    appId: "1:459662723168:web:bc18bf6a3e0a5c7a005b05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

