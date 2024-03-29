const firebaseConfig = {
  apiKey: "AIzaSyAAUwKpK6j5fy3gTzMwamS5QHTJ7xSic0c",
  authDomain: "smart-test-ee901.firebaseapp.com",
  databaseURL: "https://smart-test-ee901-default-rtdb.firebaseio.com",
  projectId: "smart-test-ee901",
  storageBucket: "smart-test-ee901.appspot.com",
  messagingSenderId: "608199887325",
  appId: "1:608199887325:web:1830f4c5d50e2ce9c6ce34"
};
firebase.initializeApp(firebaseConfig);
// Get a reference to  RealTime Database service
const database = firebase.database();

let login     = document.getElementById("login")
let signUp    = document.querySelector(".signUp")
let loteFile  = document.querySelector(".loteFile")
let myform    = document.querySelector(".myform")
let body      = document.querySelector("body")
let regester  = document.querySelector(".regester")
let loading   = document.querySelector(".loading")
let loginpage = document.querySelector(".loginpage")


const correct = document.querySelector('.correct')
const close  = document.querySelector('.close')
const Message = document.querySelector('.error-message')


// button log in to redirect page adding room
loginpage.addEventListener("click", (e) => {
  e.preventDefault();
  const email = myform.email.value;
  const password = myform.password.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {

      myform.email.value = '';
      myform.password.value = '';


      window.location.href = "Pages/AddNewRooms.html";
    })
    .catch((error) => {

      const errorCode = error.code;
    
      const errorMessage = error.message

      Message.innerHTML = errorMessage
      correct.style.transform = 'scale(1)'
    });
});






close.addEventListener('click', (e) => {
  e.preventDefault()
  correct.style.transform = 'scale(0)'
})