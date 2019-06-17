import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB8dFCkPIwejsU7cqE1hwYsvVOnmN7pcN0",
  authDomain: "sendtivity.firebaseapp.com",
  databaseURL: "https://sendtivity.firebaseio.com",
  projectId: "sendtivity",
  storageBucket: "sendtivity.appspot.com",
  messagingSenderId: "328630731499",
  appId: "1:328630731499:web:b5fea56bb5cc6434"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;