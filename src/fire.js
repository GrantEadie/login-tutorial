import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDltwieXPJHivDoPOij7WzYNgobMZICkI4",
    authDomain: "login-tutorial-f319b.firebaseapp.com",
    projectId: "login-tutorial-f319b",
    storageBucket: "login-tutorial-f319b.appspot.com",
    messagingSenderId: "127201887749",
    appId: "1:127201887749:web:58a30088a5d02333577e6c",
    measurementId: "G-DC35F28XBJ"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;