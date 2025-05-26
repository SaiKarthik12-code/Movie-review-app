
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";

// Construct Firebase config from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Check if all necessary keys are present
const allKeysPresent = Object.values(firebaseConfig).every(key => typeof key === 'string' && key.length > 0);

let app: FirebaseApp | undefined; // Can be undefined if keys are missing
let auth: Auth;

if (getApps().length === 0) {
  if (allKeysPresent) {
    app = initializeApp(firebaseConfig);
  } else {
    console.error(
      "Firebase configuration error: Not all NEXT_PUBLIC_FIREBASE_ environment variables are set in .env.local. Firebase will not be initialized."
    );
    // app remains undefined, subsequent getAuth(app) will fail if app is undefined.
    // This helps to catch config issues early.
  }
} else {
  app = getApps()[0];
}

// Initialize auth only if app was successfully initialized
if (app) {
  auth = getAuth(app);
} else {
  // Fallback or error handling for auth if app couldn't be initialized
  // This is a critical state, so logging an error is important.
  // Depending on the app's needs, this could throw an error to halt execution
  // or use a mock/no-op Auth instance for graceful degradation.
  console.error("Firebase app was not initialized. Auth will not be available.");
  // Create a dummy auth object to prevent crashes if accessed, though it won't work
  auth = {} as Auth; 
}

export { app, auth };
