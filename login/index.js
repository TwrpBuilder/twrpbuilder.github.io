  var config = {
    apiKey: "AIzaSyAjfPSshzXoje3pewbnfpJYhlRrbNRmFEU",
    authDomain: "twrpbuilder.firebaseapp.com",
    databaseURL: "https://twrpbuilder.firebaseio.com",
    projectId: "twrpbuilder",
    storageBucket: "twrpbuilder.appspot.com",
    messagingSenderId: "1079738297898"
  };
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function register(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}

// reverse the firebase ref snapshot
function reverseSnapshot(snap){

  var reverseSnap = [];
  snap.forEach(function(data){
    var val = data.val();
    reverseSnap.push(val)
  });

  return reverseSnap.reverse();
}