// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCk29satHbmGgCiSIBRfsdjtTXbYcgQmds",
  authDomain: "l-m-s-e91b4.firebaseapp.com",
  projectId: "l-m-s-e91b4",
  storageBucket: "l-m-s-e91b4.appspot.com",
  messagingSenderId: "891032949799",
  appId: "1:891032949799:web:1546700f7e79cc0f842a02"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


export {db,auth,storage} 