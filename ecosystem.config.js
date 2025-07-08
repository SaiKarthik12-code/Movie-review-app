// This is a configuration file for the pm2 process manager.
// It defines how to run both the Next.js frontend and the Genkit backend in a production environment.
// IMPORTANT: This file contains sensitive API keys. Create it on your server but DO NOT commit it to version control.

module.exports = {
  apps: [
    {
      name: 'MovieVerse-Frontend',
      script: 'npm',
      args: 'start', 
      cwd: './', 
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
        // The following variables are required for the frontend to connect to Firebase.
        // !! REPLACE the placeholder values below with your actual Firebase project credentials !!
        NEXT_PUBLIC_FIREBASE_API_KEY: 'AIzaSyxxxxxxxxxxxxxxxxxxxxx',
        NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: 'your-project-id.firebaseapp.com',
        NEXT_PUBLIC_FIREBASE_PROJECT_ID: 'your-project-id',
        NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: 'your-project-id.appspot.com',
        NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: 'your-sender-id',
        NEXT_PUBLIC_FIREBASE_APP_ID: '1:your-app-id:web:your-web-id',
        // !! IMPORTANT: Update this to your EC2 public IP or domain name !!
        NEXT_PUBLIC_SITE_URL: 'http://13.127.217.202:3000',
      },
    },
    {
      name: 'MovieVerse-AI-Backend',
      script: 'npm',
      args: 'run genkit:start-prod', // Uses the production script for Genkit
      cwd: './', // The backend runs from the project root
      env_production: {
        NODE_ENV: 'production',
        // The following keys are used by the backend server and are not exposed to the public.
        // !! REPLACE the placeholder GOOGLE_API_KEY with your actual key !!
        GOOGLE_API_KEY: 'AIzaSyxxxxxxxxxxxxxxxxxxxxx',
        TMDB_API_KEY: 'f777c265599a9e9a59af96f3181816d5',
        OMDB_API_KEY: 'a32dd69a',
      },
    },
  ],
};
