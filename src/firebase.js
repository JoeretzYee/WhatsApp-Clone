import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBbE9nptALCv5Px-9YjEBX0cQ5RfO3gtVU",
    authDomain: "whats-app-clone-d2b4b.firebaseapp.com",
    databaseURL: "https://whats-app-clone-d2b4b.firebaseio.com",
    projectId: "whats-app-clone-d2b4b",
    storageBucket: "whats-app-clone-d2b4b.appspot.com",
    messagingSenderId: "508089453682",
    appId: "1:508089453682:web:33066b706118b6023e46eb"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth,provider };
export default db;
