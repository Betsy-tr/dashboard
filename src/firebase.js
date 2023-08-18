// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD93dMZK3id_pjp4EfeCQigy1u4F6QjMM0",
  authDomain: "dashboard-be5c9.firebaseapp.com",
  projectId: "dashboard-be5c9",
  storageBucket: "dashboard-be5c9.appspot.com",
  messagingSenderId: "395408417884",
  appId: "1:395408417884:web:9891949d96f97512bbb299"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

export default app ;