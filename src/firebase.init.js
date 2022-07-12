// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYI50ENwzdV0VbMwVth8x4CGp9TuAAHT4",
    authDomain: "drone-pool.firebaseapp.com",
    projectId: "drone-pool",
    storageBucket: "drone-pool.appspot.com",
    messagingSenderId: "626758800387",
    appId: "1:626758800387:web:7861863ed3f827a0e22a36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;