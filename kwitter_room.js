
var firebaseConfig = {
      apiKey: "AIzaSyBQrrjWOEa_nBALETBtshbB78OiOVXQjco",
      authDomain: "kwitter-454ad.firebaseapp.com",
      projectId: "kwitter-454ad",
      storageBucket: "kwitter-454ad.appspot.com",
      messagingSenderId: "701407394155",
      appId: "1:701407394155:web:2be3f6c04adfc7ec09f42e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout()
{
      window.location="index.html";
}