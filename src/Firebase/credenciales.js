import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyApXZKSrlj3G4pONFVIpIxMzJq8sYrkapM",
  authDomain: "cuurly-shop.firebaseapp.com",
  projectId: "cuurly-shop",
  storageBucket: "cuurly-shop.appspot.com",
  messagingSenderId: "353916723395",
  appId: "1:353916723395:web:c296d09c862d9d6ec38276",
  measurementId: "G-Z8XCVKV2H2"
};


const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);