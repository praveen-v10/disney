import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVRT-Xf92FC3Fp4k__1nP_ltDl_vWCm0o",
  authDomain: "dishot-fb22d.firebaseapp.com",
  projectId: "dishot-fb22d",
  storageBucket: "dishot-fb22d.appspot.com",
  messagingSenderId: "368512318559",
  appId: "1:368512318559:web:efe40b8abadf6f54e62fea",
  measurementId: "G-ZLL1V2J9S3"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
