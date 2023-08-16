// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlqUajoQSPMEaO2Z2rCAnfNYlcaLS-N_A",
  authDomain: "dcdataapp.firebaseapp.com",
  databaseURL: "https://dcdataapp-default-rtdb.firebaseio.com",
  projectId: "dcdataapp",
  storageBucket: "dcdataapp.appspot.com",
  messagingSenderId: "1086430953312",
  appId: "1:1086430953312:web:965bb556679dc411eb2805",
  measurementId: "G-CH6EHMHTG9"
};

// Initialize Firebase
export const apppp = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);
 