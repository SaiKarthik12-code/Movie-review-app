
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyAM0-NjHAcVKG8xsU0Qk1HpYXDDDQ6iCwY",
  authDomain: "movieverse-bjvbv.firebaseapp.com",
  projectId: "movieverse-bjvbv",
  storageBucket: "movieverse-bjvbv.firebasestorage.app",
  messagingSenderId: "403368878993",
  appId: "1:403368878993:web:f473214699825981bc3030"
};

let app: FirebaseApp;
let auth: Auth;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

auth = getAuth(app);

export { app, auth };
