// Configuración del proyecto Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

// Configuración del SDK obtenida desde Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyALrQj7AEpyKTWfmN4r3qQmCmRATHAWun0",
  authDomain: "cacomix-learn-3c589.firebaseapp.com",
  projectId: "cacomix-learn-3c589",
  storageBucket: "cacomix-learn-3c589.appspot.com",
  messagingSenderId: "385634665845",
  appId: "1:385634665845:web:0178bd352a69b80b693f3c",
  measurementId: "G-XJMZGPJ881",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
