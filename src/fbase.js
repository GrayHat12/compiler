import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyC7UFdh9RxKqBWtpOKSfREJQy64IqQJNV0",
    authDomain: "loopbot-d7cbd.firebaseapp.com",
    databaseURL: "https://loopbot-d7cbd.firebaseio.com",
    projectId: "loopbot-d7cbd",
    storageBucket: "",
    messagingSenderId: "283977215925",
    appId: "1:283977215925:web:4e9ba5c6b78c1b7c4e33fc"
};
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export default databaseRef.child("compiler");