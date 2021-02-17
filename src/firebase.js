import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD6avxbI0F2fXsyStM8-SgtVW66zm_6zYc",
  authDomain: "snapchat-clone-yt-ba07d.firebaseapp.com",
  projectId: "snapchat-clone-yt-ba07d",
  storageBucket: "snapchat-clone-yt-ba07d.appspot.com",
  messagingSenderId: "545501584768",
  appId: "1:545501584768:web:4a1a65e5a0ec0b2bf17565",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
