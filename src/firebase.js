import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAPF_rwHFu2zXhO1OaG9LLLjNxZHzzkEUI',
//   authDomain: 'todoapp-63b20.firebaseapp.com',
//   databaseURL: 'https://todoapp-63b20.firebaseio.com',
//   projectId: 'todoapp-63b20',
//   storageBucket: 'todoapp-63b20.appspot.com',
//   messagingSenderId: '612240963601',
//   appId: '1:612240963601:web:2039f5af71ff6b97c2d9b0',
//   measurementId: 'G-7EVCD24ZXC',
// };

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAPF_rwHFu2zXhO1OaG9LLLjNxZHzzkEUI',
  authDomain: 'todoapp-63b20.firebaseapp.com',
  databaseURL: 'https://todoapp-63b20.firebaseio.com',
  projectId: 'todoapp-63b20',
  storageBucket: 'todoapp-63b20.appspot.com',
  messagingSenderId: '612240963601',
  appId: '1:612240963601:web:2039f5af71ff6b97c2d9b0',
  measurementId: 'G-7EVCD24ZXC',
});

const db = firebaseApp.firestore();

export default db;
