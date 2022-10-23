import firebase from "firebase/compat/app";
import "firebase/compat/database"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAiPM_jeHlTxYieFBlrhf6846yYaXfEAls",
    authDomain: "react-gb-6db09.firebaseapp.com",
    projectId: "react-gb-6db09",
    storageBucket: "react-gb-6db09.appspot.com",
    messagingSenderId: "905203845177",
    appId: "1:905203845177:web:908218c21653a1f788e5e8"
};

const firebaseDb = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
