import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCzLN9wxMwxISrBr1LAtBNT66wQc4solME",
  authDomain: "project-c71-f988b.firebaseapp.com",
  projectId: "project-c71-f988b",
  storageBucket: "project-c71-f988b.appspot.com",
  messagingSenderId: "859709482447",
  appId: "1:859709482447:web:bf4034fac3690e0101deba"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
