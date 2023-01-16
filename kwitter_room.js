const firebaseConfig = {
      apiKey: "AIzaSyDczqXe5pdsET30rCzwPTN5nR_HNkhK-hM",
      authDomain: "project-letschat.firebaseapp.com",
      databaseURL: "https://project-letschat-default-rtdb.firebaseio.com",
      projectId: "project-letschat",
      storageBucket: "project-letschat.appspot.com",
      messagingSenderId: "731103031904",
      appId: "1:731103031904:web:082cf3321a9ceb04ef8905",
      measurementId: "G-K087K0XX92"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
