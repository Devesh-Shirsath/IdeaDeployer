import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAjZHzdlR_rkttSuZ634u-_PRAHLrNH45M",
  authDomain: "planner-crud-79575.firebaseapp.com",
  databaseURL: "https://planner-crud-79575-default-rtdb.firebaseio.com",
  projectId: "planner-crud-79575",
  storageBucket: "planner-crud-79575.appspot.com",
  messagingSenderId: "431610005823",
  appId: "1:431610005823:web:b096f4bbaf95cc6cc26b8a"
};

var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();