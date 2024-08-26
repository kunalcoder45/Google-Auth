import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLRgwJCXDz9-NtntVCJDKB5tEPO5WwzAk",
  authDomain: "auth-c20e3.firebaseapp.com",
  projectId: "auth-c20e3",
  storageBucket: "auth-c20e3.appspot.com",
  messagingSenderId: "37692570985",
  appId: "1:37692570985:web:1f6369f1f3456f6acb91f8",
  measurementId: "G-XKW1J4TP3Y"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// auth.languageCode = "en"
// const provider = new GoogleAuthProvider();

const user = auth.currentUser;

function updateUserProfile(user) {
  const userName = user.displayName || "No name provided";
  const userEmail = user.email || "No email provided";
  const userProfilePicture = user.photoURL || "default-profile.png"; // Provide a default image if null

  document.getElementById("userName").textContent = userName;
  document.getElementById("userEmail").textContent = userEmail;
  document.getElementById("userProfilePicture").src = userProfilePicture;
}

// This function checks the authentication state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // If user is signed in, update profile UI
    updateUserProfile(user);
    //console.log("User ID:", user.uid);
    const uid = user.uid;
    return uid;
    
  } else {
    // If no user is signed in, redirect to login page
    alert("Please create an account & log in.");
    window.location.href = "/index.html";
  }
});

// Ensure that the auth state is being checked after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      updateUserProfile(user);
    }
  });
});

// log out
const logOut = document.getElementById("logout-btn");

logOut.addEventListener("click", function() {
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
});

