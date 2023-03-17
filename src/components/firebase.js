import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig ={
  apiKey: "AIzaSyA5Gi_NOEUtn1r_2rUhdwfKQe8ZxSRGurY",
  authDomain: "clone-e96a7.firebaseapp.com",
  projectId: "clone-e96a7",
  storageBucket: "clone-e96a7.appspot.com",
  messagingSenderId: "865400876843",
  appId: "1:865400876843:web:6649e375a68a6360bb1f6e",
  measurementId: "G-EMP8SFZ5Q5",
};
const app = initializeApp(firebaseConfig);
//const db = firebaseApp.firestore();
const auth = getAuth(app);
export { auth };
