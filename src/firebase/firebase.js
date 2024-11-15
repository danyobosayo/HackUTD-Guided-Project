  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use// https://firebase.google.com/docs/web/setup#available-libraries// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4DZfBjztUUQuW4Zfm_gG40ue30ahZX5c",
    authDomain: "hackutd-guided-project.firebaseapp.com",
    projectId: "hackutd-guided-project",
    storageBucket: "hackutd-guided-project.firebasestorage.app",
    messagingSenderId: "847877984591",
    appId: "1:847877984591:web:b011486eca11fd57a7753a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

export { app, auth, db };