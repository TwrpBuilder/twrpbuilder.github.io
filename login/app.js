(function(){ // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAjfPSshzXoje3pewbnfpJYhlRrbNRmFEU",
    authDomain: "twrpbuilder.firebaseapp.com",
    databaseURL: "https://twrpbuilder.firebaseio.com",
    projectId: "twrpbuilder",
    storageBucket: "twrpbuilder.appspot.com",
    messagingSenderId: "1079738297898"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  const txtEmail= document.getElementById('txtEmail');
  const txtPassword= document.getElementById('txtPassword');
  const btLogin= document.getElementById('btLogin');
  
  btLogin.addEventListener('click' , e => {
  const email=txtEmail.value;
  const password=txtPassword.value;
  const auth =firebase.auth();
  const promise= auth.signInWithEmailAndPassword(email,password);
  promise.catch(e => console.log (e.message) );
  }
  )
}());
