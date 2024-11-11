// src/firebase.js

import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBLRHhtdZ9rc3PBPqDflCCuFo-DqLjYYCA",
    authDomain: "hiep-weding.firebaseapp.com",
    projectId: "hiep-weding",
    storageBucket: "hiep-weding.firebasestorage.app",
    messagingSenderId: "1054261392530",
    appId: "1:1054261392530:web:10acf3723374f9138c224b",
    measurementId: "G-Q9HGYR5EQZ",
    databaseURL:"https://hiep-weding-default-rtdb.firebaseio.com/"
};

// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);

// Truy cập Firestore
const db = firebase.firestore();

export default db;
