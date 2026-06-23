import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwuNkdz0j6hAuYcJMcMowa1IrM8lXxlDI",
  authDomain: "mobile-9552d.firebaseapp.com",
  projectId: "mobile-9552d",
  storageBucket: "mobile-9552d.firebasestorage.app",
  messagingSenderId: "420053654141",
  appId: "1:420053654141:web:49c8603a23a4e67bdbaf14"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);