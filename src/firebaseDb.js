import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyAd9mp0P5HdUGGJE575dpD5j8dqM26jNF8",
  authDomain: "pesquisas-678f7.firebaseapp.com",
  databaseURL: "https://pesquisas-678f7.firebaseio.com",
  projectId: "pesquisas-678f7",
  storageBucket: "pesquisas-678f7.appspot.com",
  messagingSenderId: "228275158828",
  appId: "1:228275158828:web:dba171704f43ac846c7689",
  measurementId: "G-1TNKCTWP9Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics(); -> é necessário?

// utils
const db = firebase.firestore()
const auth = firebase.auth()

//colecoes
const usersCollection = db.collection('users')

export {
  db,
  auth,
  usersCollection
}
