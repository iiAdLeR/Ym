// Firebase configuration and initialization
// Using Firebase Compat SDK for easier integration

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlFPTe_SRti8eQ_PUOu-bR3JyCi6bQ3_8",
  authDomain: "yazilim4-62e12.firebaseapp.com",
  projectId: "yazilim4-62e12",
  storageBucket: "yazilim4-62e12.firebasestorage.app",
  messagingSenderId: "719677796048",
  appId: "1:719677796048:web:2b0996095819774e3078d5",
  measurementId: "G-J8N1Y90PP5"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const db = firebase.firestore();

// Make db available globally
window.db = db;
window.firebase = firebase;

console.log('Firebase initialized successfully');
