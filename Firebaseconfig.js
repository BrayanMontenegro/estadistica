import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAnalitycs} from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyAlZkLgPHF2nDvHyP02eRjl9lxRzMtnymQ",
  authDomain: "eliab-c8607.firebaseapp.com",
  projectId: "eliab-c8607",
  storageBucket: "eliab-c8607.appspot.com",
  messagingSenderId: "950286431400",
  appId: "1:950286431400:web:29330906f3cb1b38767e9d",
  measurementId: "G-W15R7NWN89"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;