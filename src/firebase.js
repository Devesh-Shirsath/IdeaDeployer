import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, child, get } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAjZHzdlR_rkttSuZ634u-_PRAHLrNH45M",
    authDomain: "planner-crud-79575.firebaseapp.com",
    projectId: "planner-crud-79575",
    storageBucket: "planner-crud-79575.appspot.com",
    messagingSenderId: "431610005823",
    appId: "1:431610005823:web:b096f4bbaf95cc6cc26b8a"
};

    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

function WriteUserData(userId, name, email, imageUrl) {
    
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }

const dbRef = ref(db);
get(child(dbRef, `users/16`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

export default WriteUserData;