import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDR0xdQUHnIX3b7NehVnF5oa8zUVEWSaoA",
    authDomain: "vue-live-chat-53ee8.firebaseapp.com",
    projectId: "vue-live-chat-53ee8",
    storageBucket: "vue-live-chat-53ee8.appspot.com",
    messagingSenderId: "63048641047",
    appId: "1:63048641047:web:6816f2ba7c73f612e40a52"
};

firebase.initializeApp(firebaseConfig)
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }