
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCy6gJbQerRmWpA9n42e1XyYytEGjlwcv0",
  authDomain: "assignment3-subscriptions.firebaseapp.com",
  projectId: "assignment3-subscriptions",
  storageBucket: "assignment3-subscriptions.appspot.com",
  messagingSenderId: "112870604409",
  appId: "1:112870604409:web:3bad279a8c7477eb685ea8"
};

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();