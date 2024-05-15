// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALcmU69_Dxcy8A0jzVHLezMKsoBgQgLBo",
  authDomain: "front-lab4.firebaseapp.com",
  projectId: "front-lab4",
  storageBucket: "front-lab4.appspot.com",
  messagingSenderId: "696794168330",
  appId: "1:696794168330:web:67de36e8bbe45913f533f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");

const auth = getAuth();
const provider = new GoogleAuthProvider();

const userSignIn = async () => {
  signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      console.log(user);
  }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
  }
const userSignOut = async () => {
    signOut(auth).then(() => {
        alert("You have been signed out!")
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })
 }
onAuthStateChanged(auth, (user) => {
  if (user) {
      alert("You are authenticated with Google");
      console.log(user);
  }
})

signInButton.addEventListener("click", userSignIn);
signOutButton.addEventListener("click", userSignOut);