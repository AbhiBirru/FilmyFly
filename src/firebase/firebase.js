import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqJr5pt6qmCsXoyaY8OFF3vyGVaA0r1SU",
  authDomain: "filmyfly-8115d.firebaseapp.com",
  projectId: "filmyfly-8115d",
  storageBucket: "filmyfly-8115d.appspot.com",
  messagingSenderId: "567096392103",
  appId: "1:567096392103:web:c8bd3dd444136d12655e82",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movie");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
