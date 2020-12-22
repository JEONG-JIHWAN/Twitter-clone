import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAiCr0vSn1xG1p3Ckz1NauQwOIm-iFocLk",
    authDomain: "jwitter-e5fe3.firebaseapp.com",
    databaseURL: "https://jwitter-e5fe3.firebaseio.com",
    projectId: "jwitter-e5fe3",
    storageBucket: "jwitter-e5fe3.appspot.com",
    messagingSenderId: "768097006354",
    appId: "1:768097006354:web:d1b8cbf78aa8258d7379cb"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);