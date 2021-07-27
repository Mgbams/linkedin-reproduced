import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDqW5LOQG5dmRuwEQR7qBfSFkUvMkhlofg",
  authDomain: "linkedin-clone-yt-38083.firebaseapp.com",
  projectId: "linkedin-clone-yt-38083",
  storageBucket: "linkedin-clone-yt-38083.appspot.com",
  messagingSenderId: "796452339024",
  appId: "1:796452339024:web:3736b3b3a76509ce5f0055",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
