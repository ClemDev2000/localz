import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC3CP9RvkEe9YItKh38n2m_FUGnMaY3CbQ',
  authDomain: 'localz-39307.firebaseapp.com',
  projectId: 'localz-39307',
  storageBucket: 'localz-39307.appspot.com',
  messagingSenderId: '528118503209',
  appId: '1:528118503209:web:368ab6342666c50141c938',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Auth exports
export const auth = firebase.auth();
export const authCredential = firebase.auth.EmailAuthProvider.credential;
export const authPersistence = firebase.auth.Auth.Persistence;

// Storage exports
export const storage = firebase.storage();

// Firestore exports
export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const increment = firebase.firestore.FieldValue.increment;
export const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
export const arrayRemove = firebase.firestore.FieldValue.arrayRemove;
export const fieldDelete = firebase.firestore.FieldValue.delete;

// Helper functions

/**
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc: firebase.firestore.DocumentSnapshot) {
  const data = doc.data();
  return data;
}
