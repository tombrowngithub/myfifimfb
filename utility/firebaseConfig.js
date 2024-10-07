import { initializeApp } from "firebase/app";
import {initializeAuth, getReactNativePersistence} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBntMIBy23Omz0TM4yAG5b_XlN3KX228Mo",
    authDomain: "mfbbank-c2eaf.firebaseapp.com",
    projectId: "mfbbank-c2eaf",
    storageBucket: "mfbbank-c2eaf.appspot.com",
    messagingSenderId: "971018602320",
    appId: "1:971018602320:web:6e415c0ff2d69344114e55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//InitializeAuth persistence
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

//Initialize Firestore
const db = getFirestore(app)

export {auth, db}
