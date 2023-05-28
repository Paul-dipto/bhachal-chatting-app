// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDoKZxc2pMlot6CAJ_6TuaV4_6l_KoFdXI",
   authDomain: "bachal-chatapp.firebaseapp.com",
   projectId: "bachal-chatapp",
   storageBucket: "bachal-chatapp.appspot.com",
   messagingSenderId: "36622501324",
   appId: "1:36622501324:web:a28d028cfae54ba3c10969",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig;
